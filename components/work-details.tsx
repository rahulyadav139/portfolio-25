import { Footer } from './footer';
import { ArrowLeft, Calendar, Clock, ExternalLink, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Experience } from '@/types/experience';
import { formatDate } from '@/utils/formateDate';
import { getDuration } from '@/utils/getDuration';
import { Button } from './ui/button';

interface WorkDetailsProps {
  work: Experience;
}

export const WorkDetails = ({ work }: WorkDetailsProps) => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-6 pt-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Work Experience
          </Link>
        </div>

        {/* Work Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-5xl font-bold font-fira-code mb-2">
                {work.role}
              </h1>
              <p className="text-2xl text-muted-foreground mb-4">
                at {work.company.name}
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {formatDate(work.startDate)} -{' '}
                    {work.endDate ? formatDate(work.endDate) : 'Present'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>
                    {getDuration(
                      new Date(work.startDate),
                      new Date(work.endDate || new Date())
                    )}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{work.location}</span>
                </div>
              </div>
            </div>

            {/* Company Website Link */}
            <div className="flex items-center gap-3">
              <Button asChild className="font-medium">
                <a
                  href={work.company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Company
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Work Description */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 font-fira-code">
              Overview
            </h2>
            <div className="space-y-4">
              {work.fullDescription.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Key Responsibilities */}
          <div>
            <h2 className="text-2xl font-semibold mb-4 font-fira-code">
              Key Responsibilities
            </h2>
            <div className="space-y-3">
              {work.responsibilities.map((responsibility, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>{responsibility}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};
