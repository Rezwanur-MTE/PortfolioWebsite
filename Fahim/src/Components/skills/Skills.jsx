import React from 'react'
import './Skills.css'

import blockchain from './blockchain.png'
import react from './React.svg.png'
import arduino from './arduino.png'
import avr from './avr.png'
import bitcoin from './bitcoin.png'
import c from './c.png'
import eth from './eth.png'
import etherjs from './etherjs.png'
import java from './java.png'
import javascript from './javascript.png'
import nft from './nft.png'
import nodejs from './nodejs.png'
import opencv from './opencv.png'
import plc from './plc.png'
import proteus from './proteus.png'
import python from './python.png'
import simulink from './simulink.png'
import solidity from './solidity.png'
import solidworks from './solidworks.png'
import tensorflow from './tensorflow.png'
import unreal from './unreal.png'
import web3js from './web3js.png'
import solidity2 from './solidity2.svg'
import esp from './esp.png'


const Skills=()=>{
    return(
        <>
      
         <section className='skills-section'>
         <h1 className='title'>Skill set</h1><br/>
         <div className='div'>
            <img src={blockchain} alt='skills icon'/>
            <img src={eth} alt='skills icon'/>
            <img src={etherjs} alt='skills icon'/>
            <img src={web3js} alt='skills icon'/>
            <img src={react} alt='skills icon'/>
            <img src={nodejs} alt='skills icon'/>
         </div>
         <div className='div'>
            <img src={solidity2} alt='skills icon'/>
            <img src={javascript} alt='skills icon'/>
            <img src={python} alt='skills icon'/>
            <img src={java} alt='skills icon'/>
            <img src={c} alt='skills icon'/>
           
         </div>

         <div className='div'>
            <img src={solidworks} alt='skills icon'/>
            <img src={proteus} alt='skills icon'/>
            <img src={simulink} alt='skills icon'/>
            <img src={plc} alt='skills icon'/>
            <img src={avr} alt='skills icon'/>
           
         </div>

         <div className='div'>
            <img src={tensorflow} alt='skills icon'/>
            <img src={opencv} alt='skills icon'/>
            <img src={unreal} alt='skills icon'/>
            <img src={arduino} alt='skills icon'/>
            <img src={nft} alt='skills icon'/>
            <img src={esp} alt='IOT img'/>
           
         </div>


        </section>
        </>
       
    )
}

export default Skills;
