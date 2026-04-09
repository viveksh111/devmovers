import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { google } from 'googleapis';

const resend = new Resend(process.env.RESEND_API_KEY);

async function ensureHeaders(sheets: any, spreadsheetId: string) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'Sheet1!A1:F1',
  });

  if (!res.data.values || res.data.values.length === 0) {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: 'Sheet1!A1:F1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [['Date', 'Name', 'Email', 'Phone', 'Budget', 'Message']],
      },
    });
  }
}

async function appendToGoogleSheet(data: {
  name: string;
  email: string;
  phone: string;
  budget: string;
  description: string;
}) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const spreadsheetId = process.env.GOOGLE_SHEET_ID!;

  await ensureHeaders(sheets, spreadsheetId);

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Sheet1!A:F',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        [
          new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          data.name,
          data.email,
          data.phone || '—',
          data.budget || 'Not specified',
          data.description,
        ],
      ],
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, alt: phone, budget, description } = body;

    if (!name?.trim() || !email?.trim() || !description?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, and project details are required.' },
        { status: 400 }
      );
    }
    await resend.emails.send({
      from: 'DevMovers Contact <info@devmovers.com>',
      to: [process.env.NOTIFY_EMAIL ?? 'info@devmovers.com'],
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #131313; color: #e5e2e1; padding: 32px; border-radius: 16px;">
          <h1 style="color: #FFE224; font-size: 24px; margin-bottom: 8px;">New Project Inquiry</h1>
          <p style="color: #a1a1aa; margin-bottom: 24px;">Someone submitted a project brief on DevMovers.</p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #2a2a2a;">
              <td style="padding: 12px 0; color: #71717a; font-size: 13px; width: 140px;">Name</td>
              <td style="padding: 12px 0; color: #fff; font-weight: 600;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #2a2a2a;">
              <td style="padding: 12px 0; color: #71717a; font-size: 13px;">Email</td>
              <td style="padding: 12px 0; color: #FFE224;"><a href="mailto:${email}" style="color: #FFE224;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #2a2a2a;">
              <td style="padding: 12px 0; color: #71717a; font-size: 13px;">Phone / WhatsApp</td>
              <td style="padding: 12px 0; color: #fff;">${phone || '—'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #2a2a2a;">
              <td style="padding: 12px 0; color: #71717a; font-size: 13px;">Budget</td>
              <td style="padding: 12px 0; color: #fff;">${budget || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #71717a; font-size: 13px; vertical-align: top;">Project Details</td>
              <td style="padding: 12px 0; color: #fff; white-space: pre-wrap;">${description}</td>
            </tr>
          </table>

          <div style="margin-top: 32px; padding: 16px; background: rgba(255,226,36,0.08); border-radius: 8px; border-left: 3px solid #FFE224;">
            <p style="color: #a1a1aa; font-size: 12px; margin: 0;">Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
    });

    await resend.emails.send({
      from: 'DevMovers <info@devmovers.com>',
      to: [email],
      subject: 'We received your inquiry — DevMovers',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #131313; color: #e5e2e1; padding: 32px; border-radius: 16px;">
          <h1 style="color: #FFE224; font-size: 24px; margin-bottom: 8px;">Thanks, ${name}!</h1>
          <p style="color: #a1a1aa; line-height: 1.6;">We've received your project inquiry and will get back to you within <strong style="color: #fff;">4 hours</strong>.</p>
          
          <div style="margin: 24px 0; padding: 20px; background: #1c1b1b; border-radius: 12px;">
            <p style="color: #71717a; font-size: 13px; margin: 0 0 8px;">Your project brief:</p>
            <p style="color: #e5e2e1; margin: 0; white-space: pre-wrap; font-size: 14px;">${description}</p>
          </div>

          <p style="color: #a1a1aa; font-size: 13px;">In the meantime, feel free to reach us at <a href="mailto:info@devmovers.com" style="color: #FFE224;">info@devmovers.com</a> or schedule a free call.</p>
          
          <div style="margin-top: 32px; text-align: center;">
            <a href="https://cal.com/devmovers" style="display: inline-block; background: #FFE224; color: #131313; font-weight: 700; padding: 14px 28px; border-radius: 999px; text-decoration: none; font-size: 14px;">
              Book a Free Discovery Call
            </a>
          </div>

          <p style="color: #3f3f46; font-size: 12px; margin-top: 32px; text-align: center;">DevMovers — Secure, Scalable & High-Performance Digital Products</p>
        </div>
      `,
    });

    try {
      await appendToGoogleSheet({ name, email, phone, budget, description });
    } catch (sheetErr) {
      console.error('Google Sheets error:', sheetErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Failed to send. Please try again.' }, { status: 500 });
  }
}
