/* eslint-disable no-unused-vars */
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import {auth, db} from '../../../../firebase'
import "./LoginForm.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredencial)=>{
      const res = await getDoc(doc(db, "wallets", email));
      const data = res.data()

      localStorage.setItem('user', JSON.stringify({email: email, wallet: data.address}));
      
      location.href = '/'
    })
    .catch((error) => {
        console.log(error);
    })
  }

  return (
    <div className="containerLogin">
      <div className="title">
        <span className="win">WIN</span>TOKEN
      </div>
      <div className="wrapper">
        <form onSubmit={signIn} action="">
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <FaLock className="icon" />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="go-to-signup">
        <label className="label-singup">Ainda não possui uma conta? <br></br><Link to='/signup'><a className="link-signup">Clique aqui para criar</a></Link></label></div>
      </div>
    </div>
  );
}

export default LoginForm;
