import React from "react";
import { Link } from "react-router";

class Footer extends React.Component {
  render() {
    return (
      <>
      <footer className="relative bottom-0 left-0 z-20 w-full p-4 bg-white border-none border-default shadow-none md:flex md:items-center md:justify-between md:p-6 mt-10">
          <span className="text-sm text-body text-center block mb-3 md:mb-0 md:text-left">
            © 2026 Robust Technology Liberia. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center justify-center text-sm font-medium text-body">
            <li>
              <Link to="/about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </footer>
      </>
    );
  }
}

export default Footer;
