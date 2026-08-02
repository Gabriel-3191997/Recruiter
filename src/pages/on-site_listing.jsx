import { useState } from "react";
import { Link } from "react-router";
import Sidebar from "../components/sidebar";

const JOBS = [
  { title: "chief marketing officer", company: "Orange" },
  { title: "senior software engineer", company: "TechNova" },
  { title: "product designer", company: "Creative Studio" },
  { title: "financial analyst", company: "FinBridge" },
  { title: "data scientist", company: "DataWorks" },
  { title: "hr manager", company: "GlobalCorp" },
];

function JobCard({ job }) {
  return (
    <div className="flex flex-col gap-4 py-5 border-none border-gray-200 md:flex-row md:items-center md:justify-between md:mx-0 mx-3">
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-4 md:block">
          <h3 className="text-left text-xl font-sans font-semibold capitalize">
            {job.title}
          </h3>
          <div className="shrink-0 md:hidden">
            <Link
              to="/job-post"
              className="inline-block bg-blue-800 py-2 px-4 rounded text-white capitalize"
            >
              apply
            </Link>
          </div>
        </div>
        <ul className="font-sans text-left list-item">
          <li>{job.company}</li>
        </ul>
      </div>
      <div className="shrink-0 hidden md:block">
        <Link
          to="/job-post"
          className="inline-block bg-blue-800 md:py-2 md:px-8 py-2 px-4 rounded text-white capitalize"
        >
          apply
        </Link>
      </div>
    </div>
  );
}

function OnSiteList() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {/* contract job listing */}
      <div className="flex-1 flex items-center justify-between md:mx-0 mx-3">
        <h3 className="text-left capitalize font-sans md:text-md text-xl md:py-3">
          find a job
        </h3>
        {/* mobile see more / see less toggle opposite "find a job" */}
        <button
          type="button"
          onClick={() => setShowMore((prev) => !prev)}
          className="md:hidden font-sans font-semibold capitalize text-blue-800 underline cursor-pointer"
        >
          {showMore ? "see less" : "see more"}
        </button>
      </div>

      <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-16 md:justify-between">
        <div className="flex-1 min-w-0">
          {/* browse jobs */}
          <div className="flex flex-col md:max-h-[calc(100vh-24rem)] md:overflow-y-auto md:pr-3 job-scroll">
            {JOBS.map((job, index) => (
              <div
                key={index}
                className={index >= 2 && !showMore ? "hidden md:block" : ""}
              >
                <JobCard job={job} />
              </div>
            ))}
          </div>
        </div>

        {/* sidebar column */}
        <Sidebar />
      </div>
    </>
  );
}

export default OnSiteList;
