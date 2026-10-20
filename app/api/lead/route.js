import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;

    if (!name || !email || !phone) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    // This is a placeholder for actual SMTP/Lead management logic
    // In a real Vercel environment, you would use 'nodemailer' or an API like Resend.
    // Since env vars are likely unset in the preview, we'll log and return success.
    
    console.log('Lead Received:', data);

    return NextResponse.json({ 
      success: true, 
      message: 'Lead processed successfully' 
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
