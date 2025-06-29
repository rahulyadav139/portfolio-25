'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Mail,
  Send,
  MapPin,
  ArrowLeft,
  MessageCircle,
  Phone,
} from 'lucide-react';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import socialLinks from '@/data/social-links';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@rahulyadav.dev',
    href: 'mailto:contact@rahulyadav.dev',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-8435435659',
    href: 'tel:+918435435659',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bengaluru, India',
    href: 'https://maps.google.com/?q=Bengaluru,+India',
  },
];

const initialFormData = {
  name: '',
  email: '',
  message: '',
};

export const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData(initialFormData);
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-background pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl lg:text-8xl font-bold font-fira-code mb-6">
            Let&apos;s Work
            <br />
            <span className="text-muted-foreground">Together</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I&apos;m always interested in hearing about new projects and
            opportunities. Whether you&apos;re a company looking to hire, or
            you&apos;re a fellow developer who&apos;d like to collaborate,
            I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Left Column - Contact Form */}
          <div className="lg:col-span-2">
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="text-2xl font-fira-code flex items-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  Send a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-vertical"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`cursor-pointer rounded-md transition-colors ${
                      status === 'loading'
                        ? 'bg-muted cursor-not-allowed'
                        : 'bg-foreground text-background hover:bg-foreground/80'
                    }`}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </Button>

                  {status === 'success' && (
                    <p className="text-success text-center">
                      Message sent successfully!
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-destructive text-center">
                      Failed to send message. Please try again.
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Info & Social Links */}
          <div className="space-y-6">
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="font-fira-code">
                  Contact Information
                </CardTitle>
                <CardDescription>
                  You can also reach me through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map(item => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      item.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.value}
                      </p>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="font-fira-code">Social Links</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Connect with me on social platforms
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.slice(0, 3).map(link => (
                  <Link
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <link.icon className="w-5 h-5 mt-0.5" />
                    <div className="text-left">
                      <div className="font-medium">{link.label}</div>
                      <div className="text-xs text-muted-foreground">
                        {link.username}
                      </div>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};
