# EmailJS Setup Guide for OMG Agency

## 🚀 Quick Setup

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### 2. Add Email Service
1. Go to **Email Services** tab
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Connect your email account:
   - **uisoka1@gmail.com** (for testing - both booking and contact)
   - **andre@onmygrind.agency** (for production bookings)
   - **jagger@onmygrind.agency** (for production contact)

### 3. Create Email Templates

#### Template 1: Booking Template
**Template Name:** `booking_template`
**Subject:** `New Booking Request - {{service_type}}`

**HTML Content:**
```html
<h2>New Booking Request</h2>
<p><strong>From:</strong> {{from_name}} ({{from_email}})</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Producer/Service:</strong> {{producer_name}} / {{service_type}}</p>
<p><strong>Date:</strong> {{date}}</p>
<p><strong>Time:</strong> {{time}}</p>
<p><strong>Session Length:</strong> {{hours}} hours</p>
<p><strong>Project Type:</strong> {{project_type}}</p>
<p><strong>Details:</strong></p>
<p>{{details}}</p>
```

#### Template 2: Contact Template
**Template Name:** `contact_template`
**Subject:** `New Contact Message from {{from_name}}`

**HTML Content:**
```html
<h2>New Contact Message</h2>
<p><strong>From:</strong> {{from_name}} ({{from_email}})</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```

### 4. Update Configuration

Replace the placeholder values in `src/lib/emailjs.ts`:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here', // From Email Services tab
  BOOKING_TEMPLATE_ID: 'your_booking_template_id', // From Email Templates tab
  CONTACT_TEMPLATE_ID: 'your_contact_template_id', // From Email Templates tab
  PUBLIC_KEY: 'your_public_key_here', // From Account tab
};
```

## 📧 Email Destinations

### 🧪 Testing Phase
- **All emails** → `uisoka1@gmail.com`
- Use this to test all forms before going live

### 🚀 Production Phase
- **Booking Emails** → `andre@onmygrind.agency`
  - Producer session requests
  - Service quote requests
  - All booking-related inquiries

- **Contact Emails** → `jagger@onmygrind.agency`
  - General inquiries
  - Partnership requests
  - Media inquiries
  - Other non-booking messages

## 🔧 Features Implemented

### ✅ Booking Form
- Name, email, phone fields
- Date/time selection
- Session length options
- Project type selection
- Project details
- Loading states
- Success/error messages

### ✅ Contact Form
- Name, email, phone fields
- Message textarea
- Loading states
- Success/error messages

### ✅ EmailJS Integration
- Separate templates for different purposes
- Different email destinations
- Error handling
- Form validation

## 🎯 Form Flow

1. **User fills out form**
2. **Form validates required fields**
3. **EmailJS sends email to appropriate address**
4. **User sees success/error message**
5. **Form resets on success**

## 📱 Mobile Responsive

All forms are fully responsive and work on:
- Desktop computers
- Tablets
- Mobile phones

## 🚀 Deployment Ready

The EmailJS setup works with:
- Vercel hosting
- Netlify hosting
- Any static hosting service
- No backend required

## 🔄 Production Switch

When ready to go live, update `src/lib/emailjs.ts`:

```typescript
// Change these lines:
to_email: 'uisoka1@gmail.com', // TEST EMAIL

// To:
to_email: 'andre@onmygrind.agency', // For bookings
to_email: 'jagger@onmygrind.agency', // For contact
```

## 🔒 Security

- EmailJS handles all email sending
- No server-side code needed
- Form validation on client-side
- Rate limiting by EmailJS

## 💰 Pricing

- **Free tier:** 200 emails/month
- **Paid plans:** Starting at $15/month for more emails
- Perfect for agency needs

## 🎵 Music Industry Ready

Forms are optimized for:
- Producer bookings
- Studio sessions
- Service inquiries
- Industry contacts 