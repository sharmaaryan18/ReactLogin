import React from 'react'
import signUpImg from "../assets/signup.png"
import Template from '../components/Template'


const SignUp = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Join the millions learning to code with study notion for free."
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career"
      image={signUpImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
      />
  )
}
export default SignUp