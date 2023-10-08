import React, { useState } from 'react';
import Navbar from '../Shared/Navbar';
import signIn from '../assets/Sign in-rafiki.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const SignUp = () => {
    const [huser, setHuser] = useState([])

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
    }

    const navigate = useNavigate();


    if (user ) {
        navigate('/home');
    }

    
    return (

        <div>
            <Navbar></Navbar>



            <section class="text-gray-600 body-font">
                <div class="container px-5 pt-0 mt-0  mx-auto flex flex-wrap items-center">
                    <div class="lg:w-3/6 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <img className='' src={signIn} alt="" />
                    </div>


                    <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                            <div class="relative mb-4">
                                <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                <input
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                    type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                                <input
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                    type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>

                            <div class="relative mb-4">
                                <label for="password" class="leading-7 text-sm text-gray-600">Password</label>
                                <input
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                    type="password" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <input class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit" value="Sign Up" />
                        </form>
                        <p class="text-xs text-gray-500 mt-3">You have no Account Please <Link to="/signIn" className='text-blue-400 font-bold '>SignIn</Link></p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;