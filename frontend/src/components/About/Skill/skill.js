import React from 'react';
import './skill.css';

const Skill =() => {
    return (

              <div className="col-sm-9 container">
                <div claclassNames="about-descr">
      
                  <p className="p-intro">I'm a full stack developer based in Bayarea, California, America. </p>
                  <p className="p-intro">I enjoy turning complex problems into simple and intuitive pieces. I can help you build your next product.</p>
      

      <div className="skillbar clearfix " data-percent="80%">
        <div className="skillbar-title" style={{background: '#A9A9A9'}}><span>HTML</span></div>
        <div className="skillbar-bar" style={{background: '#D3D3D3'}}></div>
        <div className="skill-bar-percent">80%</div>
      </div> 
      
      <div className="skillbar clearfix " data-percent="80%">
        <div className="skillbar-title" style={{background: '#A9A9A9'}}><span>CSS</span></div>
        <div className="skillbar-bar" style={{background: '#D3D3D3'}}></div>
        <div className="skill-bar-percent">85%</div>
      </div> 
      
      <div className="skillbar clearfix " data-percent="50%">
        <div className="skillbar-title" style={{background:' #A9A9A9'}}><span>JavaScript</span></div>
        <div className="skillbar-bar" style={{background: '#D3D3D3'}}></div>
        <div className="skill-bar-percent">90%</div>
      </div> 
      
      <div className="skillbar clearfix " data-percent="40%">
        <div className="skillbar-title" style={{background: '#A9A9A9'}}><span>React</span></div>
        <div className="skillbar-bar" style={{background: '#D3D3D3'}}></div>
        <div className="skill-bar-percent">90%</div>
      </div> 
      
      <div className="skillbar clearfix " data-percent="50%">
        <div className="skillbar-title" style={{background:' #A9A9A9'}}><span>Django</span></div>
        <div className="skillbar-bar" style={{background: '#D3D3D3'}}></div>
        <div className="skill-bar-percent">90%</div>
      </div> 
      
      <div className="skillbar clearfix " data-percent="80%">
        <div className="skillbar-title" style={{background: '#A9A9A9'}}><span>Python</span></div>
        <div className="skillbar-bar" style={{background:' #D3D3D3'}}></div>
        <div className="skill-bar-percent">80%</div>
      </div> 
      
      <div className="skillbar clearfix " data-percent="70%">
        <div className="skillbar-title" style={{background: '#A9A9A9'}}><span>Django</span></div>
        <div className="skillbar-bar" style={{background: '#D3D3D3'}}></div>
        <div className="skill-bar-percent">70%</div>
      </div>

      
                </div>
      
              </div>
      
    )
}
export default Skill;