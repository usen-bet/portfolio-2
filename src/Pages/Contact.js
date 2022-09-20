import {
    BsWhatsapp,
    BsLinkedin,
    BsGithub,
} from "react-icons/bs"
import {
    FcGoogle
} from "react-icons/fc"
import {
    AiFillBackward
} from "react-icons/ai"
import { Link } from "react-router-dom"
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import {TweenMax, Power3} from 'gsap'
import { useEffect } from 'react' 

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setmessage] = useState("")

  let logoitem = useRef(null)

  useEffect(() => {
    TweenMax.to(
      logoitem,
      .5,
      {
        opacity: 0,
        // y: -2000,
        // x: -2000,
        ease: Power3.easeIn,
        display: 'none',
      }
     )
  }, [])

const notify = () => toast("Message Sent");  

   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zk0xx8d', 'template_4s75s9x', form.current, 'sIO8ZblhEQq7A7TrP')
      .then((result) => {
        console.log(result.text);
        console.log('sent')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
            <div className="h-full w-full absolute bg top-0 topbanz" ref={el => { logoitem = el }} >
        <div className="half">

        </div>
        <div className="half2">

        </div>
    </div>
      <div className="layout ">
      <ToastContainer />
        <div className="md:hidden">
          <div className="absolute top-gun top-4 left-5" >
       <Link to="/" className="flex space-x-2 items-center h-fit linker">
          <AiFillBackward 
          className="home-link" 
          style={{fontSize:"35px", color:"white", cursor: "pointer"}} />
          <p className="word-link text-white">Home</p>
          </Link>  
      </div>
      <form className='grid place-items-center'>
      <h1 className='text-white letters' >Contact Form</h1>
      <input type="text" placeholder='Type your name' className='m-4 p-2 rounded-lg w-input outline-none'/>
      <input type="text" placeholder='Type your email' className='m-4 p-2 rounded-lg w-input outline-none' />
      <input type="text" placeholder='Leave a message' className='m-4 rounded-lg w-input h-input outline-none' />
      <button className='w-btn h-fit p-2 btn text-white rounded-lg'>Submit</button> 
     </form>
      </div>  
      <div className="page1 grid justify-center">
        <div className="w-full px-10 mt-4 flex space-x-8 ">
        <a href="https://wa.me/message/DSUEJVSTOGCFJ1">
        <BsWhatsapp style={{fontSize:"30px", color:"#0FA958", cursor: "pointer"}}/>
        </a> 
       <a href="https://www.linkedin.com/in/danie-usen-3794ba232">
        <BsLinkedin style={{fontSize:"30px", color:"#407BFF", cursor: "pointer"}}/>
        </a>
       <a href="https://github.com/usen-bet?tab=repositories">
        <BsGithub style={{fontSize:"30px", cursor: "pointer"}}/>
        </a>
       <a href="mailto:usenbetse@gmail.com">
        <FcGoogle style={{fontSize:"30px", cursor: "pointer"}}/>
        </a> 
        <Link to="/" className="flex space-x-2 items-center h-fit linker">
          <AiFillBackward 
          className="home-link" 
          style={{fontSize:"30px", color:"#407BFF", cursor: "pointer"}} />
          <p className="word-link">Home</p>
          </Link>
        </div>  
      <img src="./Images/contact.png"  /> 
      </div>
     <div className="page2 grid place-items-center">
     <form className='grid place-items-center' ref={form} onSubmit={sendEmail}>
          <h1 className='text-white letters' >Contact Form</h1>
     <input type="text" placeholder='Type your name' name='user_name' required className=' m-4 p-2 rounded-lg w-input outline-none '/>
     <input type="text" placeholder='Type your email' name='user_email' required className=' m-4 p-2 rounded-lg w-input outline-none ' />
     <input type="text" placeholder='Leave a message' required name='message' className=' m-4 rounded-lg w-input h-input outline-none ' />
     <button className='w-btn h-fit p-2 btn text-white rounded-lg animating' onClick={notify}>Submit</button> 
        </form>
    </div>
    </div>
    </div>
  )
}

export default Contact