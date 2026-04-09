import { google } from 'googleapis';

type SheetData = {
  name: string;
  email: string;
  phone: string;
  budget: string;
  description: string;
};

function getAuth() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

async function setupSheet(sheets: ReturnType<typeof google.sheets>, spreadsheetId: string) {
  const check = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'Sheet1!A1:G1',
  });

  if (check.data.values?.[0]?.[0] === 'Date/Time') return;

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: 'Sheet1!A1:G1',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [['Date/Time', 'Name', 'Email', 'Phone Number', 'Budget', 'Project Description', 'Resolved']],
    },
  });

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        {
          updateSheetProperties: {
            properties: { sheetId: 0, gridProperties: { frozenRowCount: 1 } },
            fields: 'gridProperties.frozenRowCount',
          },
        },
        {
          repeatCell: {
            range: { sheetId: 0, startRowIndex: 0, endRowIndex: 1, startColumnIndex: 0, endColumnIndex: 7 },
            cell: {
              userEnteredFormat: {
                backgroundColor: { red: 0.08, green: 0.08, blue: 0.08 },
                textFormat: { bold: true, foregroundColor: { red: 1, green: 1, blue: 1 } },
              },
            },
            fields: 'userEnteredFormat(backgroundColor,textFormat)',
          },
        },
        {
          repeatCell: {
            range: { sheetId: 0, startRowIndex: 1, endRowIndex: 500, startColumnIndex: 6, endColumnIndex: 7 },
            cell: {
              userEnteredFormat: {
                backgroundColor: { red: 0.9, green: 0.26, blue: 0.26 },
                horizontalAlignment: 'CENTER',
              },
            },
            fields: 'userEnteredFormat(backgroundColor,horizontalAlignment)',
          },
        },
        {
          setDataValidation: {
            range: { sheetId: 0, startRowIndex: 1, endRowIndex: 500, startColumnIndex: 6, endColumnIndex: 7 },
            rule: { condition: { type: 'BOOLEAN' }, strict: true, showCustomUi: true },
          },
        },
        {
          addConditionalFormatRule: {
            rule: {
              ranges: [{ sheetId: 0, startRowIndex: 1, endRowIndex: 500, startColumnIndex: 6, endColumnIndex: 7 }],
              booleanRule: {
                condition: { type: 'TEXT_EQ', values: [{ userEnteredValue: 'TRUE' }] },
                format: { backgroundColor: { red: 0.2, green: 0.72, blue: 0.39 } },
              },
            },
            index: 0,
          },
        },
      ],
    },
  });
}

export async function appendToSheet(data: SheetData) {
  const auth = getAuth();
  const sheets = google.sheets({ version: 'v4', auth });
  const spreadsheetId = process.env.GOOGLE_SHEET_ID!;

  await setupSheet(sheets, spreadsheetId);

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Sheet1!A:G',
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [
        [
          new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          data.name        || '',
          data.email       || '',
          data.phone       || '',
          data.budget      || '',
          data.description || '',
          false,
        ],
        ['', '', '', '', '', '', ''],
      ],
    },
  });
}
