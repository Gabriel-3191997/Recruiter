import React from "react";
import Heading from "../../components/heading";
import RemoteList from "../remote_job_listing";

class Remote extends React.Component {
  render() {
    return (
      <>
        <div className="container mx-auto py-10">
          <Heading />
          <RemoteList />
        </div>
      </>
    );
  }
}

export default Remote;
