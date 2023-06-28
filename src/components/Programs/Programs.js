// import React from 'react';
// import './Programs.css';

// function Programs() {
//     return (
//         <div className="programs" id="programs">
//             <h1>Our Programs</h1>
//             <p>Discover our diverse range of programs.</p>
//         </div>
//     )
// }

// export default Programs;


import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="div Programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore </span>
        <span>The Programs</span>
        <span className="stroke-text">We Offer</span>
      </div>

      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            {/* <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;