# Formspree Setup Guide

## Setting up the Contact Form

The contact form is currently configured to use Formspree. Here's how to set it up:

### 1. Create a Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form

### 2. Get Your Form ID
1. After creating a form, you'll get a form ID like `xrgjzqzw`
2. Replace `your-form-id` in the contact form with your actual form ID:

```jsx
<form 
  action="https://formspree.io/f/xrgjzqzw" 
  method="POST"
  className="space-y-6"
>
```

### 3. Test the Form
1. Submit a test message through the contact form
2. Check your email for the submission
3. You can also view submissions in your Formspree dashboard

### 4. Customize Email Notifications
- Go to your Formspree dashboard
- Configure email notifications
- Set up auto-responders if needed

### Alternative: Netlify Forms
If you prefer to use Netlify Forms instead:

1. Replace the form action with:
```jsx
<form name="contact" method="POST" data-netlify="true">
```

2. Add a hidden input for Netlify:
```jsx
<input type="hidden" name="form-name" value="contact" />
```

3. Deploy to Netlify and the form will work automatically.

### Alternative: Email Links Only
If you prefer to just use email links without a form:

1. Remove the form section
2. Keep only the individual researcher contact sections
3. Users can click the email links directly

## Current Configuration
- Form action: `https://formspree.io/f/your-form-id`
- Method: POST
- Required fields: Name, Email, Subject, Message
- Subject options: Research Inquiry, Collaboration Proposal, Speaking Engagement, Publication Question, General Question, Other

## Notes
- The form is styled with Tailwind CSS
- It includes proper validation and accessibility features
- The form will work immediately once you add your Formspree form ID
- All submissions will be sent to your email address 