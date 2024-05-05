
  import { Wallet, WalletContextProvider } from '@lumx-protocol/embedded-wallet' 

  

  import './Login.css'
  function Login() {
      return (
        <body className='login-body'>
          <WalletContextProvider
      lang="en"
      colorScheme="purple"
      theme="dark"
      clientId="YOUR CLIENT ID"
      >
    <Wallet />
  </WalletContextProvider>
        </body>
      );
    }
  export default Login