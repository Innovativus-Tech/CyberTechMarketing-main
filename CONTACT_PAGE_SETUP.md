# Contact Page Setup Guide

## Overview
The contact page now features:
- ✅ Standard icons (Lucide React) instead of emojis
- ✅ Interactive modal forms for each contact category
- ✅ MongoDB integration for storing submissions
- ✅ Professional SaaS-style design

## Quick Start

### 1. Configure MongoDB
Edit `.env.local` and add your MongoDB connection string:

```env
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/cybertechmarketing?retryWrites=true&w=majority
```

Get a free MongoDB Atlas cluster at: https://www.mongodb.com/cloud/atlas

### 2. Test the Form
1. Navigate to http://localhost:3000/contact
2. Click on any CTA button (e.g., "Talk to Sales")
3. Fill in the form and submit
4. Data will be stored in MongoDB

## Form Categories

### Sales Inquiry
- Fields: First Name, Last Name, Email, Phone, Company, Job Title, Country, Company Size, Message
- Response time: 2-4 hours

### Customer Support
- Fields: First Name, Last Name, Email, Phone, Message
- Response time: 1-2 hours

### Partnerships
- Fields: First Name, Last Name, Email, Phone, Company, Message
- Response time: 24 hours

### Careers
- Fields: First Name, Last Name, Email, Phone, Job Title, Message
- Response time: 2-3 days

### General Inquiry
- Fields: First Name, Last Name, Email, Phone, Message
- Response time: 24 hours

## Database Schema

```javascript
{
  category: String,         // 'sales' | 'support' | 'partnerships' | 'careers' | 'general'
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  company: String,
  jobTitle: String,
  country: String,
  companySize: String,
  message: String,
  createdAt: Date,          // Auto-generated
  updatedAt: Date           // Auto-generated
}
```

## API Endpoint

### POST /api/contact

Request body:
```json
{
  "category": "sales",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1-234-567-8900",
  "company": "Acme Corp",
  "jobTitle": "Manager",
  "country": "US",
  "companySize": "50-200",
  "message": "I'd like to learn more about your services"
}
```

Success response:
```json
{
  "success": true,
  "message": "Contact submission saved successfully",
  "data": { /* submission object */ }
}
```

## Features

### Modal Design
- Responsive design (works on mobile and desktop)
- Category-specific color schemes
- Success confirmation message
- Left panel: Form inputs
- Right panel: Contact info (desktop only)

### Icons Used
- Rocket: Sales
- Target: Support
- Handshake: Partnerships
- Briefcase: Careers
- MessageCircle: General Inquiry
- Plus trust signals icons

## Next Steps (Optional)

1. **Email Notifications**: Send confirmation emails to users
2. **Admin Dashboard**: Create dashboard to view submissions
3. **Form Validation**: Add more advanced client-side validation
4. **Spam Protection**: Implement CAPTCHA or rate limiting
5. **Custom Styling**: Adjust colors for each category
