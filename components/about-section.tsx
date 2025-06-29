import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import skills from '@/data/skills.json';
import { FiGithub } from 'react-icons/fi';
import profile from '@/data/profile.json';
import { DualCircleButton } from './dual-circle-button';

export const AboutSection = () => {
  return (
    <section id="about" className="pt-32 pb-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[2fr_2fr_1fr] gap-16 mb-16 items-start">
          <p className="font-semibold font-fira-code text-xl">
            .../About me...
          </p>
          <p className="text-muted-foreground text-lg mb-8">
            I&apos;m a{' '}
            <span className="text-foreground font-medium italic">
              full-stack developer
            </span>{' '}
            with a passion for building scalable and efficient web applications.
            I&apos;m a{' '}
            <span className="text-foreground font-medium italic">
              quick learner
            </span>{' '}
            and I&apos;m always looking for new challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-24 items-start">
          {/* Left Side - About Header and Skills */}
          <div className="space-y-8">
            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              <SkillCard
                title="Front-end"
                skills={skills.frontend}
                classNames={{
                  card: 'bg-gray-100 text-gray-900 col-span-2 border-gray-200',
                }}
              />
              <SkillCard
                title="Styles"
                skills={skills.styles}
                classNames={{
                  card: 'bg-card border-border text-card-foreground',
                }}
              />
              <div className="flex justify-center items-center">
                <DualCircleButton
                  href={profile.socialLinks.github}
                  highlightedIcon={ArrowUpRight}
                  unHighlightedIcon={FiGithub}
                />
              </div>

              <SkillCard
                title="Back-end"
                skills={skills.backend}
                classNames={{
                  card: 'bg-card border-border text-card-foreground col-span-2',
                }}
              />

              <div className="flex justify-start items-center">
                <p className="text-sm text-muted-foreground italic max-w-[80%]">
                  Some of my favorite technologies, topics, or tools that I
                  worked with
                </p>
              </div>
              <SkillCard
                title="Tools"
                skills={skills.tools}
                classNames={{
                  card: 'bg-card border-border text-card-foreground',
                }}
              />
            </div>
          </div>

          {/* Right Side - Introduction and Photo */}
          <div className="h-full">
            {/* Developer Photo */}
            {/* <div className="flex justify-end"> */}
            <Card className="bg-card rounded-3xl border-border overflow-hidden w-full h-full">
              <CardContent className="p-0 h-full relative">
                <Image
                  src="/images/display-picture.jpg"
                  alt="Developer Photo"
                  fill
                  className="w-full h-full object-cover object-top"
                />
              </CardContent>
            </Card>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  title: string;
  skills: string[];
  classNames: {
    card?: string;
    header?: string;
    title?: string;
    content?: string;
  };
}

const SkillCard = ({ title, skills, classNames }: SkillCardProps) => {
  return (
    <Card key={title} className={`${classNames.card} rounded-3xl`}>
      <CardHeader className={`pb-3 ${classNames.header}`}>
        <CardTitle className={`text-lg font-fira-code ${classNames.title}`}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className={`pt-0 ${classNames.content}`}>
        <div className="text-sm leading-relaxed font-fira-code">
          {skills.join(' / ')}
        </div>
      </CardContent>
    </Card>
  );
};
