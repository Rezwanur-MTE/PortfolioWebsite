import './Wallet.css'
 import { useState } from 'react';
 import ABI from "./ABI.json";
 import {ethers} from 'ethers';
 import { Link } from 'react-router-dom';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { Container, Row, Col } from "react-bootstrap"; 

function Wallet({saveState}){

   const [connected, setConnected]= useState(false)
   const [id, setId]= useState(null)

   const connect =async()=>{
      try{
        if(!connected){
            const provider= new ethers.BrowserProvider(window.ethereum);
            const signer= await provider.getSigner();
            const address= await signer.getAddress();
            const displayAddress= address?.substr(0,10)+"...";
            const message="Greetings from Rezwanur"
            const sig= await signer.signMessage(message);
            ethers.verifyMessage(message,sig);
            setId(displayAddress);
            setConnected(true);

            const ContractAddress= "0xBf076A17f541124f5056737e5c031702d1125565";

            const contractInstance= new ethers.Contract(ContractAddress,ABI,signer);
            console.log(contractInstance);
            saveState({provider: provider, contract: contractInstance});

        }

        else{
            window.ethereum.selectedAddress= null;
            setConnected(false);
        }

      } catch (error){
           alert("Something gone wrong or install MetaMask", error.message);
           console.log(error.message);
      }

   }
        return(
        <>
   
         <div className="header">
            <div className='NoWallet'>
            <button className='noMetaMaskBTN'><Link to="/NonBlockchain">No MetaMask</Link></button> 
            <p className='hint'> If you don't have metamask.</p>
            </div>

            <button className="connectBTN" onClick={connect} >
                {connected?id:"Connect MetaMask"}
             </button>
             </div>
        </>
        );
}

export default Wallet;
