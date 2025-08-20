# Email Setup Guide for Contact Form

## Option 1: EmailJS (Recommended - Client-side)

### Setup Steps:

1. **Create EmailJS Account**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up for a free account

2. **Add Email Service**
   - Go to Email Services
   - Add Gmail, Outlook, or any other email service
   - Note down the Service ID (e.g., 'gmail')

3. **Create Email Template**
   - Go to Email Templates
   - Create a new template
   - Use this template structure:

```html
Subject: Portfolio Contact: {{subject}}

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}

Message:
{{message}}
```

4. **Get Your Credentials**
   - Note down your Template ID (e.g., 'template_abc123')
   - Note down your Public Key (e.g., 'user_abc123')

5. **Update Contact Form**
   - Open `src/app/contact/page.tsx`
   - Replace the placeholder values:
     ```javascript
     const serviceId = 'YOUR_EMAILJS_SERVICE_ID' // Replace with your service ID
     const templateId = 'YOUR_EMAILJS_TEMPLATE_ID' // Replace with your template ID
     const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY' // Replace with your public key
     ```

## Option 2: Backend API (Server-side)

### Using the existing API route:

1. **Install Nodemailer**
   ```bash
   npm install nodemailer
   npm install @types/nodemailer --save-dev
   ```

2. **Update API Route**
   - Open `src/app/api/send-email/route.ts`
   - Replace the simulation with actual email service

3. **Configure Email Service**
   - Use Gmail SMTP, SendGrid, or any other email service
   - Add environment variables for credentials

## Option 3: Formspree (Easiest)

1. **Create Formspree Account**
   - Go to [Formspree.io](https://formspree.io/)
   - Create a free account

2. **Create Form**
   - Create a new form
   - Get your form endpoint (e.g., 'https://formspree.io/f/xayzabc')

3. **Update Contact Form**
   - Replace the EmailJS implementation with Formspree
   - Use the form endpoint as the action

## Current Implementation

The contact form is currently set up with EmailJS but needs your credentials to work. The form includes:

- ✅ Form validation
- ✅ Error handling
- ✅ Loading states
- ✅ Success messages
- ✅ File attachment support
- ✅ Responsive design

## Testing

Once configured, you can test the form by:
1. Filling out all required fields
2. Submitting the form
3. Checking your email for the message
4. Checking the browser console for any errors

## Security Notes

- Never expose email credentials in client-side code
- Use environment variables for sensitive data
- Consider rate limiting for production use
- Validate all inputs server-side
