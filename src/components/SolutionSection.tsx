import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { QrCode, Mic, MessageSquare, Brain, FileBarChart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const SolutionSection = () => {
  const { toast } = useToast();
  const [showReport, setShowReport] = useState(false);

  const handleSimulation = (type: string) => {
    toast({
      title: "Simulation Triggered",
      description: `${type} check-in simulation completed. Data updated in real-time.`,
    });
  };

  return (
    <section id="solution" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            An Intelligent, Automated System
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive solution combines multiple data sources with AI-powered analytics 
            to provide actionable insights for every student.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card 1: Automated Attendance */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-lighter rounded-lg">
                  <QrCode className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Automated Attendance Capture
                  </h3>
                  <p className="text-muted-foreground">
                    Multiple convenient methods for seamless attendance tracking
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={() => handleSimulation('QR Code')}
                  variant="outline" 
                  className="w-full justify-start"
                >
                  <QrCode className="h-4 w-4 mr-2" />
                  Simulate QR Check-in
                </Button>
                <Button 
                  onClick={() => handleSimulation('Voice')}
                  variant="outline" 
                  className="w-full justify-start"
                >
                  <Mic className="h-4 w-4 mr-2" />
                  Simulate Voice Check-in
                </Button>
                <Button 
                  onClick={() => handleSimulation('Text')}
                  variant="outline" 
                  className="w-full justify-start"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Simulate Text Check-in
                </Button>
              </div>

              <div className="p-4 bg-success-light rounded-lg">
                <div className="text-sm text-success font-medium mb-1">Real-time Processing</div>
                <div className="text-xs text-muted-foreground">
                  Data is instantly processed and analyzed for risk assessment
                </div>
              </div>
            </div>
          </Card>

          {/* Card 2: AI Scoring */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-lighter rounded-lg">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Engagement & Risk Scoring
                  </h3>
                  <p className="text-muted-foreground">
                    Advanced AI algorithms analyze multiple factors for accurate predictions
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Attendance Pattern</span>
                  <Badge variant="secondary">25%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Participation Level</span>
                  <Badge variant="secondary">35%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Assignment Completion</span>
                  <Badge variant="secondary">40%</Badge>
                </div>
              </div>

              <div className="p-4 bg-primary-lighter rounded-lg">
                <div className="text-sm text-primary font-medium mb-1">Machine Learning Model</div>
                <div className="text-xs text-muted-foreground">
                  Continuously learning and improving prediction accuracy
                </div>
              </div>
            </div>
          </Card>

          {/* Card 3: Actionable Alerts */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary-lighter rounded-lg">
                  <FileBarChart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Actionable Weekly Alerts
                  </h3>
                  <p className="text-muted-foreground">
                    Comprehensive reports with specific intervention recommendations
                  </p>
                </div>
              </div>

              <Button 
                onClick={() => setShowReport(true)}
                className="w-full"
              >
                Preview Counselor Report
              </Button>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-warning-light rounded-lg">
                  <span className="text-sm font-medium">High Risk Students</span>
                  <Badge className="bg-warning text-warning-foreground">3 alerts</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-success-light rounded-lg">
                  <span className="text-sm font-medium">Improvement Noted</span>
                  <Badge className="bg-success text-success-foreground">7 students</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Sample Report Modal */}
        <Dialog open={showReport} onOpenChange={setShowReport}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Weekly Counselor Report - Sample</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="p-4 bg-warning-light rounded-lg">
                <h4 className="font-semibold text-warning mb-2">Priority Interventions Required</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Alex Johnson - Grade 10</span>
                    <Badge className="bg-destructive text-destructive-foreground">High Risk</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Attendance dropped 40% in past 2 weeks. Suggest one-on-one meeting.
                  </p>
                </div>
              </div>
              
              <div className="p-4 bg-success-light rounded-lg">
                <h4 className="font-semibold text-success mb-2">Positive Trends</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Maria Santos - Grade 11</span>
                    <Badge className="bg-success text-success-foreground">Improving</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Engagement increased 30% following peer mentorship program.
                  </p>
                </div>
              </div>

              <Button onClick={() => setShowReport(false)} className="w-full">
                Close Report Preview
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default SolutionSection;