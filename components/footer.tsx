'use client';

import { ArrowRight, Phone } from 'lucide-react';
import socialLinks from '@/data/social-links';
import { DualCircleButton } from './dual-circle-button';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="py-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[7fr_3fr] gap-12 lg:gap-16 px-8 md:px-0">
          {/* Left Column - Name and Title */}
          <div className="space-y-1">
            <p className="text-5xl md:text-9xl lg:text-8xl font-bold font-fira-code leading-tight">
              Rahul
            </p>
            <div className="flex items-center gap-10">
              <p className="text-lg text-muted-foreground font-fira-code whitespace-pre-line">
                {`Fullstack\nDeveloper`}
              </p>
              <p className="text-5xl md:text-9xl lg:text-8xl font-bold font-fira-code leading-tight">
                Yadav
              </p>
            </div>
          </div>

          {/* Right Column - Navigation and Site Info */}
          <div className="space-y-6 self-center">
            <div className="flex flex-wrap items-center md:justify-end gap-4">
              <p className="text-lg font-medium font-fira-code">Get in touch</p>
              <DualCircleButton
                href="/contact"
                highlightedIcon={ArrowRight}
                unHighlightedIcon={Phone}
              />
            </div>

            {/* Site Credits */}
            <div className="bg-card/20 border border-border rounded-2xl p-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium font-fira-code mb-4">
                  Site
                </h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Handcrafted by ME /</p>
                  <p>Powered by NextJs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 py-8 border-t border-b border-border">
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map(social => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-2 flex items-center gap-2 bg-transparent border border-border/60 rounded-full hover:bg-card/50 hover:border-border transition-all duration-300"
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-medium">{social.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8  text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
