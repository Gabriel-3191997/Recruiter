import React from "react";
import Heading from "../../components/heading";
import HybridList from "../hybrid_job_listing";

class Hybrid extends React.Component {
  render() {
    return (
      <>
        <div className="container mx-auto py-10">
          <Heading />
          <HybridList />
        </div>
      </>
    );
  }
}

export default Hybrid;
