// Displays one student. Can expand to show average + Honor Roll
// badge, and can remove the student from the list

"use client";

import { useState } from "react";
import type { Student } from "@/data/students";

interface StudentCardProps {
  student: Student;
  onRemove: (id: string) => void;
}

const StudentCard = ({ student, onRemove }: StudentCardProps) => {
    
 // Local state so each card can open/close independently. 
 // Opening one card does NOT open any other card.
  const [showDetails, setShowDetails] = useState(false);

  const fullName = `${student.firstName} ${student.lastName}`;

 // Honor Roll threshold is 80 or higher
  const isHonourRoll = student.average >= 80;

 // Always-visible header: name, grade, and action buttons
 // Toggle details visibility. Label changes based on current state.
 // Remove this student from the parent list
 // Conditionally rendered details section
 // Only show the Honour Roll badge when the average qualifies
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{fullName}</h3>
          <p className="mt-1 text-sm text-gray-600">Grade {student.grade}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setShowDetails((prev) => !prev)}
            className="rounded-md bg-blue-100 px-3 py-1.5 text-sm font-medium text-blue-800 transition-colors hover:bg-blue-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {showDetails ? "Hide details" : "Show details"}
          </button>

          <button
            type="button"
            onClick={() => onRemove(student.id)}
            className="rounded-md bg-red-100 px-3 py-1.5 text-sm font-medium text-red-800 transition-colors hover:bg-red-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Remove
          </button>
        </div>
      </div>

      {showDetails && (
        <div className="mt-4 border-t border-gray-100 pt-4">
          <p className="text-sm text-gray-700">
            Average: <span className="font-semibold">{student.average}%</span>
          </p>
          {isHonourRoll && (
            <span className="mt-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
              Honour Roll
            </span>
          )}
        </div>
      )}
    </article>
  );
};

export default StudentCard;