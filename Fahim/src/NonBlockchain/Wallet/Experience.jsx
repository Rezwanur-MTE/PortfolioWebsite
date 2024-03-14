
import './Experience.css'
import {SlCalender} from "react-icons/sl"

const Experience=()=>{

    return(
        <>
        <section className="exp-section">
            <h1 className="title">Experience & Education</h1>
            <div className="container">
                <div className="education">
                    <h1 className="edu-title">Education</h1>
                            <div className="edu-card">
                            <p className="card-text1">
                                <SlCalender className="icon"/> 2019 - 2024
                            </p>
                            <h3 className="card-text2">B.Sc. in Mechatronics Engineering.</h3>
                            <p className="card-text3">Completed 40 courses of total 160 credits including 120 credits theory, 
                            42.35% core Engineering, 37.50 % related Engineering,
                            significant courses are Electronics, Software Engineering,
                             Manufacturing process and CIM, Electromechanical systems, Microcontroller & interfacing,
                              Control Systems, Power Electronics, Network & communication, Automation,
                               ML and AI algorithms, Embedded Systems, Robotics.</p>
                            <p className="card-text4"> Rajshahi University of Engineering & Technology.</p>
                            </div>

                            <div className="edu-card">
                            <p className="card-text1">
                                <SlCalender className="icon"/> 1 July 2022 - 30 September 2022
                            </p>
                            <h3 className="card-text2"> Blockchain Development.</h3>
                            <p className="card-text3"> Learnt Blockchain fundamentals, Ethereum Smart Contract Development, NFT etc. </p>
                            <p className="card-text4"> Bangabandhu Sheikh Mujib Hi-tech park, under ICT division</p>
                            </div>

                            <div className="edu-card">
                            <p className="card-text1">
                                <SlCalender className="icon"/> 2016 - 2017
                            </p>
                            <h3 className="card-text2"> Higher Secondary School Certificate.</h3>
                            <p className="card-text3"> Learnt Fundamentals of Physics , Chemistry, Mathematics, Biology, Social Science and GK, ICT. </p>
                            <p className="card-text4"> Khulna Public College.</p>
                            </div>
                      
                </div>

                <div className="education">
                    <h1 className="edu-title">Experience</h1>    
                            <div className="edu-card">
                            <p className="card-text1">
                                <SlCalender className="icon"/> 2022 - 2024
                            </p>
                            <h3 className="card-text2">Technical Secretary</h3>
                            <p className="card-text3">I worked on many projects, conducted workshops on robotics,
                             participated fests while being technical secretary.
                              Part of organizing panel of Robotronics 2.0 fest.</p>
                            <p className="card-text4">Robotic Society of RUET</p>
                            </div>


                            <div className="edu-card">
                            <p className="card-text1">
                                <SlCalender className="icon"/> 2023-
                            </p>
                            <h3 className="card-text2">Team Leader and Chief Executive.</h3>
                            <p className="card-text3">Gone through a business environment, learn project , 
                            finance, time and team management , gain leadership, marketing and analytical skills.</p>
                            <p className="card-text4">Blocke.shop</p>
                            </div>
                        
                    
                </div>
              </div>
            </section>
        </>
    )
}

export default Experience;
