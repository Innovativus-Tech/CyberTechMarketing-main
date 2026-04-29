import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import ContactSubmission from '@/models/ContactSubmission';

export async function POST(request: NextRequest) {
  try {
    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        { error: 'Contact storage is not configured yet. Add MONGODB_URI to enable submissions.' },
        { status: 503 }
      );
    }

    await dbConnect();

    const body = await request.json();

    const {
      category,
      firstName,
      lastName,
      email,
      phone,
      company,
      jobTitle,
      country,
      companySize,
      message,
    } = body;

    if (!category || !firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    const submission = new ContactSubmission({
      category,
      firstName,
      lastName,
      email,
      phone,
      company,
      jobTitle,
      country,
      companySize,
      message,
    });

    await submission.save();

    return NextResponse.json(
      {
        success: true,
        message: 'Contact submission saved successfully',
        data: submission,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to save contact submission' },
      { status: 500 }
    );
  }
}
