import React from "react";
import Heading from "../../components/heading";
import ContractList from "../contract_joblist";

class Contract extends React.Component {
  render() {
    return (
      <>
        <div className="container mx-auto py-10">
          <Heading />
          <ContractList />
        </div>
      </>
    );
  }
}

export default Contract;
