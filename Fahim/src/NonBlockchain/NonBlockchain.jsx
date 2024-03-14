import React from "react";
import Hero from "../Components/hero/Hero";
import Contact from "../Components/contact/CV";
import Handles from "../Components/handles/Handles";
import Projects from "./projects2/Projects2.jsx";
import Skills from "../Components/skills/Skills.jsx"
import Wallet from "../Components/Wallet/Wallet.jsx"
import Experience from "./Wallet/Experience.jsx"

const Portfolio=()=>{
    return(
        <>
        <Wallet/>
        <Hero/>
        <Contact/>
        <Handles/>
        <Skills/>
        <Projects/>
        <Experience/>
        </>
    )
}

export default Portfolio;