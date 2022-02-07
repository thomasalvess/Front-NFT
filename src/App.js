import { useState } from "react";
import './App.css';
import Teacher1 from './giftoken.gif';

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

  const resgate = async () => {
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
      <div className="main">
        <div className="Center">
          <div className="menu">
            <div className="logo">
            </div>
            <div className="item-menu">        
            <time>
              <a id="demo"></a></time>
            </div>
          </div>
        </div>
      </div>
                <p></p>
                <p></p>
        <div className="logo">
          <img src={Teacher1}/></div>
          <div className="menuconnect">
          <button className="menuconnect menuconnect-green" onClick={connectWalletPressed}>
          🦊 Connect
              </button><p></p>
              <button className="menuconnect menu2" 
                onClick={resgate}>Present 🎁
              </button>
          </div>
      </div>   

  );
}

export default App;