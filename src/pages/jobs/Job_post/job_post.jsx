import React from "react";
import Nav from "../../../components/nav";
import JobDesc from "./job_description";

class JobPost extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <JobDesc />
      </>
    );
  }
}

export default JobPost;
