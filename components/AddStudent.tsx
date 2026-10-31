
/**
 * File Name: AddStudent.tsx
 * Author: Adeeb Farzi
 * Date: October 27, 2026
 *
 * This component provides controlled inputs for adding students.
 * It receives an onAddStudent callback from the parent component.
 * It manages the student's name, grade, and average using state.
 * It validates user input before calling the callback.
 * It displays error messages and resets inputs after a successful addition.
 */

"use client";

// --- Imports ---
import { useState } from "react";

interface AddStudentProps {
  onAddStudent: (
    firstName: string,
    lastName: string,
    grade: number,
    average: number
  ) => void;
}

const AddStudent = ({ onAddStudent }: AddStudentProps) => {
  // --- Local State ---
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState("9");
  const [average, setAverage] = useState("70");
  const [error, setError] = useState("");

  // --- Event Handlers ---
  const handleFirstNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLastName(e.target.value);
  };

  const handleGradeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGrade(e.target.value);
  };

  const handleAverageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAverage(e.target.value);
  };

  // --- Validate and Add Student ---
  const handleClick = () => {
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();

    if (trimmedFirstName === "" || trimmedLastName === "") {
      setError("Please enter both first and last names.");
      return;
    }

    if (grade.trim() === "") {
      setError("Please enter a grade.");
      return;
    }

    const gradeNumber = Number(grade);

    if (
      !Number.isInteger(gradeNumber) ||
      gradeNumber < 9 ||
      gradeNumber > 12
    ) {
      setError("Grade must be a whole number between 9 and 12.");
      return;
    }

    if (average.trim() === "") {
      setError("Please enter an average.");
      return;
    }

    const averageNumber = Number(average);

    if (
      !Number.isFinite(averageNumber) ||
      averageNumber < 0 ||
      averageNumber > 100
    ) {
      setError("Average must be between 0 and 100.");
      return;
    }

    // Add the validated student
    onAddStudent(
      trimmedFirstName,
      trimmedLastName,
      gradeNumber,
      averageNumber
    );

    // Reset the inputs and error message
    setFirstName("");
    setLastName("");
    setGrade("9");
    setAverage("70");
    setError("");
  };

  // --- Render Component ---
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 max-w-xl mx-auto space-y-4">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">
        Add a New Student
      </h3>

      {/* Student names */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
          placeholder="First name"
          aria-label="First name"
          className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
        />

        <input
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
          placeholder="Last name"
          aria-label="Last name"
          className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Grade and average */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label
            htmlFor="student-grade"
            className="block text-xs font-medium text-slate-500 mb-1"
          >
            Grade (9-12)
          </label>

          <input
            id="student-grade"
            type="number"
            min="9"
            max="12"
            step="1"
            value={grade}
            onChange={handleGradeChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex-1">
          <label
            htmlFor="student-average"
            className="block text-xs font-medium text-slate-500 mb-1"
          >
            Average (0-100)
          </label>

          <input
            id="student-average"
            type="number"
            min="0"
            max="100"
            step="any"
            value={average}
            onChange={handleAverageChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Validation error */}
      {error !== "" && (
        <p role="alert" className="text-sm text-red-600">
          {error}
        </p>
      )}

      {/* Add student button */}
      <button
        type="button"
        onClick={handleClick}
        className="w-full rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700 transition cursor-pointer shadow-sm mt-2"
      >
        Add student
      </button>
    </div>
  );
};

export default AddStudent;
