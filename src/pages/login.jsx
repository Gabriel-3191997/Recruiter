import React from "react";
import LoginForm from "./login_form";
import Nav from "../components/nav";

class Login extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <LoginForm />
      </>
    );
  }
}

export default Login;
