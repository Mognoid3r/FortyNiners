// import React from 'react';
// import './Plans.css';

// function Plans() {
//     return (
//         <div className="plans" id="plans">
//             <h1>Our Plans</h1>
//             <p>Choose a plan that fits your needs.</p>
//         </div>
//     )
// }

// export default Plans;

import React from 'react'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import './Plans.css'


const Plans = () => {
  return (
    <div className="plans-container" id="plans">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>

        <div className="programs-header" style={{gap: '2rem'}}>
            <span className='stroke-text'>Ready To Start</span>
            <span>Your Journey</span>
            <span className='stroke-text'>Now With Us?</span>
        </div>

        {/* Plans Card */}
        <div className="plans">
            {plansData.map((plan, i) => (
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, i) => (
                            <div className="feature">
                                <img src={whiteTick}/>
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div><span>See More benefits</span></div>
                    <button className="btn">Join Now</button>
                
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans
