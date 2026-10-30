// Renders a StudentCard for every student it recieves.
// When the list is empty it shows a helpful message instead 

// Empty state: no students to show
// Normal state: render one card per student
// key={student.id}  // stable key required by React

"use client";

import type { Student } from "@/data/students";
import StudentCard from "@/components/StudentCard";

interface StudentListProps {
  students: Student[];
  onRemove: (id: string) => void;
}

const StudentList = ({ students, onRemove }: StudentListProps) => {
  if (students.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
        <p className="text-gray-600">No students to display.</p>
        <p className="mt-1 text-sm text-gray-500">
          Add a student using the form below.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default StudentList;