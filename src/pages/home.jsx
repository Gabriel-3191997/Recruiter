import React from "react";
import Nav from "../components/nav";
import Header from "../components/header";
import TabNav from "../components/nav_tab";
import Footer from "../components/footer";

class Home extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Header />
        <TabNav />
        <Footer />
      </>
    );
  }
}

export default Home;
