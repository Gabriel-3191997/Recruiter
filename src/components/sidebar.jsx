import React from "react";
// import { Link } from "react-router";

const CATEGORIES = [
  "HR",
  "Computer Science",
  "Business Intelligence",
  "Finance",
  "Others",
];

class Sidebar extends React.Component {
  render() {
    return (
      <aside className="md:w-80 w-full shrink-0 flex flex-col gap-6">
        {/* job type filter */}
        <div className="bg-white border-none rounded-none p-5">
          <h4 className="font-sans font-semibold text-lg capitalize mb-3 text-heading text-left">
            filter
          </h4>
          <ul className="flex flex-col gap-2 font-sans text-body">
            {CATEGORIES.map((type) => (
              <li key={type} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`job-type-${type}`}
                  className="w-4 h-4 text-blue-800"
                />
                <label
                  htmlFor={`job-type-${type}`}
                  className="capitalize cursor-pointer"
                >
                  {type}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* post a job CTA */}
        {/* <div className="bg-blue-800 text-white rounded p-5 text-center">
          <h4 className="font-sans font-semibold text-xl capitalize mb-2">
            post a job
          </h4>
          <p className="font-sans text-sm mb-4 text-blue-100">
            Reach millions of qualified candidates today.
          </p>
          <Link
            to="/employeer/job-post"
            className="inline-block bg-white text-blue-800 font-sans font-semibold capitalize py-2 px-6 rounded hover:bg-blue-50"
          >
            get started
          </Link>
        </div> */}
      </aside>
    );
  }
}

export default Sidebar;
