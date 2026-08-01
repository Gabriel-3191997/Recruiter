import React from "react";
import Heading from "../../components/heading";
import InternshipListing from "../internship_listing";

class Internship extends React.Component {
  render() {
    return (
      <>
        <div className="container mx-auto py-10">
          <Heading />
          <InternshipListing />
        </div>
      </>
    );
  }
}

export default Internship;
