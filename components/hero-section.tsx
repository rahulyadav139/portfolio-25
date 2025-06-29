import { ArrowRight } from 'lucide-react';
import socialLinks from '@/data/social-links';
import { IconButton } from './icon-button';

export const HeroSection = () => {
  return (
    <section className="min-h-screen pt-48 px-6">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr_3fr] gap-4 max-w-6xl mx-auto">
        <div className="md:col-span-2">
          <p className="text-5xl md:text-9xl font-bold font-fira-code">
            Full-stack
          </p>
        </div>
        <div className="order-2 md:order-none self-center md:justify-self-end">
          <IconButton
            icon={ArrowRight}
            href="/contact"
            label="Contact"
            classNames={{
              label: 'px-20 font-fira-code italic font-medium md:w-auto w-full',
              root: 'md:w-auto w-full',
            }}
          />
        </div>
        <div className="order-1 md:order-none text-xl md:text-xl text-muted-foreground py-4">
          I build user interfaces that marry creativity with performance,
          creating{' '}
          <span className="text-primary italic">seamless experiences</span> that
          captivate users and drive{' '}
          <span className="text-primary italic">business growth</span>.
        </div>
        <div className="md:col-span-2 self-end justify-self-end">
          <p className="text-5xl md:text-9xl font-bold self-end font-fira-code">
            Developer
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-20">
        {socialLinks.map(({ label, icon: Icon, url }) => (
          <a
            key={label}
            href={url}
            className="border border-muted-foreground/30 bg-transparent flex items-center gap-2 justify-center size-12 rounded-full text-secondary-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </section>
  );
};
