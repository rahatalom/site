import React from 'react'

function Cards() {
    return (
        <div className="outerCards">
            <div className="Cards">
                <div className="c1">
                    <div className="cardBody">
                        <img className="i2" src="CSS/images/webp.png" height="148px" width="128px"></img>
                    </div>
                <div className="cardText text1">
                <ul>
                <h4>Front End</h4>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript </li>
                <li>React</li>
              </ul>
                </div>
              </div>
              <div className="c1">
              <div className="cardBody ">
                        <img className="i2" src="CSS/images/servs.png" height="148px" width="126px" ></img>
                    </div>
              <div className="cardText text2">
              <ul>
                <h4>Server</h4>
                <li>Nodejs</li>
                <li>Python</li>
                <li>Express</li>
              </ul>
                </div>

            </div>
            <div className="c1">
                <div className="cardBody ">
                    <img className="i2" src="CSS/images/db.png"  height="150px" width="138px" style={{marginLeft:"14px"}}></img>
                    </div>
                <div className="cardText text3">
                <ul>
                <h4>Database</h4>
                <li>mySQL</li>
                <li>MongoDB</li>
              </ul>
                </div>
   
                </div>

                

            </div>
        </div>
    )
}

export default Cards
