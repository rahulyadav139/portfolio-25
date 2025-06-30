'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import profile from '@/data/profile.json';

type MenuItem = {
  id: string;
  label: string;
  href: string;
  props?: {
    target?: string;
  };
};

const menuItems: MenuItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'work', label: 'Work', href: '#work' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  {
    id: 'resume',
    label: 'Resume',
    href: profile.resume,
    props: {
      target: '_blank',
    },
  },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px', // Adjust threshold here
      threshold: 0,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    }, observerOptions);

    // Observe all sections
    menuItems.forEach(item => {
      if (item.href.startsWith('#')) {
        const element = document.querySelector(item.href);
        if (element) {
          observer.observe(element);
        }
      }
    });

    return () => observer.disconnect();
  }, []);

  const isActive = (itemId: string) => {
    return activeSection === itemId;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="md:max-w-6xl mx-auto py-4 px-8 md:px-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/images/sign-initial.png"
                alt="logo"
                width={40}
                height={40}
                className="invert"
              />
            </Link>
            <p className="text-xl font-medium font-fira-code">
              Rahul
              <br />
              <span className="text-muted-foreground text-sm">Yadav</span>
            </p>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map(item => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  'flex items-center gap-1 transition-colors font-fira-code font-medium',
                  isActive(item.id)
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
                {...item.props}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <motion.div
            className="flex md:hidden items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Mobile Menu Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden relative"
                onClick={() => setIsOpen(!isOpen)}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden border-t bg-background/95 backdrop-blur-md px-8"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <nav className="container py-4 space-y-2">
              {menuItems.map((item, index) => {
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'relative block px-4 py-3 text-sm font-medium transition-colors rounded-lg',
                        isActive(item.id)
                          ? 'text-foreground bg-muted-foreground border border-muted-foreground/60'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      )}
                      onClick={() => setIsOpen(false)}
                      {...item.props}
                    >
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        {item.label}
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
