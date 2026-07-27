import { useState } from "react";

import Remote from "../pages/jobs/remote";
import OnSite from "../pages/jobs/on-site";
import Hybrid from "../pages/jobs/hybrid";
import Contract from "../pages/jobs/contract";
import FullTime from "../pages/jobs/full-time";
import Internship from "../pages/jobs/internship";
import FreelanceJob from "../pages/jobs/freelance";

const TABS = [
  { key: "remote", label: "Remote", component: Remote },
  { key: "on-site", label: "On-site", component: OnSite },
  { key: "hybrid", label: "Hybrid", component: Hybrid },
  { key: "contract", label: "Contract", component: Contract },
  { key: "full-time", label: "Full-time", component: FullTime },
  { key: "internship", label: "Internship", component: Internship },
  { key: "freelance", label: "Freelance", component: FreelanceJob },
];

function TabNav() {
  const [activeTab, setActiveTab] = useState("remote");

  const ActiveComponent = TABS.find((tab) => tab.key === activeTab).component;

  return (
    <div className="md:mx-38 md:text-xl text-sm flex-wrap flex justify-evenly font-medium text-center h-auto text-body border-none border-default mx-2">
      <ul className="flex md:flex-wrap -mb-px overflow-x-auto whitespace-nowrap scrollbar-hide md:overflow-visible md:whitespace-normal">
        {TABS.map((tab) => (
          <li className="me-2" key={tab.key}>
            <button
              onClick={() => setActiveTab(tab.key)}
              className={`inline-block p-4 border-b-2 rounded-t-base cursor-pointer transition-colors duration-200 ${
                activeTab === tab.key
                  ? "text-fg-brand border-brand"
                  : "border-transparent hover:text-fg-brand hover:border-brand"
              }`}
              aria-current={activeTab === tab.key ? "page" : undefined}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Active tab content */}
      <div className="w-full mt-4">
        <ActiveComponent />
      </div>
    </div>
  );
}

export default TabNav;

