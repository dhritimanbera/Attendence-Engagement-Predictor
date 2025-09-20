import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Search, TrendingDown, AlertCircle, CheckCircle } from 'lucide-react';
import AttendanceChart from './charts/AttendanceChart';
import EngagementChart from './charts/EngagementChart';

const DashboardSection = () => {
  const [selectedStudent, setSelectedStudent] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode] = useState<'faculty' | 'student'>('faculty');

  const mockStudents = [
    {
      id: '1',
      name: 'Alex Johnson',
      grade: '10th Grade',
      riskLevel: 'high',
      riskScore: 78,
      avatar: '/placeholder.svg',
      predictionReason: 'Declining attendance pattern (40% drop in 2 weeks) combined with reduced class participation and missed assignments.',
      interventionSuggestion: 'Schedule one-on-one meeting to discuss challenges. Consider peer mentoring program and flexible assignment deadlines.',
      attendanceRate: 58,
      lastAttendance: '2 days ago',
    },
    {
      id: '2',
      name: 'Maria Santos',
      grade: '11th Grade',
      riskLevel: 'medium',
      riskScore: 45,
      avatar: '/placeholder.svg',
      predictionReason: 'Consistent attendance but engagement scores showing gradual decline in digital interactions.',
      interventionSuggestion: 'Explore technology comfort level. Offer additional support for digital learning tools and platforms.',
      attendanceRate: 82,
      lastAttendance: 'Today',
    },
    {
      id: '3',
      name: 'David Chen',
      grade: '9th Grade',
      riskLevel: 'low',
      riskScore: 15,
      avatar: '/placeholder.svg',
      predictionReason: 'Strong consistent patterns across all engagement metrics with improving trend over time.',
      interventionSuggestion: 'Continue current approach. Consider leadership opportunities or peer mentoring roles.',
      attendanceRate: 95,
      lastAttendance: 'Today',
    },
  ];

  const filteredStudents = mockStudents.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'high': return 'bg-destructive text-destructive-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'low': return 'bg-success text-success-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'high': return <AlertCircle className="h-4 w-4" />;
      case 'medium': return <TrendingDown className="h-4 w-4" />;
      case 'low': return <CheckCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  const currentStudent = filteredStudents[selectedStudent];

  if (viewMode === 'student') {
    // Student view - show only their own data
    const studentData = mockStudents[0]; // In real app, this would be the logged-in student
    
    return (
      <section id="dashboard" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              My Engagement Dashboard
            </h2>
            <p className="text-xl text-muted-foreground">
              Track your personal learning journey and engagement metrics
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Student Header */}
            <Card className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={studentData.avatar} alt={studentData.name} />
                    <AvatarFallback>{studentData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{studentData.name}</h3>
                    <p className="text-muted-foreground">Student ID: {studentData.id} • {studentData.grade}</p>
                  </div>
                </div>
                <div className="text-center">
                  <Badge className={`${getRiskColor(studentData.riskLevel)} flex items-center space-x-2 text-lg px-4 py-2`}>
                    {getRiskIcon(studentData.riskLevel)}
                    <span>Risk Score: {studentData.riskScore}/100</span>
                  </Badge>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Why This Score Card */}
              <Card className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Why This Score?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {studentData.predictionReason}
                </p>
              </Card>

              {/* Suggested Actions Card */}
              <Card className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Your Action Plan</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {studentData.interventionSuggestion}
                </p>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-6">
                <AttendanceChart studentName={studentData.name} />
              </Card>
              <Card className="p-6">
                <EngagementChart studentName={studentData.name} />
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Faculty view - show all students
  return (
    <section id="dashboard" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            Live Student Engagement Dashboard
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-time insights and intervention recommendations for all students
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Student List */}
          <div className="lg:col-span-1">
            <Card className="p-6 h-fit">
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search students..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {filteredStudents.map((student, index) => (
                    <div
                      key={student.id}
                      onClick={() => setSelectedStudent(index)}
                      className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                        selectedStudent === index 
                          ? 'bg-primary text-primary-foreground shadow-md' 
                          : 'hover:bg-accent'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={student.avatar} alt={student.name} />
                          <AvatarFallback>
                            {student.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{student.name}</p>
                          <p className={`text-sm ${selectedStudent === index ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                            {student.grade}
                          </p>
                        </div>
                        <Badge 
                          className={`${getRiskColor(student.riskLevel)} flex items-center space-x-1 text-xs`}
                        >
                          {getRiskIcon(student.riskLevel)}
                          <span className="capitalize">{student.riskLevel}</span>
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Student Detail */}
          <div className="lg:col-span-2 space-y-6">
            {currentStudent && (
              <>
                {/* Student Header */}
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={currentStudent.avatar} alt={currentStudent.name} />
                        <AvatarFallback>
                          {currentStudent.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{currentStudent.name}</h3>
                        <p className="text-muted-foreground">
                          Student ID: {currentStudent.id} • {currentStudent.grade}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Last attendance: {currentStudent.lastAttendance}
                        </p>
                      </div>
                    </div>
                    <div className="text-center">
                      <Badge className={`${getRiskColor(currentStudent.riskLevel)} flex items-center space-x-2 text-lg px-4 py-2`}>
                        {getRiskIcon(currentStudent.riskLevel)}
                        <span>Risk Score: {currentStudent.riskScore}/100</span>
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-2">
                        Attendance: {currentStudent.attendanceRate}%
                      </p>
                    </div>
                  </div>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Why This Score Card */}
                  <Card className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Why This Score?</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentStudent.predictionReason}
                    </p>
                  </Card>

                  {/* Suggested Intervention Card */}
                  <Card className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Suggested Intervention</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentStudent.interventionSuggestion}
                    </p>
                  </Card>
                </div>

                {/* Charts */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <AttendanceChart studentName={currentStudent.name} />
                  </Card>
                  <Card className="p-6">
                    <EngagementChart studentName={currentStudent.name} />
                  </Card>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;