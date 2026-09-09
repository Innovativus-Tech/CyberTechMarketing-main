import { z } from 'zod';

// Accept familiar international formatting, then validate the actual digit count.
const phoneCharactersRegex = /^[+\d()\s.-]+$/;

// Base contact schema with common fields
const baseContactSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must not exceed 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Full name can only contain letters, spaces, hyphens, and apostrophes'),
  
  email: z
    .string()
    .email('Please provide a valid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(100, 'Email must not exceed 100 characters')
    .toLowerCase()
    .refine(
      (email) => {
        // Block common disposable email domains
        const disposableDomains = ['tempmail.com', 'throwaway.email', '10minutemail.com', 'guerrillamail.com'];
        const domain = email.split('@')[1];
        return !disposableDomains.includes(domain);
      },
      { message: 'Please use a valid business email address' }
    ),
  
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(25, 'Phone number must not exceed 25 characters')
    .regex(phoneCharactersRegex, 'Please provide a valid phone number')
    .refine((value) => {
      const digitCount = value.replace(/\D/g, '').length;
      return digitCount >= 10 && digitCount <= 15;
    }, 'Phone number must contain 10 to 15 digits')
    .transform((val) => val.replace(/\s+/g, ' ').trim()), // Normalize spaces

  serviceInterest: z
    .enum([
      'Digital Marketing & Growth',
      'Web Development',
      'Software Development',
      'AI & Intelligent Solutions',
      'Machine Learning & Data',
      'Mobile App Development',
      '',
    ])
    .optional()
    .or(z.literal('')),
  
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must not exceed 1000 characters')
    .trim(),
});

// Sales inquiry schema (most comprehensive)
export const salesContactSchema = baseContactSchema.extend({
  category: z.literal('sales'),
  
  company: z
    .string()
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must not exceed 100 characters')
    .optional()
    .or(z.literal('')),
  
  jobTitle: z
    .string()
    .min(2, 'Job title must be at least 2 characters')
    .max(100, 'Job title must not exceed 100 characters')
    .optional()
    .or(z.literal('')),
  
  country: z
    .string()
    .min(2, 'Please select a country')
    .max(50, 'Country name is too long')
    .optional()
    .or(z.literal('')),
  
  companySize: z
    .enum(['1-10', '11-50', '51-200', '201-500', '500+', ''])
    .optional()
    .or(z.literal('')),
});

// Support inquiry schema
export const supportContactSchema = baseContactSchema.extend({
  category: z.literal('support'),
});

// Partnership inquiry schema
export const partnershipContactSchema = baseContactSchema.extend({
  category: z.literal('partnerships'),
  
  company: z
    .string()
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must not exceed 100 characters')
    .optional()
    .or(z.literal('')),
});

// Union type for all contact forms
export const contactFormSchema = z.discriminatedUnion('category', [
  salesContactSchema,
  supportContactSchema,
  partnershipContactSchema,
]);

// Type exports
export type SalesContactInput = z.infer<typeof salesContactSchema>;
export type SupportContactInput = z.infer<typeof supportContactSchema>;
export type PartnershipContactInput = z.infer<typeof partnershipContactSchema>;
export type ContactFormInput = z.infer<typeof contactFormSchema>;

// Validation helper function
export function validateContactForm(data: unknown) {
  return contactFormSchema.safeParse(data);
}

// Individual schema validators
export function validateSalesContact(data: unknown) {
  return salesContactSchema.safeParse(data);
}

export function validateSupportContact(data: unknown) {
  return supportContactSchema.safeParse(data);
}

export function validatePartnershipContact(data: unknown) {
  return partnershipContactSchema.safeParse(data);
}
