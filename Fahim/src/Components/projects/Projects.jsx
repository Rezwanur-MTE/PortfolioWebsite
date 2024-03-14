import './Projects.css'
import img from '../../assets/3DScanner.jpg';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {Modal, ModalHeader, ModalBody, Row, Button} from "reactstrap"
import {FaDonate} from 'react-icons/fa'

const Projects=({state})=>{
    const [modal, setModal]= useState(false);
    const[projects, setProjects]= useState("");
    console.log("State prop in Project:", state);

     useEffect(()=>{
        const{contract}=state;  // it is fetching contractInsatance that coming through props
        
        const projectDetails=async()=>{
            const projects= await contract.allprojects();
            console.log(projects);
            setProjects(projects);
        }
        contract && projectDetails();

     },[state])
    return(
        <>
        <section className='project-section'>
            <h1 className='title'>Projects</h1>
            <div className='card-wrapper'>
                {projects!=="" && projects.map((project)=>{

                   const gitLink=`https://github.com/Rezwanur-MTE/${project.githubLink}`

                    return( <a href= {gitLink} className="project-card" target='_blank' rel="noopener noreferrer" >
                <div className='card-img'>
                    <img src={`https://gateway.pinata.cloud/ipfs/${project.image}`} alt=" Image"/>
                </div>
                <div className='card-text'>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
                  
                </a>)
                })}
            </div>
        </section>
        </>
    )

}

export default Projects;