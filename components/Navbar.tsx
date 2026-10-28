
/*
File: Navbar.tsx
Author: earlysakura-hub
Date: October 27, 2026

This component displays the school navigation bar.
It does not receive any props.
It displays the school name and three navigation links.
Each link navigates to a section on the same page.
The component provides responsive navigation and keyboard accessibility.
*/

// Define the navigation links
const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Students", href: "#students" },
  { label: "Add a student", href: "#add-student" },
];

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

        {/* Display responsive navigation links */}
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm transition-colors hover:text-blue-200 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
