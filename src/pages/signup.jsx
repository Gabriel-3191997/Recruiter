import React from "react";
import SignupForm from "./signup_form";
import Nav from "../components/nav";

class Signup extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <SignupForm />
      </>
    );
  }
}

export default Signup;
