
# Student Portal — New Generation High School

## Project Overview

This project is a student management portal created for
CPRG 306 Web Development 2, Assignment 1.

It is a single-page application built with Next.js,
React, TypeScript, and Tailwind CSS.

The application allows users to view, search, add,
and remove students, while displaying live statistics.

## Live Website

https://student-portal-delta-lime.vercel.app/

## GitHub Repository

https://github.com/earlysakura-hub/student-portal

## Team Members and Responsibilities

| Member | Name | Responsibilities |
|---|---|---|
| A | Lin Shi | Navbar, Footer, StatsPanel, layout, styling |
| B | Xzander Perez | Student data, StudentList, StudentCard |
| C | Adeeb Farzi | StudentPortal, SearchBox, AddStudent |

## Features

- Display eight initial students
- Show total students, Honour Roll, and graduating students
- Search students by first or last name
- Add students with input validation
- Remove individual students
- Clear the student list
- Show or hide student details
- Responsive layout for different screen sizes
- Single-page navigation

## Technologies

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- GitHub
- Vercel

## Running Locally

1. Clone the repository.
2. Open the project folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:3000.

## Build and Code Quality

| Check | Result |
|---|---|
| Production build | PASS |
| TypeScript compilation | PASS |
| ESLint | PASS |
| Vercel deployment | PASS |

## Functional Testing

The results below include local tests.

| # | Test Case | Result |
|---|---|---|
| 1 | Display eight initial students | PASS |
| 2 | Display correct Honour Roll count | PASS |
| 3 | Display correct graduating count | PASS |
| 4 | Show and hide student details | PASS |
| 5 | Search for an existing student | PASS |
| 6 | Add a valid student | PASS |
| 7 | Remove a student | PASS |
| 8 | Reject invalid student input | PASS |
| 9 | Clear all students | PASS |
| 10 | Test navigation and responsive layout | PASS |

## Notes

Student data is stored in React state.
Changes are not saved permanently and will reset
when the page is refreshed.
