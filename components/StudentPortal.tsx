/**
 * File Name: StudentPortal.tsx
 * Author: Adeeb Farzi
 * Date: October 27, 2026
 * 
 * This component acts as the primary container and state owner for the entire portal application.
 * It imports initial student records and holds both the master student array and search filter text in state.
 * It processes derived statistics, filters the student array case-insensitively, and handles data mutations like adding, removing, and clearing.
 * It renders the three main sections (Overview, Directory, and Enrollment) while passing state updates downward via callback props.
 * It outputs a cohesive, fully responsive single-page interface complying with all design and layout criteria.
 */

"use client";

// --- Imports ---
import { useState } from "react";
import { initialStudents as studentsData, Student } from "@/data/students";
import StatsPanel from "@/components/StatsPanel";
import SearchBox from "@/components/SearchBox";
import StudentList from "@/components/StudentList";
import AddStudent from "@/components/AddStudent";

const StudentPortal = () => {
  // --- State Management ---
  const [students, setStudents] = useState<Student[]>(studentsData);
  const [searchTerm, setSearchTerm] = useState("");

  // --- Event Handlers ---
  const handleRemoveStudent = (id: string | number) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleAddStudent = (firstName: string, lastName: string, grade: number, average: number) => {
    const maxId = students.length > 0 ? Math.max(...students.map((s) => Number(s.id) || 0)) : 0;
    const newId = String(maxId + 1);

    const newStudent: Student = {
      id: newId,
      firstName,
      lastName,
      grade,
      average,
    };
    setStudents([...students, newStudent]);
  };

  const handleClearAll = () => {
    setStudents([]);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  // --- Processing / Filtering ---
  const filteredStudents = students.filter((student) => {
    const query = searchTerm.toLowerCase().trim();
    if (!query) return true;
    return (
      student.firstName.toLowerCase().includes(query) ||
      student.lastName.toLowerCase().includes(query)
    );
  });

  // --- Render Component ---
  return (
    <div className="space-y-16 py-4">
      <section id="overview" className="scroll-mt-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">School Overview</h2>
            <p className="text-slate-600 mt-1">Live metrics and summary statistics for New Generation High School.</p>
          </div>
          {students.length > 0 && (
            <button
              onClick={handleClearAll}
              className="rounded-lg bg-red-50 border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-100 transition cursor-pointer shadow-sm"
            >
              Clear all
            </button>
          )}
        </div>
        <StatsPanel students={students} />
      </section>

      <section id="students" className="scroll-mt-20">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-slate-900">Student Directory</h2>
          <p className="text-slate-600 mt-1">Browse, search, and manage enrolled students.</p>
        </div>

        <SearchBox searchTerm={searchTerm} onSearchChange={handleSearchChange} />

        <StudentList students={filteredStudents} onRemove={handleRemoveStudent} />
      </section>

      <section id="add-student" className="scroll-mt-20">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Enrollment Portal</h2>
          <p className="text-slate-600 mt-1">Register a new student into the school system.</p>
        </div>
        <AddStudent onAddStudent={handleAddStudent} />
      </section>
    </div>
  );
};

export default StudentPortal;