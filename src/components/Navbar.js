import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'


const Navbar = (props) => {

  let isLoggedIn=props.isLoggedIn;
  let setIsLoggedIn= props.setIsLoggedIn; 
  return (
    <div className='flex items-center w-11/12 max-w-[1160px] py-4 mx-auto justify-between'> 
        <Link to="/">
            <img src={logo} alt='Logo' width={160} height={32} loading="lazy"/>
        </Link>

        <nav>
            <ul className=' text-richblack-100  flex gap-x-6'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/">About</Link>
                </li>
                <li>
                <Link to="/">Contact</Link>
                </li>

            </ul>
        </nav>

        {/* Login->SignUp->Logout->Dashboard */}
        <div className='flex items-center gap-x-4'>
            { !isLoggedIn &&
                <Link to="/Login">
                <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                Login
                </button>
                </Link>
            }
              { !isLoggedIn &&
                <Link to="/Signup">
                <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                Sign Up
                </button>
                </Link>
            }
              { isLoggedIn &&
                <Link to="/">
                <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                 onClick={()=> {
                  setIsLoggedIn(false);
                  toast.success("Logged Out");}}>
                Log Out
                </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                Dashboard
                </button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar