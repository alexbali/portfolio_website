import "./intro.scss"
import { init } from 'ityped';
import { useEffect, useRef } from "react";
import {KeyboardArrowDown} from "@material-ui/icons"

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, { showCursor: true,
            backDelay: 1500,
            strings: ['Developer', 'Tester', 'Analyst' ] })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <img className="imageContainer" src="assets/ab7.jpg" alt="" />
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2> Hi There, I'm</h2>
                    <h1> Alex Bali</h1>
                    <h3><span ref={textRef}></span></h3>
                </div>
                    <a href="#about">
                        <img src="assets/down_arrow.png" alt="" />
                    </a>
                </div>
            </div>
    )
}
