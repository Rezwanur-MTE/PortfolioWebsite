import React from "react";
import './Handles.css';
import {AiFillLinkedin, AiFillTwitterSquare} from 'react-icons/ai';
import { FaGithubSquare, FaFacebookSquare} from "react-icons/fa";

const Handles=()=>{
    return(
        
        <section className="socials">
            <a href="https://www.linkedin.com/in/md-rezwanur-rahman-babb661b0/" target='_blank' rel="noopener noreferrer"><AiFillLinkedin className="icon"/></a>
            <a href="https://twitter.com/RezwanurF" target='_blank' rel="noopener noreferrer"><AiFillTwitterSquare className="icon"/></a>
            <a href="https://github.com/Rezwanur-MTE" target='_blank' rel="noopener noreferrer"><FaGithubSquare className="icon"/></a>
            <a href="https://www.facebook.com/fahim.rezwanur" target='_blank' rel="noopener noreferrer"><FaFacebookSquare className="icon"/></a>
        </section>
    )
}

export default Handles;