import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";


function Projects() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [show2, setShow2] = useState(false);
  
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
  
    const [show3, setShow3] = useState(false);
  
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
  
    const [show4, setShow4] = useState(false);
  
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    return (
        <div className="outerProject">
             <Modal
        style={{ backgroundColor: "transparent" }}
        show={show}
        onHide={handleClose}
      >
        <div className="proj-1-box">
          <div style={{ display:"flex",justifyContent: "space-between" }}>
          <Modal.Header className="modal-top" closeButton>
            <div className="proj-1-header">
              <h1 className="proj-1-title">Gif searcher</h1>
            </div>
          </Modal.Header>
          </div>

          <Modal.Body class="modal-trial-1"></Modal.Body>
        </div>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <div className="proj-2-box">
          <div style={{ width: "550px",display:"flex",justifyContent: "space-between" }}>
            <Modal.Header className="modal-top2" closeButton>
              <div className="proj-2-header" >
                <h1 className="proj-2-title">Weather forecast</h1>
              </div>
            </Modal.Header>
          </div>

          <Modal.Body class="modal-trial-2"></Modal.Body>
        </div>
      </Modal>

      <Modal show={show3} onHide={handleClose3}>
        <div className="proj-3-box">
        <div style={{ display:"flex",justifyContent: "space-between" }}>
          <Modal.Header closeButton className="modal-top3">
            <div className="proj-3-header">
              <h1 className="proj-3-title">Chat app</h1>
            </div>
          </Modal.Header>
          </div>

          <Modal.Body class="modal-trial-3"></Modal.Body>
        </div>
      </Modal>

      <Modal show={show4} onHide={handleClose4}>
        <div className="proj-4-box">
        <div style={{ display:"flex",justifyContent: "space-between"}}>
          <Modal.Header closeButton className="modal-top4">
            <div className="proj-4-header">
              <h1 className="proj-4-title">Covid-19 tracker</h1>
            </div>
          </Modal.Header>
          </div>

          <Modal.Body class="modal-trial-4"></Modal.Body>
        </div>
      </Modal>
            <h1 id="proj" className="pTitle">Projects</h1>
            
      <div  className="proj-div">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div class="flip-card-front">
              <div class="card card1">
                <div id="one" class="card-body">
                  <div class="proj-text-1">
                    <ul>
                      <li>HTML5</li>
                      <li>CSS </li>
                      <li>JavaScript</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="flip-card-back back-1">
              <p
                style={{ marginTop: "95px", color: "white", fontSize: "18px" }}
              >
                Gif searcher copy and share gifs
              </p>
              <button
                onClick={handleShow}
                style={{ marginTop: "15px" }}
                class="btn btn-danger"
              >
                See Demo
              </button>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div class="flip-card-front">
              <div class="card card4">
                <div id="four" class="card-body">
                  <div class="proj-text-4">
                    <ul>
                      <li>HTML5</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>React</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="flip-card-back back-4">
              <p
                style={{ marginTop: "85px", color: "white", fontSize: "18px" }}
              >
                A 5-day weather forecast app for any city in the world
              </p>
              <button
                onClick={handleShow2}
                style={{ marginTop: "5px" }}
                class="btn btn-info"
              >
                See demo
              </button>
            </div>
          </div>
        </div>

        

        <div className="flip-card">
          <div className="flip-card-inner">
            <div class="flip-card-front">
              <div class="card card3">
                <div id="three" class="card-body">
                  <div class="proj-text-3">
                    <ul>
                      
                      <li>Material-UI</li>
                      <li>React </li>
                      <li>JavaScript</li>
                      <li>CSS </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="flip-card-back back-3">
              <p
                style={{ marginTop: "65px", color: "white", fontSize: "18px" }}
              >
                A tracker app that presents live data on corona cases around the
                world
              </p>
              <button onClick={handleShow4} class="btn btn-danger">
                See demo
              </button>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div class="flip-card-front">
              <div class="card card2">
                <div id="two" class="card-body">
                  <div class="proj-text-2">
                    <ul>
                      <li> Socket.io </li>
                      <li>Express</li>
                      <li>JavaScript</li>
                      <li>React </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="flip-card-back back-2">
              <p
                style={{ marginTop: "85px", color: "white", fontSize: "18px" }}
              >
                Chatapp allowing real time communication between users
              </p>
              <button
                onClick={handleShow3}
                style={{ marginTop: "2px" }}
                class="btn btn-warning"
              >
                See demo
              </button>
            </div>
          </div>
        </div>


      </div>

         
        </div>
    )
}

export default Projects
