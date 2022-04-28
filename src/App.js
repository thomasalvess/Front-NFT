import { useState } from "react";
import './App.css';
import gifnft from './gifimagem.gif';


const App = () =>  {
  const [isConnected, setConnectedStatus] = useState(false)
  const [status, setStatus] = useState('')
  const [walletAddress, setWallet] = useState('')

  const connectWalletPressed = async () => {
      if(isConnected) alert("You are connected!");
      
      
      const walletResponse = await connectWallet()
      setConnectedStatus(walletResponse.connectedStatus)
      setStatus(walletResponse.status)
      setWallet(walletResponse.address)
  }

  const connectWallet = async () => {
    if (window.ethereum) {
        try {
            const address = await window.ethereum.enable() 
            const obj = {
                connectedStatus:true,
                status:"Connected",
                address: address
            }
            return obj;
        } catch (error) {
            return {
                connectedStatus: false,
                status: "Error connecting to account"
            }
        }
    } else {
        return {
            connectedStatus: false,
            status: "Install Metamask in your browser: https://metamask.io/download.html"
        }
    }
  }

  const mint = async () => {
    if(isConnected){ 
      
      return document.getElementById("demo").innerHTML = "Carteira: " + String(walletAddress).substring(0, 5) +
      "..." +
      String(walletAddress).substring(38),

      setTimeout(function() {
        alert("Parabéns, você ganhou um Monza 1990!");
      }, 500);  

    } else { return alert("Connect to Metamask")
      }
      
    }
    
    

  return (
    <div className="App"> 
    
      <div className="text1" >
        <p>Degen Ghosts is a collection of 1,000 Ghosts on the ETH 
          <p>Blockchain</p>
          <br></br>
          Max 1 Mint Free per Waller
        </p>
        <br></br>
        <p>0.009 Mint</p>
      </div>

          
      <div className="menu">
          <center className="carteira" id="demo"></center>
      </div>
      

      <div className="menuconnect">
          <button className="menuconnect menuconnect-green" onClick={connectWalletPressed}>Connect Wallet </button> 
      </div> 
      
      <div className="gif gift text" >
        <img src={gifnft}/>
      </div>
      <div className="title1">
        <h1>Degen Ghosts</h1>
      </div>
      

      
    
    </div>
  );
}

export default App;