
/*
File: students.ts

This file defines the Student interface.
Each student has a numeric ID, name, grade, and average.
It provides the initial student data for the application.
The dataset contains eight students across grades 9 to 12.
Other components import these types and records.
*/

// Define the student data structure
export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
  average: number;
}

// Initial student records
export const initialStudents: Student[] = [
  {
    id: 1,
    firstName: "Ava",
    lastName: "Chen",
    grade: 12,
    average: 92,
  },
  {
    id: 2,
    firstName: "Liam",
    lastName: "Patel",
    grade: 11,
    average: 78,
  },
  {
    id: 3,
    firstName: "Maya",
    lastName: "Johnson",
    grade: 12,
    average: 85,
  },
  {
    id: 4,
    firstName: "Noah",
    lastName: "Garcia",
    grade: 10,
    average: 67,
  },
  {
    id: 5,
    firstName: "Sofia",
    lastName: "Nguyen",
    grade: 11,
    average: 88,
  },
  {
    id: 6,
    firstName: "Ethan",
    lastName: "Williams",
    grade: 9,
    average: 74,
  },
  {
    id: 7,
    firstName: "Olivia",
    lastName: "Brown",
    grade: 9,
    average: 81,
  },
  {
    id: 8,
    firstName: "Lucas",
    lastName: "Martin",
    grade: 10,
    average: 76,
  },
];
