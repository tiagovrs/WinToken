import AuthDetails from "./components/AuthDetails";
import LoginForm from "./components/LoginForm/LoginForm";
import SignUp from "./components/SignUp/SignUp";
import './Login.css'
function Login() {
    return (
      <body className='login-body'>
        <LoginForm />
        <SignUp></SignUp>
        <AuthDetails />
      </body>
    );
  }
export default Login