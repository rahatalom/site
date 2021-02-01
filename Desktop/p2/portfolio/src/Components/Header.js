import React from 'react'

function Header() {
    return (
        <div  className="outerTitle">
            <div className="Title">      
            <h1 className="titleText1">Rahatul Alom</h1> 
            <div className="introM">
            <h3 className="titleText2">Front end engineer</h3>
            <button  type="button" class="btn btn-dark btn-lg" onClick="#proj">
            <a  className="see-proj" href="#proj">
            See projects
          </a>
               </button>
            </div>

        </div>
     
        </div>
    )
}

export default Header
