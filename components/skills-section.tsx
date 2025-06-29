import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Front-end',
      skills: [
        'TypeScript',
        'React',
        'Vue',
        'Nuxt',
        'Redux Toolkit',
        'NextJs',
        'Next',
        'Jest',
        'GraphQL',
        'React Native',
        'Puppeteer',
        'Enzyme',
      ],
      color: 'bg-blue-500/10 border-blue-500/20',
    },
    {
      title: 'Styles',
      skills: ['SCSS', 'SASS', 'PostCSS', 'Ant.d', 'Mui', 'Material UI'],
      color: 'bg-purple-500/10 border-purple-500/20',
    },
    {
      title: 'Back-end',
      skills: [
        'Golang',
        'Gin',
        'GORM',
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'gRPC',
        'Redis',
        'Kafka',
        'Node',
        'Nest.js',
        'TypeScript',
      ],
      color: 'bg-green-500/10 border-green-500/20',
    },
    {
      title: 'DevOps',
      skills: ['Nginx', 'Envault', 'Docker', 'CI/CD', 'k8s', 'Bash'],
      color: 'bg-orange-500/10 border-orange-500/20',
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Skills Cards */}
          <div className="space-y-6">
            {skillCategories.map(category => (
              <Card
                key={category.title}
                className={`${category.color} backdrop-blur-sm`}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs bg-background/50 rounded border border-border/50 text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* About Image & Info */}
          <div className="space-y-6">
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-48 h-64 bg-muted rounded-lg overflow-hidden">
                    {/* Placeholder for developer photo */}
                    <div className="w-full h-full bg-gradient-to-br from-muted-foreground/20 to-muted-foreground/5 flex items-center justify-center">
                      <span className="text-muted-foreground">Photo</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Some of my favorite technologies,
                    </p>
                    <p className="text-sm text-muted-foreground">
                      topics, or tools that I worked with.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
