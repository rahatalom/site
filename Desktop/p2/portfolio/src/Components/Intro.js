import React from 'react'

function Intro() {
    return (
        <div className="outerIntro">
           <div className="Intro">
            <h1 className="introHead">Front End Focused</h1>
            
            <div class="row">
            <div class="col-12 col-xl-6">
              
            <h4 className="introSub">Driven To Deliver Results</h4>
            <p className="introText">As a motivated self-taught developer, I continuously work hard to
              produce results effectively and efficiently.</p>
              <h4 className="introSub">A Motivated Learner</h4>
              <p className="introText">I have always kept up to date with the latest frameworks and I am
              eager to learn more as I go.</p>
              </div>
              <div class="col-12 col-xl-6">
            <img className="i1" src="CSS/images/javascript.png"></img>
            <img className="i1" src="CSS/images/node.png"></img>
            <img className="i1" src="CSS/images/react.png"></img>
            </div>
            </div>


            </div> 

        </div>
    )
}

export default Intro
