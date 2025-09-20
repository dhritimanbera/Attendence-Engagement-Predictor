import { Button } from '@/components/ui/button';
import { BarChart3, Users, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const scrollToDashboard = () => {
    const element = document.getElementById('dashboard');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-primary/5 via-background to-primary-lighter/10">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                From <span className="text-primary">Attendance</span> to{' '}
                <span className="text-primary">Engagement</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                Proactively Supporting Every Student
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Our AI-powered platform helps educators identify at-risk students before they fall behind, 
                providing the insights you need to intervene effectively.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToDashboard}
                size="lg"
                className="bg-primary hover:bg-primary-light text-lg px-8 py-6"
              >
                View Dashboard
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2.5x</div>
                <div className="text-sm text-muted-foreground">Faster Intervention</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">85%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-lg p-8 border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Real-time Analytics</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-success"></div>
                  <div className="w-3 h-3 rounded-full bg-warning"></div>
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-success-light rounded-lg">
                    <Users className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-success">342</div>
                    <div className="text-sm text-muted-foreground">Engaged</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-warning-light rounded-lg">
                    <TrendingUp className="h-6 w-6 text-warning" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-warning">23</div>
                    <div className="text-sm text-muted-foreground">At Risk</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Overall Engagement</span>
                  <span className="font-medium text-success">93.6%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '93.6%' }}></div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 p-3 bg-primary rounded-xl shadow-lg">
              <BarChart3 className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;