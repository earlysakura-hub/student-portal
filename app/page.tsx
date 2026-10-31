
/*
File: page.tsx
Author: Lin Shi
Date: October 30, 2026

This file defines the application's home page.
It imports the StudentPortal component.
It does not require any props or local state.
It renders the student management interface.
The output is displayed inside the root layout.
*/

import StudentPortal from "@/components/StudentPortal";

// Display the student portal on the home page
const Home = () => {
  return <StudentPortal />;
};

export default Home;
