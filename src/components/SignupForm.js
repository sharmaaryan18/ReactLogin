import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {

    const navigate =useNavigate()

    const[formData,setFormData]=useState({firstName:"",
lastname:"",
email:"",
password:"",
confirmPassword:""})

const[showPassword,setShowPassword]=useState(false);
const[showConfirmPassword,setShowConfirmPassword]=useState(false);
const[accountType, setAccountType] =useState("student");


function changeHandler(event) {
    setFormData((prevData)=>(
        {
            ...prevData,[event.target.name]:event.target.value
        }
    ))
}
    function submitHandler(event) {
        event.preventDefault();
        if(formData.password != formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Successfully Creeated");

        const accountData ={
            ...formData
        };

        const finalData = {
            ...accountData,accountType
        }
        console.log(accountData);

        navigate("/dashboard");
    }
  return (
    <div>
     {/* student-instructor tab    */}
     <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button
        className={`${accountType === "student"?   
    "bg-richblack-900 text-richblack-5"
    :
    "bg-transparent  text-richblack-200"
    } py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=> setAccountType("student")}>
            Student
        </button>
        <button 
         className={`${accountType === "instructor"?   
         "bg-richblack-900 text-richblack-5"
         :
         "bg-transparent text-richblack-200"
         } py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=> setAccountType("instructor")}>
            Instructor
        </button>
     </div>

 <form onSubmit={submitHandler}>
    {/* First & Last Name */}
     <div className='flex justify-between gap-x-4 mt-[20px]'>
        <label  className='relative w-full'>
            <p  className='text-[0.875rem]
        text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
            <input
            required
            type="text"
            name="firstName"
            onChange={changeHandler}
            placeholder="Enter the First Name"
            value={formData.firstName}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>


        <label  className='relative w-full'>
            <p  className='text-[0.875rem]
        text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
            <input
            required
            type="text"
            name="lastname"
            onChange={changeHandler}
            placeholder="Enter Last Name"
            value={formData.lastname}
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>
     </div>

    {/* Email Address */}   
     <div className='mt-[20px]'>
     <label className='w-full'>
            <p  className='text-[0.875rem]
        text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>

            <input
            required
            type="email"
            value={FormData.email}
            onChange={changeHandler}
            placeholder='Enter email id'
            name="email"
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
                   </label>
     </div>

     {/* Creation of Password */}
     <div className='flex justify-between gap-x-4 mt-[20px]'>
     <label className='relative w-full'>
            <p  className='text-[0.875rem]
        text-richblack-5 mb-1 leading-[1.375rem]'>
               Create Password<sup className='text-pink-200'>*</sup>
            </p>
            <input
            required
            type={
              showPassword ? ("text") : ("password")  
            }
            value={formData.password}
            onChange={changeHandler}
            placeholder='Enter Password'
            name="password"
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
    <span  className='absolute right-3 top-[38px] cursor-pointer' onClick={
            ()=>setShowPassword((prev)=>!prev)
        }>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB' />) : (<AiOutlineEye fontSize={24} fill='#AFB'/>)}
        </span>
    </label>

    <label className='relative w-full'>
            <p  className='text-[0.875rem]
        text-richblack-5 mb-1 leading-[1.375rem]'>
               Confirm Password<sup className='text-pink-200'>*</sup>
            </p>
            <input
            required
            type={
              showConfirmPassword ? ("text") : ("password")  
            }
            value={formData.confirmPassword}
            onChange={changeHandler}
            placeholder='Confirm Password'
            name="confirmPassword"
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
    <span  className='absolute right-3 top-[38px] cursor-pointer' onClick={
            ()=>setShowConfirmPassword((prev)=>!prev)
        }>
            {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB'/>) : (<AiOutlineEye fontSize={24} fill='#AFB'/>)}
        </span>
    </label>
     </div>      
        <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
           Create Account
        </button>
 </form>
    </div>
  )
}

export default SignupForm