
/*
File: Footer.tsx
Author: earlysakura-hub
Date: October 27, 2026

This component displays the school footer.
It does not receive any props.
It displays the school name and contact information.
The phone number and email provide clickable contact links.
The component outputs an accessible and responsive footer.
*/

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Display the school name */}
        <h2 className="mb-4 text-lg font-semibold">
          New Generation High School
        </h2>

        {/* Display school contact information */}
        <address className="space-y-2 text-sm not-italic text-blue-100">
          <p>Address: 123 School Street, Calgary, AB</p>

          <p>
            Phone:{" "}
            <a
              href="tel:+14035550100"
              className="rounded-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              (403) 555-0100
            </a>
          </p>

          <p>
            Email:{" "}
            <a
              href="mailto:contact@newgenerationhigh.example"
              className="break-all rounded-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              contact@newgenerationhigh.example
            </a>
          </p>
        </address>

        {/* Display copyright information */}
        <div className="mt-6 border-t border-blue-700 pt-4 text-center text-sm text-blue-200">
          <p>© 2026 New Generation High School</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
