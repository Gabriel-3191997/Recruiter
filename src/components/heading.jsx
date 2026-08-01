import React from "react";

class Heading extends React.Component {
  render() {
    return (
      <>
        <div id="heading" className="fixed w-full static">
          <h1 className="md:text-5xl text-4xl md:mx-0 mx-2 text-black text-center font-sans font-bold">
            0ver 3million+ High level companies <br /> need a skillset for
            hiring.
          </h1>
        </div>
        <div className="flex flex-wrap justify-center md:my-5">
          <a
            href="http://"
            className="flex flex-wrap justify-center py-3 px-3 underline bg-white font-sans font-normal capitalize"
          >
            get hired
          </a>
        </div>
      </>
    );
  }
}

export default Heading;
