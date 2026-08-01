import React from "react";
import { Link } from "react-router";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-wrap justify-center h-auto pt-18">
          <h1 className="md:text-5xl text-4xl text-center font-sans font-bold capitalize">
            get hired
            <br />
            <span className="md:text-6xl text-3xl py-20">
              ''find that matching talent''
            </span>
          </h1>
          <br />
          <p className="text-xl flex-col justify-center flex-wrap text-center font-sans text-wrap mt-8 mx-4">
            A job board for applicants and recruiters to connect as a perfect
            match.
          </p>
        </div>
        <div className="md:pt-10 pt-5 pb-10 ">
          <form
            action="#"
            method="post"
            className="flex flex-wrap justify-center items-center"
          >
            <input
              type="text"
              name=" "
              id=""
              className="md:py-3 border-gray-400 border rounded md:px-3 bg-white md:w-xl w-60 mx-3 py-2 px-3 flex flex-wrap justify-center items-center"
              placeholder="john@example.com"
            />
            <input
              type="submit"
              value="subscribe"
              className="md:mx-5 mx-3 cursor-pointer md:text-xl hover:underline"
            />
          </form>
          <p className="text-center font-sans font-normal text-lg">
            Already have an{" "}
            <Link to="/signup" className="text-fg-brand text-blue-900">
              account
            </Link>
            ?{" "}
            <Link to="/login" className="text-fg-brand text-blue-800">
              Login
            </Link>
          </p>
          {/* <div className="flex flex-wrap justify-center py-5 md:py-10 items-center gap-5">
            <div className="lg">
              <Link
                to="/employeer"
                className="text-lg font-sans font-bold text-blue-700"
              >
                I'm an employeer
              </Link>
            </div>
            <div className="lg">
              <Link
                to="/freelancer"
                className="text-lg font-sans capitalize font-bold text-blue-700"
              >
                freelancer
              </Link>
            </div>
          </div> */}
          {/* filtering */}
          {/* <div className="flex flex-nowrap justify-center items-center gap-3 md:mx-0 px-10 md:gap-20 md:h-auto md:pt-10 md:px-4 overflow-x-auto">
            <div className="shrink-0">
              <select name="job" id="job-type" className="w-full sm:w-auto">
                <option value="Entry Level">Entry Level</option>
                <option value="Mid-Level">Mid Level</option>
                <option value="Senior">Senior</option>
              </select>
            </div>
            <div className="shrink-0">
              <select name="job" id="job-fliter" className="w-full sm:w-auto">
                <option value="Remote">Remote</option>
                <option value="On-site">On-site</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div className="shrink-0">
              <select name="job" id="job-fliter" className="w-full sm:w-auto">
                <option value="select-job">Job Type</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Business">Business Intelligence</option>
                <option value="Human Resource">Human Resource</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div> */}
        </div>
      </>
    );
  }
}

export default Header;
