import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import workExperience from '@/data/work-experience.json';
import { getDuration } from '@/utils/getDuration';
import { formatDate } from '@/utils/formateDate';
import { Experience } from '@/types/experience';

export const WorkSection = () => {
  return (
    <section id="work" className="pt-32 pb-16">
      {/* Section Title */}
      <div className="text-right mb-8 mx-auto max-w-6xl px-8 md:px-0">
        <h2 className="text-5xl md:text-8xl font-bold mb-4 font-fira-code">
          Work
        </h2>
      </div>

      {/* Work Experience Timeline */}
      <div className="">
        {workExperience.map((job, index) => (
          <Link
            key={index}
            href={`/work/${job.id}`}
            className={`relative border-t border-border/60 ${
              workExperience.length - 1 === index ? 'border-b' : 'border-b-none'
            } inline-block w-full hover:bg-foreground/90 hover:[&_.typography]:text-black cursor-pointer`}
          >
            <Card
              className={`max-w-6xl mx-auto border-none shadow-none bg-transparent backdrop-blur-sm transition-colors rounded-none  px-0`}
            >
              <CardContent className="p-6">
                <div className="grid md:grid-cols-4 gap-4 items-center">
                  {/* Period & Duration */}
                  <div className="space-y-1">
                    <div className="typography text-sm font-medium">
                      {formatDate(job.startDate)} -{' '}
                      {job.endDate ? formatDate(job.endDate) : 'Present'}
                    </div>
                    <div className="typography text-xs text-muted-foreground">
                      {getDuration(
                        new Date(job.startDate),
                        new Date(job.endDate || new Date())
                      )}
                    </div>
                  </div>

                  {/* Company */}
                  <div className="md:col-span-1">
                    <p className="typography font-medium">{job.company.name}</p>
                    {job.company.website && (
                      <p className="typography text-xs text-muted-foreground">
                        {job.company.website.replace('https://', '')}
                      </p>
                    )}
                  </div>

                  {/* Position & Technologies */}
                  <div className="md:col-span-2 flex md:justify-between items-center">
                    <p className="typography text-xl font-fira-code">
                      {job.role} | {job.company.industry}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Work Summary */}
      <div className="mt-8 text-right mx-auto max-w-6xl px-8 md:px-0">
        <div className="text-md text-muted-foreground">
          Work experience
          <br />
          <span className="font-semibold text-foreground text-lg font-fira-code">
            {calculateTotalExperience(workExperience)}
          </span>
        </div>
      </div>
    </section>
  );
};

const calculateTotalExperience = (workExperience: Experience[]) => {
  const months = workExperience.reduce<number>((acc, job) => {
    const start = new Date(job.startDate);
    const end = new Date(job.endDate || new Date());

    acc += (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 30);

    return acc;
  }, 0);

  const totalYears = Math.floor(months / 12);
  const remainingMonths = Math.floor(months % 12);

  return `${totalYears} years ${remainingMonths} months`; // 4 years 9 months
};
