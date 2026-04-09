import { NextRequest, NextResponse } from 'next/server';
import { sendInternalNotification, sendClientConfirmation } from './emails';
import { appendToSheet } from './sheets';

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

    await sendInternalNotification({ name, email, phone, budget, description });
    await sendClientConfirmation({ name, email, description });

    try {
      await appendToSheet({ name, email, phone, budget, description });
    } catch (sheetErr) {
      console.error('Google Sheets error:', sheetErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Failed to send. Please try again.' }, { status: 500 });
  }
}
