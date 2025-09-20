import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import type { Json } from '@/integrations/supabase/types';

export interface Student {
  id: string;
  user_id: string;
  name: string;
  avatar_url?: string;
  risk_level: string;
  risk_score: number;
  prediction_reason?: string;
  intervention_suggestion?: string;
  attendance_history: Json;
  engagement_metrics: Json;
}

export const useStudents = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [currentStudent, setCurrentStudent] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);
  const { user, profile } = useAuth();

  useEffect(() => {
    if (!user || !profile) {
      setLoading(false);
      return;
    }

    fetchStudents();
  }, [user, profile]);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      
      if (profile?.role === 'faculty') {
        // Faculty can see all students
        const { data, error } = await supabase
          .from('students')
          .select('*')
          .order('name');

        if (error) {
          console.error('Error fetching students:', error);
          return;
        }

        setStudents(data || []);
        if (data && data.length > 0) {
          setCurrentStudent(data[0]);
        }
      } else if (profile?.role === 'student') {
        // Students can only see their own data
        const { data, error } = await supabase
          .from('students')
          .select('*')
          .eq('user_id', user.id)
          .maybeSingle();

        if (error) {
          console.error('Error fetching student data:', error);
          return;
        }

        if (data) {
          setStudents([data]);
          setCurrentStudent(data);
        }
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setLoading(false);
    }
  };

  const selectStudent = (student: Student) => {
    setCurrentStudent(student);
  };

  return {
    students,
    currentStudent,
    loading,
    selectStudent,
    isStudent: profile?.role === 'student',
    isFaculty: profile?.role === 'faculty'
  };
};