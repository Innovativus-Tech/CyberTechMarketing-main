import mongoose, { Schema, Document } from 'mongoose';

export interface IContactSubmission extends Document {
  category: 'sales' | 'support' | 'partnerships' | 'careers' | 'general';
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  country: string;
  companySize: string;
  serviceInterest: string;
  message: string;
  createdAt: Date;
}

const ContactSubmissionSchema = new Schema<IContactSubmission>(
  {
    category: {
      type: String,
      enum: ['sales', 'support', 'partnerships', 'careers', 'general'],
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      default: '',
    },
    jobTitle: {
      type: String,
      default: '',
    },
    country: {
      type: String,
      default: '',
    },
    companySize: {
      type: String,
      default: '',
    },
    serviceInterest: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.ContactSubmission ||
  mongoose.model<IContactSubmission>('ContactSubmission', ContactSubmissionSchema);
