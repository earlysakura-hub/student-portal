/*
File: StatsPanel.tsx
Author: earlysakura-hub
Date: October 27, 2026

This component displays statistics about the students.
It receives the complete student list through props.
It calculates the total number of students, honour roll students, and grade 12 students.
These values are recalculated when the student list changes.
The component outputs three responsive statistic cards.
*/

import type { Student } from "@/data/students";

// Define the component props
interface StatsPanelProps {
  students: Student[];
}

const StatsPanel = ({ students }: StatsPanelProps) => {
  // Calculate student statistics
  const totalStudents = students.length;

  const honourRollStudents = students.filter(
    (student) => student.average >= 80
  ).length;

  const graduatingStudents = students.filter(
    (student) => student.grade === 12
  ).length;

  // Prepare statistics for display
  const stats = [
    {
      title: "Students",
      value: totalStudents,
    },
    {
      title: "Honour Roll",
      value: honourRollStudents,
    },
    {
      title: "Graduating",
      value: graduatingStudents,
    },
  ];

  // Render the statistics cards
  return (
    <section aria-label="School statistics">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
          >
            <h3 className="mb-3 text-lg font-semibold text-gray-600">
              {stat.title}
            </h3>

            <p className="text-4xl font-bold text-blue-800">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsPanel;
