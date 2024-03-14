import { useState, useEffect } from "react";
import './Experience.css'
import {SlCalender} from "react-icons/sl"

const Experience=({state})=>{
    console.log("State prop in Experience:", state);

    const [education, setEducation]= useState([]);
    const [experience, setExperience] = useState([]);
  useEffect(()=>{
        const {contract}=state;
        const educationDetails=async()=>{
            const education=await contract.allEductationDetails();
            setEducation(education);
            console.log("Education details:", education);
            const experience= await contract.allExperienceDetails();
            setExperience(experience);
           
        }

        contract && educationDetails();
        console.log(" Testing...");

    },[state])

    return(
        <>
        <section className="exp-section">
            <h1 className="title">Experience & Education</h1>
            <div className="container">
                <div className="education">
                    <h1 className="edu-title">Education</h1>
                    {education.map((edu)=>{
                        return(
                            <div className="edu-card">
                            <p className="card-text1">
                                <SlCalender className="icon"/> {edu.date}
                            </p>
                            <h3 className="card-text2">{edu.degree}</h3>
                            <p className="card-text3">{edu.knowledgeAcquired}</p>
                            <p className="card-text4">{edu.institutionName}</p>
                            </div>
                        )
                    })}
                </div>

                <div className="education">
                    <h1 className="edu-title">Experience</h1>
                    {experience.map((exp)=>{
                        return(
                            <div className="edu-card">
                            <p className="card-text1">
                                <SlCalender className="icon"/> {exp.date}
                            </p>
                            <h3 className="card-text2">{exp.post}</h3>
                            <p className="card-text3">{exp.knowledgeAcquired}</p>
                            <p className="card-text4">{exp.compamyName}</p>
                            </div>
                        )
                    })}
                </div>
                


            </div>

           

        </section>
        </>
    )
}

export default Experience;
