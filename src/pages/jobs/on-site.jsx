import React from "react";
import Heading from "../../components/heading";
import OnSiteList from "../on-site_listing";

class OnSite extends React.Component {
  render() {
    return (
      <>
        <div className="container mx-auto py-10">
          <Heading />
          <OnSiteList />
        </div>
      </>
    );
  }
}

export default OnSite;
