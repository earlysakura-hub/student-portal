/*
File: Footer.tsx
Author: earlysakura-hub
Date: October 27, 2026

This component displays the school footer.
It does not receive any props.
It provides the school's name and contact information.
The contact details are displayed at the bottom of the page.
The component outputs a responsive footer section.
*/

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Display school information */}
        <h2 className="mb-4 text-lg font-semibold">
          New Generation High School
        </h2>

        {/* Display contact information */}
        <div className="space-y-2 text-sm text-blue-100">
          <p>Address: 123 School Street, Calgary, AB</p>
          <p>Phone: (403) 555-0100</p>
          <p>Email: contact@newgenerationhigh.example</p>
        </div>

        {/* Display copyright information */}
        <div className="mt-6 border-t border-blue-700 pt-4 text-center text-sm text-blue-200">
          <p>© 2026 New Generation High School</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
