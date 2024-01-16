import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const [walletAddress, setWalletAddress] = useState(null)
  window.onload = async function(){
    try {
      if (window.solana){
        //code here
        const solana = window.solana
        if (solana.isPhantom){
          console.log('Phantom wallet found!')
          const res = await solana.connect({onlyIfTrusted: true})
          console.log('Connected with Public Key:', res.publicKey.toString())
          setWalletAddress(res.publicKey.toString())
        }
      } else {
        alert ('Wallet not found! Get a Phantom Wallet')
      }
    } catch (error){
      console.error(error)
    }

  }

const connectWallet =async ()=>{
  if (window.solana){
    const solana = window.solana
    const res = await solana.connect()
    setWalletAddress (res.publicKey.toString())
  } else {
    alert ('Wallet not found! Get a Phantom Wallet')
  }
}

  return (
    <div className="App">
      <header className="App-header">
        {!walletAddress &&(
          <div>
            <button className="btn" onClick={connectWallet}>
              Connect Wallet
            </button>
          </div>
        )}
        {!walletAddress &&(
          <div>
            <p>
              Connected Account : {' '}
              <span className="address" >{walletAddress}</span>
            </p>
          </div>
        )}

      </header>
    </div>
  );
}

export default App;
