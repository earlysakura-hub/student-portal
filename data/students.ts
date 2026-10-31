//Represents a single student in the system. 
// id: unique identifier (used for React keys and removal)
// firstname: / lastname: student's name
// grade: current grade (9-12)
// average: overall academic average as a percentage (0-100)


export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  grade: number;
  average: number;
}

export const initialStudents: Student[] = [
  {
    id: "1",
    firstName: "Ava",
    lastName: "Chen",
    grade: 12,
    average: 92,
  },
  {
    id: "2",
    firstName: "Liam",
    lastName: "Patel",
    grade: 11,
    average: 78,
  },
  {
    id: "3",
    firstName: "Maya",
    lastName: "Johnson",
    grade: 12,
    average: 85,
  },
  {
    id: "4",
    firstName: "Noah",
    lastName: "Garcia",
    grade: 10,
    average: 67,
  },
  {
    id: "5",
    firstName: "Sofia",
    lastName: "Nguyen",
    grade: 11,
    average: 88,
  },
  {
    id: "6",
    firstName: "Ethan",
    lastName: "Williams",
    grade: 9,
    average: 74,
  },
];