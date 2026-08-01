// import { useState } from "react";
// import RecruiterProfile from "./profile";
// import JobPost from "./job_post";
// import Publish from "./publish";

import React from "react";

class Default extends React.Component {
  render() {
    return (
      <>
        <div className=" md:mt-28">
          {/* <h1 className="text-3xl  font-sans font-semibold md:py-5 border-none">
            Get started <br />
            Create an employeer's profile
          </h1> */}
        </div>
        <div className="flex flex-wrap justify-evenly">
          <form action="post" className="">
            <input
              type="text"
              className="w-xl border py-3 px-3"
              placeholder="company's name"
            />

            <div className="flex flex-col py-10">
              <input
                type="text"
                className="w-xl border py-3 px-3"
                placeholder="john@example.com"
              />
              <br />
              <p className="text-sm font-sans">
                Enter a valid email of your company
              </p>
              <input
                type="text"
                className="w-xl border py-3 mt-10 px-3"
                placeholder="Address 1"
              />
              <input
                type="text"
                className="w-xl border py-3 px-3"
                placeholder="Address 2"
              />
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Default;

// const TABS = [
//   {
//     key: "profile",
//     label: "Profile",
//     component: RecruiterProfile,
//     icon: (
//       <svg
//         className="w-4 h-4 me-2"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         fill="none"
//         viewBox="0 0 24 24"
//       >
//         <path
//           stroke="currentColor"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
//         />
//       </svg>
//     ),
//   },
//   {
//     key: "job-post",
//     label: "Job Descriptions",
//     component: JobPost,
//     icon: (
//       <svg
//         className="w-4 h-4 me-2"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         fill="none"
//         viewBox="0 0 24 24"
//       >
//         <path
//           stroke="currentColor"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M8 7V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m-8 0H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2M8 7h8"
//         />
//       </svg>
//     ),
//   },
//   {
//     key: "publish",
//     label: "Publish",
//     component: Publish,
//     icon: (
//       <svg
//         className="w-4 h-4 me-2"
//         aria-hidden="true"
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         fill="none"
//         viewBox="0 0 24 24"
//       >
//         <path
//           stroke="currentColor"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5"
//         />
//       </svg>
//     ),
//   },
// ];

// function Default() {
//   const [activeTab, setActiveTab] = useState("profile");

//   const ActiveComponent = TABS.find((tab) => tab.key === activeTab).component;

//   return (
//     <>
//       <div className="flex flex-col justify-center items-center h-auto mt-24">
//         <div className="border-b border-default w-full max-w-4xl px-4">
//           <ul className="flex flex-wrap -mb-px md:gap-12 text-sm md:text-lg font-medium text-center text-body justify-center">
//             {TABS.map((tab) => (
//               <li className="me-2" key={tab.key}>
//                 <button
//                   onClick={() => setActiveTab(tab.key)}
//                   className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-base cursor-pointer transition-colors duration-200 ${
//                     activeTab === tab.key
//                       ? "text-fg-brand border-brand"
//                       : "border-transparent hover:text-fg-brand hover:border-brand"
//                   }`}
//                   aria-current={activeTab === tab.key ? "page" : undefined}
//                 >
//                   {tab.icon}
//                   {tab.label}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Active tab content */}
//         <div className="w-full max-w-4xl mt-6 px-4">
//           <ActiveComponent />
//         </div>
//       </div>
//     </>
//   );
// }
