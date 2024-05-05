import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../../firebase";
import axiosInstance, { apiKey } from "../../../../config/api/axios";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async (e) => {
    e.preventDefault();
    // await generateWallet()

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     console.log(userCredential);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  
  // const generateWallet = () => {
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       "Authorization": `Bearer ${apiKey}` 
  //     },
  //   };
    
  //   fetch('https://protocol-sandbox.lumx.io/v2/projects/auth', options)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));
  // }

  // generateWallet();

  const apiKey = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicHJvamVjdElkIjoiYjY5NDdlZTUtMDNjMy00MjQ5LTk0ZWQtY2Q4YjJiNDYwNzdjIiwic2NvcGVzIjpbIlJFQURfV0FMTEVUUyIsIlJFQURfQ09OVFJBQ1RTIiwiUkVBRF9UT0tFTl9UWVBFUyIsIlJFQURfVFJBTlNBQ1RJT05TIiwiREVQTE9ZX0NPTlRSQUNUUyIsIldSSVRFX0NPTlRSQUNUUyIsIldSSVRFX0NVU1RPTV9UUkFOU0FDVElPTlMiLCJXUklURV9NSU5UUyIsIldSSVRFX01JTlRTIiwiV1JJVEVfVE9LRU5fVFlQRVMiLCJXUklURV9UUkFOU0ZFUlMiLCJXUklURV9XQUxMRVRTIl0sImlhdCI6MTcxNDg3MDk1N30.yIvNu23Vgm3XoFsdK9fUY5vTUuQQxrNGZW-15QdCgkGwa2EG_Ldj4UkrtR9lR3FCzEStTJX2CjX7nvUzPqtP6m0U2rI9bTwYD6Wa_aMaSUgnfuUDuFMHMyoWDfYzJle-2YT3StFhnar4I8-gfUutuNWOIh4CGluQK6W84p2IkPjr_luaYqGAwfl9ejBpubY5L8IdO6YHkGJHFlbiCo1qUTk_RSZ2uJmX162kziLTndi_hbvMfcDSRpV6DZx8kVYaoEE4OQJuefDnjqBZ6amMp-B28DSmSOjo155ilNmOs86Fl5Fqbx8j_p4ikQj3aNw3yiu_p69I17rFU2RELsMNJdltkiLMNKCRStjrEF5CUDq0hAgGFlqT0ymNncHBrE9PI6UjK4YSl7QH9kuKhBgD2Mkc56ZkQF0k12mGMqZFIKP0SlAUAmOqF4Qjy_fEAwKvU-1SICWPD4Fq9CFfPlhudRIM_trsx-MJzGfjtNf27fzr5cTyVSK__rerIJgT-RNgrY7Wz_438rhW-JyjjkgP3-lY6z4mCdshrUHGp0Nl9jaFD5q-_LPQsrR-RGugAox41RFNLeVpoTVU17RdRE3FBYxQrkW-6icSZlVCfmzM4juVEeimFl0jiydgLfJHIjE1X9incKBZRMF_jQmhlRcfzwJ16b6DfBlCRSAsjG6lsG8"

  const fetchData = async () => {
      try {
          const response = await axios.post("http://protocol-sandbox.lumx.io/v2/wallets", {}, {
            headers: {
              "Authorization": `Bearer ${apiKey}`,
            }
          })

        console.log(response)
      } catch (error) {
          console.error('Erro ao buscar dados:', error);
      }
  };

  // Chame a função para buscar dados
  fetchData();

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;