import AuthDetails from "../components/AuthDetails";
import SignUp from "../components/SignUp/SignUp";
function SignUpPage() {
    return (
      <body className='login-body'>
        <SignUp></SignUp>
        <AuthDetails />
      </body>
    );
  }
export default SignUpPage