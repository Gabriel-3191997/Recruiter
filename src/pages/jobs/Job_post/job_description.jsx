import React from "react";
import img1 from "../../../images/OLR.png";

class JobDesc extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-wrap justify-between md:justify-evenly md:mt-28 mt-28 md:h-80 bg-white">
          <div className="flex flex-nowrap items-start justify-evenly md:gap-5 gap-10 md:mx-32 mx-12">
            <div className="md:w-20 bg-white md:h-20">
              <img src={img1} className=""></img>
            </div>
            <div className="md:w-auto bg-white">
              <ul className="list-none font-sans inline">
                <li>
                  <h6 className="font-sans font-bold capitalize md:text-lg text-lg">
                    orange liberia
                  </h6>
                </li>
                <li className="capitalize">
                  16th street <br /> montserrado county <br /> liberia
                </li>
              </ul>
              {/* About Company */}
              <div className="h-auto md:w-lg w-auto md:mt-18 mt-20">
                <h5 className="font-sans font-bold capitalize md:py-3 py-3">
                  about
                </h5>
                <p className="font-sans text-lg">
                  Quis earum orci molestie illum molestie fugit quisque
                  adipisci, tempus odio esse. Unde rhoncus, aptent habitasse!
                  {/* Repudiandae at! Ultricies class hymenaeos repellendus! Ac
                  molestie eveniet euismod ultrices quae aut at iusto ullam,
                  magnis magna corporis semper tristique aliquet platea ipsam
                  diamlorem convallis, aliquid condimentum debitis tempor
                  euismod aute! Illum, volutpat, soluta augue consequat
                  consequat convallis quibusdam, possimus quo venenatis vel
                  anim, lacus class lacus, pariatur ac. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default JobDesc;
