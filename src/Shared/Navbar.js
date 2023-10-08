import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    signOut(auth);
  }

  const [user] = useAuthState(auth);

  console.log(user?.email)

  return (
    <nav className="bg-blue-600 py-4 ">
      <div className="container  mx-auto flex justify-between items-center px-5 ">

        <Link to="/home" className={`text-white text-2xl block font-bold  ${isMenuOpen ? 'hidden' : 'block'}`}>
          E-Heros
        </Link>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none" >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>



        <ul className={`${isMenuOpen ? 'block' : 'hidden'} sm:items-center pt-10 md:pt-10 lg:pt-0  text-center mr-32 md:mr-80 text-xl leading-9 lg:flex  lg:space-x-6`} >
          <li><Link to="/home" className="text-white  hover:text-gray-200"> Home </Link></li>

          {
            user && <li> <Link to="/allEmployee" className="text-white hover:text-gray-200"> All Employee</Link></li>
          }
          {
            user && <li> <Link to="/dashboard" className="text-white hover:text-gray-200"> Dashboard</Link></li>
          }

          {/* logout button here  */}
          <li className="text-white hover:text-gray-200">{user ? <Link onClick={logout} to="/">Sign Out</Link> : <Link to='/SignIn'>Sign In</Link>} </li>



        </ul>

      </div>
    </nav>

  );
};

export default Navbar;