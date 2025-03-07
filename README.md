# Easy WhatsApp

A simple, elegant web application that allows users to quickly send WhatsApp messages without saving contacts first.

## [Try it now!](https://easy-whatsapp.vercel.app/?user=fio)

## Features

- **Easy Message Sending**: Enter a phone number and message to open WhatsApp with pre-filled content
- **User Parameter Support**: Add `?user=name` to the URL to auto-populate the message with "Hey there, I'm name!."
- **Mobile-Friendly Design**: Responsive UI optimized for phones and tablets
- **Dark Mode Support**: Toggle between light and dark themes

## Technology Stack

- **Next.js**: React framework for server-rendered applications
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: High-quality UI components built with Radix UI and Tailwind
- **TypeScript**: Type-safe JavaScript for better code quality

## How to Use

1. Enter a phone number (e.g., 9876543210)
2. Type your message or use the pre-filled text
3. Click "Send via WhatsApp" to open WhatsApp with your message ready to send

### URL Parameters

You can share links with pre-filled messages using the URL parameter:
```
https://easy-whatsapp.vercel.app/?user=Alex
```
This will automatically set the message to "Hey there, I'm Alex."

## Use Cases

- Quickly message new business contacts
- Create shareable links for specific users
- Avoid saving temporary contacts to your address book
- Generate WhatsApp links for customer service

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the application.