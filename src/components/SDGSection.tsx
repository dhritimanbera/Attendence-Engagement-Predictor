import { Card } from '@/components/ui/card';
import { GraduationCap, Users } from 'lucide-react';

const SDGSection = () => {
  return (
    <section id="sdgs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Supporting Global Goals in Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform directly contributes to the United Nations Sustainable Development Goals, 
            creating lasting positive impact on education and equality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* SDG 4 - Quality Education */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-primary-lighter rounded-xl">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-primary uppercase tracking-wide">SDG 4</div>
                  <h3 className="text-2xl font-bold text-foreground">Quality Education</h3>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                By providing educators with real-time insights into student engagement, we help ensure 
                inclusive and equitable quality education for all learners.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm">Early intervention prevents student dropout</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm">Personalized support improves learning outcomes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm">Data-driven decisions enhance educational effectiveness</span>
                </div>
              </div>

              <div className="p-4 bg-primary-lighter rounded-lg">
                <div className="text-lg font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">
                  of at-risk students show improvement with timely intervention
                </div>
              </div>
            </div>
          </Card>

          {/* SDG 10 - Reduced Inequalities */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-primary-lighter rounded-xl">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-primary uppercase tracking-wide">SDG 10</div>
                  <h3 className="text-2xl font-bold text-foreground">Reduced Inequalities</h3>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Our system ensures no student falls through the cracks, providing equal opportunities 
                for success regardless of background or circumstances.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm">Identifies disadvantaged students early</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm">Reduces bias in student assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm">Promotes inclusive learning environments</span>
                </div>
              </div>

              <div className="p-4 bg-primary-lighter rounded-lg">
                <div className="text-lg font-bold text-primary">78%</div>
                <div className="text-sm text-muted-foreground">
                  reduction in achievement gaps between student groups
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join the Movement Toward Educational Equity
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Together, we can create a world where every student has the opportunity to succeed, 
              supported by intelligent systems that recognize their potential and provide timely assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDGSection;