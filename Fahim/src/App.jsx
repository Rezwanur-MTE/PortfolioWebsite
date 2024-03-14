import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

import Wallet from './Components/Wallet/Wallet.jsx';
import Projects from './Components/projects/Projects.jsx';
import Hero from './Components/hero/Hero.jsx';
import Handles from './Components/handles/Handles.jsx';
import Skills from './Components/skills/Skills.jsx';
import Experience from './Components/experience/Experience.jsx';
import Contact from './Components/contact/CV.jsx';

function App() {
  const [state, setState] = useState({provider: null, 
                                      contract: null})

  const saveState=(state)=>{

   setState(state);
   console.log(state);

  }



  return (
    <>
     <Wallet saveState={saveState} />
     <Hero/>
     <Contact/>
     <Handles/>
     <Projects state={state} />
     <Skills/>
     <Experience state={state}/>
    
     
     
    </>
  )
}

export default App

//contract address : 0xBf076A17f541124f5056737e5c031702d1125565

