import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import Card from "./components/card/Card"
import Projectslider from "./components/projectslider/Projectslider"
import "./app.scss";
import React, { useEffect, useState } from "react";
import particleBackground from "./particle";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      {/* <particleBackground></particleBackground> */}
      <Topbar></Topbar>
      {/* <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Topbar> */}
      {/* <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Menu> */}
      <div className="sections">
        <Intro></Intro>
        <About></About>
        {/* <Projectslider></Projectslider> */}
        {/* <Card></Card> */}
        <Portfolio></Portfolio>
        {/* <Works></Works> */}
        <Testimonials></Testimonials>
        {/* <Contact></Contact> */}
      </div>
    </div>
  );
}

export default App;
