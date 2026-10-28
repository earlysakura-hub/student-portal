/*
File: Navbar.tsx
Author: earlysakura-hub
Date: October 27, 2026

This component displays the school navigation bar.
It does not receive any props.
It displays the school name and three navigation links.
Each link navigates to a section on the same page.
The component outputs a responsive navigation header.
*/

const Navbar = () => {
  return (
    <header className="bg-blue-900 text-white shadow-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
      >
        {/* Display the school name */}
        <h1 className="text-xl font-bold">
          New Generation High School
        </h1>

        {/* Display navigation links */}
        <div className="flex flex-wrap gap-5 text-sm font-medium">
          <a href="#overview" className="hover:text-blue-200">
            Overview
          </a>

          <a href="#students" className="hover:text-blue-200">
            Students
          </a>

          <a href="#add-student" className="hover:text-blue-200">
            Add a student
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
