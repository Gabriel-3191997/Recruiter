import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";

import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import ResumeBuilder from "./pages/resume_builder";
import Blog from "./pages/blog";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Employee from "./pages/employeer";
import Freelancer from "./pages/freelancer";
import JobListing from "./pages/job_listing";
import Jobs from "./pages/jobs";
import Privacy from "./pages/privacy";
import JobPost from "./pages/jobs/Job_post/job_post";

import EmployerDefault from "./pages/employeer/default";
import EmployerProfile from "./pages/employeer/profile";
import EmployerJobPost from "./pages/employeer/job_post";
import EmployerPublish from "./pages/employeer/publish";
import FreelanceDefault from "./pages/freelance/default";
import FreelanceProfile from "./pages/freelance/profile_page";

// Job tab content is rendered via TabNav component

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/employeer" element={<Employee />} />
          <Route path="/employeer/default" element={<EmployerDefault />} />
          <Route path="/employeer/profile" element={<EmployerProfile />} />
          <Route path="/employeer/job-post" element={<EmployerJobPost />} />
          <Route path="/employeer/publish" element={<EmployerPublish />} />
          <Route path="/freelancer" element={<Freelancer />} />
          <Route path="/freelance/default" element={<FreelanceDefault />} />
          <Route path="/freelance/profile" element={<FreelanceProfile />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job-listing" element={<JobListing />} />
          <Route path="/job-post" element={<JobPost />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
