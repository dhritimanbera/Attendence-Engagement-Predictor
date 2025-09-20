import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, User, AlertTriangle, CheckCircle, Clock, LogIn } from 'lucide-react';
import AttendanceChart from './charts/AttendanceChart';
import EngagementChart from './charts/EngagementChart';
import { useAuth } from '@/hooks/useAuth';
import { useStudents } from '@/hooks/useStudents';

interface DashboardSectionProps {
  onLoginClick: () => void;
}

const DashboardSection = ({ onLoginClick }: DashboardSectionProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { user, profile, loading: authLoading } = useAuth();
  const { students, currentStudent, loading: studentsLoading, selectStudent, isStudent, isFaculty } = useStudents();

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (authLoading || studentsLoading) {
    return (
      <section id="dashboard" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Live Dashboard</h2>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!user) {
    return (
      <section id="dashboard" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Live Dashboard</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Sign in to access your personalized dashboard
            </p>
            <Button onClick={onLoginClick} size="lg">
              <LogIn className="mr-2 h-5 w-5" />
              Sign In to View Dashboard
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="dashboard" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            {isStudent ? "My Engagement Dashboard" : "Live Student Engagement Dashboard"}
          </h2>
          <p className="text-xl text-muted-foreground">
            {isStudent 
              ? "Track your attendance and engagement patterns"
              : "Real-time insights into student engagement and attendance patterns"
            }
          </p>
        </div>

        {isStudent ? (
          /* Student View - Single Column Layout */
          <div className="max-w-4xl mx-auto space-y-6">
            {currentStudent && (
              <>
                {/* Student Header */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <User className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{currentStudent.name}</h3>
                          <p className="text-muted-foreground">Your Academic Profile</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-foreground">{currentStudent.risk_score}%</div>
                        <p className="text-sm text-muted-foreground">Engagement Score</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                {/* Insight Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-orange-500" />
                        Your Performance Insight
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {currentStudent.prediction_reason || "You're doing well! Keep up the good work with consistent attendance and participation."}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        Recommended Actions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {currentStudent.intervention_suggestion || "Continue your excellent engagement. Consider joining study groups to further enhance your learning experience."}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Charts */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        Your Attendance Trend
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <AttendanceChart />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Your Engagement Metrics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <EngagementChart />
                    </CardContent>
                  </Card>
                </div>
              </>
            )}
          </div>
        ) : (
          /* Faculty View - Two Column Layout */
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Student List - Left Column */}
            <div className="lg:col-span-1">
              <Card className="h-[600px]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Students ({students.length})
                  </CardTitle>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search students..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="max-h-[460px] overflow-y-auto">
                    {filteredStudents.map((student) => (
                      <div
                        key={student.id}
                        onClick={() => selectStudent(student)}
                        className={`p-4 border-b border-border cursor-pointer hover:bg-muted/50 transition-colors ${
                          currentStudent?.id === student.id ? 'bg-muted' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <User className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground">{student.name}</h4>
                              <p className="text-sm text-muted-foreground">Score: {student.risk_score}%</p>
                            </div>
                          </div>
                          <Badge variant={
                            student.risk_level === 'high' ? 'destructive' :
                            student.risk_level === 'medium' ? 'secondary' : 'default'
                          }>
                            {student.risk_level} risk
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Student Details - Right Column */}
            {currentStudent && (
              <div className="lg:col-span-2 space-y-6">
                {/* Student Header */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <User className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{currentStudent.name}</h3>
                          <p className="text-muted-foreground">Student Profile</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-foreground">{currentStudent.risk_score}%</div>
                        <p className="text-sm text-muted-foreground">Risk Score</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>

                {/* Insight Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-orange-500" />
                        Why this score?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {currentStudent.prediction_reason || "Based on recent attendance patterns and engagement metrics, this student shows consistent participation."}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        Suggested Intervention
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {currentStudent.intervention_suggestion || "Continue monitoring progress. Consider additional support if patterns change."}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Charts */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        Attendance Trend
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <AttendanceChart />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Engagement Metrics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <EngagementChart />
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default DashboardSection;