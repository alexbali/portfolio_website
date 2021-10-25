import "./topbar.scss"
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap-buttons';
import 'bootstrap/dist/css/bootstrap.css'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
 
// Be sure to include styles at some point, probably during your bootstraping
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';

import {Person, Mail, AcUnit, GitHub,LinkedIn, FileDownload as FDI } from "@material-ui/icons"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="main-nav">

                <div className="header">
                    <div className="logo">
                        <a href="#intro">AB</a>
                    </div>

                    <nav>
                        <ul className="nav-links">
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#portfolio">Projects</a>
                            </li>
                            <li>
                                <a href="#testimonials">References</a>
                            </li>
                            <li>
                                <a href="/assets/resume.pdf" target="_blank" attributes-list>Resume</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="contact-social">
                        <div className="icon-1">
                            <a href="mailto:alexbali189@gmail.com">
                                <Mail style={{fontSize: '45px'}}></Mail>
                            </a>
                        </div>
                        <div className="icon-2">
                            <a href="https://www.linkedin.com/in/alex-bali/" target="_blank">
                                <LinkedIn style={{fontSize: '45px'}}></LinkedIn>
                            </a>
                        </div>
                        <div className="icon-3">
                            <a href="#intro">
                            <GitHub style={{fontSize: '40px'}}></GitHub>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </div>

            // <div className="main-nav">
            //     <navbar>
            //         <ul class="nav-list">
            //             <li className="nav-link">
            //                 <div className="logo">
            //                     <a href="#">AB</a>
            //                 </div>
            //             </li>
            //             <li className="nav-link">
            //                 <a href="#">About</a>
            //             </li>
            //             <li className="nav-link">
            //                 <a href="#portfolio">Projects</a>
            //             </li>
            //             <li className="nav-link">
            //                 <a href="#contact">Contact</a>
            //             </li>
            //             <li className="nav-link">
            //                 <div className="icon">
            //                     <a href="#intro">
            //                         <LinkedIn style={{ htmlColor: '#85197f' }}></LinkedIn>
            //                     </a>
            //                 </div>
            //             </li>
            //             <li className="nav-link">
            //                 <div className="icon">
            //                     <a href="#intro">
            //                         <GitHub style={{ htmlColor: '#85197f' }}></GitHub>
            //                     </a>
            //                 </div>
            //             </li>
            //         </ul>
            //     </navbar>
            // </div>
        )
    }
        
        {/* // <div className="main-nav"> */}
            {/* <Navbar bg="myRed" variant="dark" expand="lg">
                <Navbar.Brand>
                <a href="#intro">
                    <img src="/assets/mobile.png" alt="" href="#intro" />
                </a>  
                </Navbar.Brand>

                <Nav>
                    <Nav.Link href="#portfolio">About</Nav.Link>
                    <Nav.Link href="#intro">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>

                <NavbarToggle>
                    <Navbar.Collapse>
                        <Nav>
                            <Navbar.Brand>
                            <a href="#intro">
                                <img src="/assets/mobile.png" alt="" href="#intro" />
                            </a>  
                            </Navbar.Brand>

                            <Nav>
                                <Nav.Link href="#portfolio">About</Nav.Link>
                                <Nav.Link href="#intro">Projects</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </NavbarToggle>
                
            </Navbar> */}

            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
            </div>
            </nav> */}


        {/* // </div> */}

