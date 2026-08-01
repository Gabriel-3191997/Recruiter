import React from "react";
import Heading from "../../components/heading";
import FullTimeList from "../full-time_joblisting";

class FullTime extends React.Component {
  render() {
    return (
      <>
        <div className="container mx-auto py-10">
          <Heading />
          <FullTimeList />
        </div>
      </>
    );
  }
}

export default FullTime;
