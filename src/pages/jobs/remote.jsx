import React from "react";
import Heading from "../../components/heading";
import JobList from "../job_listing";

class Remote extends React.Component {
  render() {
    return (
      <>
        <div className="container mx-auto py-10">
          <Heading />
          <JobList />
        </div>
      </>
    );
  }
}

export default Remote;
