import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';
import dbConnect from '@/lib/mongodb';
import ContactSubmission from '@/models/ContactSubmission';
import { validateContactForm } from '@/lib/validations/contact';

export async function POST(request: NextRequest) {
  try {
    const origin = request.headers.get('origin');
    if (origin && origin !== request.nextUrl.origin) return NextResponse.json({ error: 'Please submit from this website.' }, { status: 403 });
    if (Number(request.headers.get('content-length') || 0) > 12000) return NextResponse.json({ error: 'Message too large.' }, { status: 413 });
    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        { error: 'Contact storage is not configured yet. Add MONGODB_URI to enable submissions.' },
        { status: 503 }
      );
    }

    const body = await request.json();
    if (body?.website) return NextResponse.json({ success: true }, { status: 201 });

    // Validate request body with Zod
    const validation = validateContactForm(body);

    if (!validation.success) {
      // Format Zod errors for better user experience
      const errors = validation.error.issues.map((err) => ({
        field: err.path.join('.'),
        message: err.message,
      }));

      return NextResponse.json(
        {
          error: 'Validation failed',
          details: errors,
          message: errors[0]?.message || 'Please check your input and try again',
        },
        { status: 400 }
      );
    }

    // Use validated data
    const validatedData = validation.data;
    await dbConnect();

    const submission = new ContactSubmission({
      category: validatedData.category,
      firstName: validatedData.firstName,
      lastName: validatedData.lastName,
      email: validatedData.email,
      phone: validatedData.phone,
      company: 'company' in validatedData ? validatedData.company : undefined,
      jobTitle: 'jobTitle' in validatedData ? validatedData.jobTitle : undefined,
      country: 'country' in validatedData ? validatedData.country : undefined,
      companySize: 'companySize' in validatedData ? validatedData.companySize : undefined,
      serviceInterest: validatedData.serviceInterest || undefined,
      message: validatedData.message,
    });

    await submission.save();

    return NextResponse.json(
      {
        success: true,
        message: 'Contact submission saved successfully',
        data: {
          id: submission._id,
          category: submission.category,
          email: submission.email,
          serviceInterest: submission.serviceInterest,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error:', error);

    // Handle Zod validation errors
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: 'Validation error',
          details: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to save contact submission' },
      { status: 500 }
    );
  }
}
