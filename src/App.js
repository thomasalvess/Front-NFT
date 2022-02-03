import { useEffect, useState } from "react";
import './App.css';
import Teacher1 from './giftoken.gif';
import Teacher2 from './logo1.jpg';

const App = () =>  {
  const [isConnected, setConnectedStatus] = useState(false)
  const [status, setStatus] = useState('')
  const [walletAddress, setWallet] = useState('')

  const connectWalletPressed = async () => {
      if(isConnected) return alert(
        "Conta já conectada! " +
        String(walletAddress).substring(0, 5) +
        "..." +
        String(walletAddress).substring(38)
      )
      
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
                status:"Conectado",
                address: address
            }
            return obj;
        } catch (error) {
            return {
                connectedStatus: false,
                status: "Erro durante a conexão com a conta"
            }
        }
    } else {
        return {
            connectedStatus: false,
            status: "Instale a Metamask no seu browser: https://metamask.io/download.html"
        }
    }
  }

  const resgate = async () => {
    if(isConnected){ 
    return alert("Parabéns, você ganhou um Monza 1990!")
    } else { return alert("Connect to Metamask")
      }
      
    }   
  


  return (
    <div className="App">
      {/* Sessão da Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <span className="App.css">
              <div className='header-container flex row center-center full-view' >
              </div>
              <button className="btn btn-green" onClick={connectWalletPressed}>
                Connect 🦊
              </button><p></p>
              <button className="btn btn-green" 
              onClick={resgate}>Present 🎁 </button>
            </span>
          </div>
        </div>
      </nav>
      <img src={Teacher1}/>
    </div>
    
    
  );
}

export default App;