import React from 'react';
import Me from './Me/me';
import Skill from './Skill/skill';
import Intro from './Intro/intro.js';
// import Contact from './Contact/contact';

import Paypal from './paypal.js';
import './about.css';

const About =() => {
    return (
        <div id="about" className="paddsection">
            <div className="container intro ">
                <Intro/>
                <Paypal className="pay"/>

            </div>
            <div className="container">
              <div className="row own">
                <div className="col-sm-3 Me">
                   <Me/>
                   {/* <Contact/> */}

                </div>
                <div className="col-sm-9 Skill">               
                    <Skill/> 
                </div>
            </div>
          </div>
          {/* <div className="container">
          <Contact/>
          </div> */}

        </div>
    )
}
export default About;