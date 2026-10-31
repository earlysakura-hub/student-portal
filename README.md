
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

The following tests are based on the assignment checklist.

| # | Test Case | Expected Result | Result |
|---|---|---|---|
| 1 | Open the app | All initial students appear and all three statistics are correct | PASS |
| 2 | Show and hide details on one student card | The average and Honour Roll badge appear when applicable; other cards stay closed; clicking again hides the details | PASS |
| 3 | Remove a Grade 12 student | Students and Graduating counts both decrease by one | PASS |
| 4 | Search for a last name in uppercase, then clear the search | Only matching students appear; clearing the search restores the full list | PASS |
| 5 | Search for "zzz" | The empty-list message appears, but the three statistics remain unchanged | PASS |
| 6 | Leave the first name empty and click Add student | No student is added | PASS |
| 7 | Add a student using all four inputs | The student appears, statistics update, names reset to empty, grade resets to 9 and average resets to 70 | PASS |
| 8 | Click Clear all | No students remain and all three statistics become 0 | PASS |
| 9 | Test the page at phone width | Student cards stack in one column without horizontal scrolling | PASS |
| 10 | Click each navbar link | Each link jumps to the correct page section | PASS |


## Notes

Student data is stored in React state.
Changes are not saved permanently and will reset
when the page is refreshed.
