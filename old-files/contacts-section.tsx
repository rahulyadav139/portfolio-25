import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Github,
  Linkedin,
  Mail,
  Send,
  Facebook,
  Instagram,
} from 'lucide-react';

const ContactsSection = () => {
  const socialLinks = [
    { icon: Github, label: 'Github', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'E-mail', href: 'mailto:nikita@example.com' },
    { icon: Send, label: 'Telegram', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
  ];

  const navigationItems = [
    { label: 'Main', href: '#main' },
    { label: 'About', href: '#main' },
    { label: 'Projects', href: '#projects' },
    { label: 'Articles', href: '#articles' },
  ];

  return (
    <section
      id="contacts"
      className="py-20 px-6 bg-gradient-to-t from-background via-background/80 to-background/50"
    >
      <div className="max-w-5xl mx-auto border border-red-500">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-8">... /Contacts ...</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Name and Title */}
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight mb-4">
                Nikita
                <br />
                Khvatov
              </h1>
              <p className="text-xl text-muted-foreground">
                Full-stack
                <br />
                developer
              </p>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map(link => (
                <Button
                  key={link.label}
                  variant="outline"
                  className="justify-start h-12 px-4"
                  asChild
                >
                  <a href={link.href} className="flex items-center gap-3">
                    <link.icon className="w-4 h-4" />
                    <span>{link.label}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Right Side - Navigation and Site Info */}
          <div className="space-y-8">
            {/* Navigation */}
            <div className="flex flex-wrap gap-8">
              {navigationItems.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Site Info Card */}
            <Card className="bg-card/30 border-border/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="font-semibold mb-4">Site</h3>
                  <p className="text-sm text-muted-foreground">
                    Handcrafted by{' '}
                    <span className="text-foreground font-medium">ME</span> /
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Designed by{' '}
                    <span className="text-foreground font-medium">Taisia</span>{' '}
                    /
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Powered by{' '}
                    <span className="text-foreground font-medium">NextJs</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Nikita Khvatov. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
