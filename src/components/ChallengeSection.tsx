import { Card } from '@/components/ui/card';
import { AlertTriangle, Clock, FileText } from 'lucide-react';

const ChallengeSection = () => {
  const challenges = [
    {
      icon: AlertTriangle,
      title: 'Lacks Engagement Metrics',
      description: 'Traditional attendance tracking only captures presence, missing crucial engagement indicators that predict student success.',
    },
    {
      icon: Clock,
      title: 'Hinders Timely Support',
      description: 'Manual processes delay identification of at-risk students, reducing the effectiveness of interventions and support measures.',
    },
    {
      icon: FileText,
      title: 'Administrative Burden',
      description: 'Educators spend countless hours on manual tracking and reporting instead of focusing on teaching and student support.',
    },
  ];

  return (
    <section id="challenge" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Why Manual Tracking Isn't Enough
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional attendance systems fail to provide the comprehensive insights needed 
            for proactive student support and intervention.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <Card 
              key={index}
              className="p-8 text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
            >
              <div className="mx-auto mb-6 p-4 bg-destructive-light rounded-full w-fit">
                <challenge.icon className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {challenge.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {challenge.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="mt-16 p-8 bg-card rounded-2xl border shadow-sm">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
            The Cost of Reactive Approaches
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-destructive mb-2">67%</div>
              <p className="text-muted-foreground">of at-risk students go unidentified until it's too late</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-destructive mb-2">2-3 weeks</div>
              <p className="text-muted-foreground">average delay in identifying struggling students</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-destructive mb-2">40%</div>
              <p className="text-muted-foreground">of educator time spent on administrative tasks</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;