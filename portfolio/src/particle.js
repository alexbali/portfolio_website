import React from "react";
import Particles from "react-particles-js";
import particleConfig from "./particleconfig/particleConfig";

export default function particleBackground() {
    return (
        <Particles params={particleConfig}/>
    );
}