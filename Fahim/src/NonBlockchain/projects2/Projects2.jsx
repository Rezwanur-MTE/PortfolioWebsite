import './Projects2.css'
import D3Scanner from '../../assets/3DScanner.jpg';
import Game from '../../assets/Cyborg 2.8.jpg'
import Desalination from '../../assets/desalination.jpg'
import Event from '../../assets/event_organising.jpg'
import Mudrover from '../../assets/Mudrover.jpg'
import Multisig from '../../assets/MultiSig-wallet.jpg'
import Locator from '../../assets/Vehiclelocator.png'
import Safety from '../../assets/Woman Safety.jpg'
import weather from '../../assets/IOTweather.jpg'


const Projects=()=>{

    
    
    return(
        <>
       
        <section className='project-section'>
        <div>
            <h1 className='title'>Projects</h1>
        </div>

        <div className='projects'>
            <div className='card-wrapper'>
             
             <a href= "" className="project-card" target='_blank' rel="noopener noreferrer" >
                <div className='card-img'>
                    <img src={D3Scanner} alt=" Image"/>
                </div>
                <div className='card-text'>
                    <h4>3D scanner based on GP2Y0A710K0F</h4>
                    <p>Detail in Github, click here..</p>
                </div> 
                </a>
                
            </div>

            <div className='card-wrapper'>
             
             <a href= "https://www.youtube.com/watch?v=zz6cs5x0fCs&t=479s" className="project-card" target='_blank' rel="noopener noreferrer" >
                <div className='card-img'>
                    <img src={Locator} alt=" Image"/>
                </div>
                <div className='card-text'>
                    <h4>Real-time location tracking app </h4>
                    <p>Detail in YouTube, click here..</p>
                </div> 
                </a>
                
            </div>

            <div className='card-wrapper'>
             
             <a href= "" className="project-card" target='_blank' rel="noopener noreferrer" >
                <div className='card-img'>
                    <img src={Safety} alt=" Image"/>
                </div>
                <div className='card-text'>
                    <h4>IOT based women safety system. </h4>
                    <p>Detail in Github, click here..</p>
                </div> 
                </a>
                
            </div>

            <div className='card-wrapper'>
             
             <a href= "" className="project-card" target='_blank' rel="noopener noreferrer" >
                <div className='card-img'>
                    <img src={Mudrover} alt=" Image"/>
                </div>
                <div className='card-text'>
                    <h4>Mud Rover </h4>
                    <p>Detail in Github, click here..</p>
                </div> 
                </a>
                
            </div>

        </div>

        <div className='projects'>
            <div className='card-wrapper'>
             
             <a href= "" className="project-card" target='_blank' rel="noopener noreferrer" >
                <div className='card-img'>
                    <img src={weather} alt=" Image"/>
                </div>
                <div className='card-text'>
                    <h4>IOT based Autonomous Solar panel monitoring</h4>
                    <p>Detail in Github, click here..</p>
                </div> 
                </a>
                
            </div>

            <div className='card-wrapper'>
             
             <a href= "https://studio-gamonova.github.io/Studio-Gamonova/?fbclid=IwAR2taoDLN0PnqwB4j6dal1lTqV8D_ZPtIYm65UN3HziDmlaXb_6W42ZNkmM" className="project-card" target='_blank' rel="noopener noreferrer" >
                <div className='card-img'>
                    <img src={Game} alt=" Image"/>
                </div>
                <div className='card-text'>
                    <h4>Video Game " Cyborg 2.8" </h4>
                    <p> Visit Webpage, click here..</p>
                </div> 
                </a>
                
            </div>

            <div className='card-wrapper'>
             
             <a href= "https://github.com/Rezwanur-MTE/Multisignature_Wallet" className="project-card" target='_blank' rel="noopener noreferrer" >
                <div className='card-img'>
                    <img src={Multisig} alt=" Image"/>
                </div>
                <div className='card-text'>
                    <h4>Decentralized Multi-signature wallet </h4>
                    <p>Detail in Github, click here..</p>
                </div> 
                </a>
                
            </div>

            <div className='card-wrapper'>
             
             <a href= "https://github.com/Rezwanur-MTE/EventOrganisation_smart_contract" className="project-card" target='_blank' rel="noopener noreferrer" >
                <div className='card-img'>
                    <img src={Event} alt=" Image"/>
                </div>
                <div className='card-text'>
                    <h4> Event Management Dapp </h4>
                    <p>Detail in Github, click here..</p>
                </div> 
                </a>
                
            </div>

        </div>

        </section>
        </>
    )

}

export default Projects;