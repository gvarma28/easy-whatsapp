"use client";

import { useState, useEffect, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone, Send } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Get URL parameters
    const params = new URLSearchParams(window.location.search);
    const userParam = params.get("user");

    // If user parameter exists, set default message
    if (userParam) {
      if (userParam === "fio") {
        setMessage(`Welcome to Fio!\nWe craft beautiful handmade jewelry with love and care, designed to add the perfect touch to your outfit.\nFollow us on Instagram @fio_in and feel free to reach out!\nThank you for being a part of our journey!`)
      } else {
        setMessage(`Hey there, I'm ${userParam}!`)
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Strip any non-numeric characters from the phone number
    const cleanedNumber = phoneNumber.replace(/\D/g, "");

    // Encode the message for a URL
    const encodedMessage = encodeURIComponent(message);

    // Construct the WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${cleanedNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;

    // Open in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-background">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone size={20} /> Easy WhatsApp
            </CardTitle>
            <CardDescription>
              Enter a phone number and message to open WhatsApp
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="9876543210"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              <div className="space-y-2 mb-4">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-38 w-full"
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                <Send className="mr-2 h-4 w-4" /> Send via WhatsApp
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </ThemeProvider>
  );
}
