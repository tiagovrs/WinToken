import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "../../../../firebase";
import { apiKey } from "../../../../config/api/axios";
import { doc, setDoc } from "firebase/firestore";
import axios from "axios";
import { Navigate } from "react-router-dom";
import './SignUp.css'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password);

    const walletData = await generateWallet()

    const res = await setDoc(doc(db, "wallets", email), 
    {
      ...walletData,
      email
    });

    localStorage.setItem('user', JSON.stringify({email: email, wallet: walletData.address}));

    location.href = '/'
  };

  const generateWallet = async () => {
    try {
      const response = await axios.post("https://protocol-sandbox.lumx.io/v2/wallets", {}, {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      })
      
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  return (
    <div className="order">
     <div className="title">
        <span className="win">WIN</span>TOKEN
  
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Criar conta</h1>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
    </div>    
    </div>
    </div>
  );
};

export default SignUp;