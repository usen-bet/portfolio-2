import { Link } from "react-router-dom"
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
import Transition from "./Transition"
import {TweenMax, Power3} from 'gsap'
import {useRef, useEffect} from 'react' 

const Intro = () => {
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

  return (
    <div>
      <div className="h-full w-full absolute bg top-0 topbanz" ref={el => { logoitem = el }} >
        <div className="half">

        </div>
        <div className="half2">

        </div>
    </div>
      <div className="layout" >
        <div className="absolute top-gun top-4 left-5" >
       <Link to="/" className="flex space-x-2 items-center h-fit linker">
          <AiFillBackward 
          className="home-link" 
          style={{fontSize:"35px", color:"white", cursor: "pointer"}} />
          <p className="word-link text-white">Home</p>
          </Link>  
      </div>
      <div className="md:hidden flex items-center justify-center flex-col">
      <p className="text-center header text-white">Introduction</p> 
      <p className="text-center write text-white">
      My name is Betse, i am a <br />
      self-taught front-end dev, i have a passion <br />
      for creating quality sites with <br />
      optimal code and i would love to work with <br />
      you <br />
      ...   
     </p>
      </div>  
      <div className="page1 flex items-center justify-center ">
        
      <div className="block" >
         <div className=" grid ">
        <div className="absolute top-0 ml-6 mt-4 flex space-x-8 w-full">
       <div className='black'>
        <a href="https://wa.me/message/DSUEJVSTOGCFJ1" >
        <BsWhatsapp style={{fontSize:"30px", color:"#0FA958", cursor: "pointer"}}/>
        </a>
        </div> 
        <div className='black'>
            <a href="https://www.linkedin.com/in/danie-usen-3794ba232">
        <BsLinkedin style={{fontSize:"30px", color:"#407BFF", cursor: "pointer"}}/>
        </a>
        </div>
       <div className='blue'>
        <a href="https://github.com/usen-bet?tab=repositories">
        <BsGithub style={{fontSize:"30px", cursor: "pointer"}}/>
        </a>
       </div>
       <div className='blue'>
        <a href="mailto:usenbetse@gmail.com">
        <FcGoogle style={{fontSize:"30px", cursor: "pointer"}}/>
        </a> 
       </div> 
        <Link to="/" className="flex space-x-2 items-center h-fit p-2 linker">
          <AiFillBackward className="home-link" 
          style={{fontSize:"30px", color:"#407BFF", cursor: "pointer"}} />
          <p className="word-link">Home</p>
          </Link>
        </div>
        <img src="./Images/intro.png"  />
          </div>
          
      </div>
    </div>
     <div className="page2 flex items-center justify-center">
     <div>
      <p className="text-center header text-white">Introduction</p> 
      <p className="text-center write text-white">
      My name is Betse, i am a <br />
      self-taught front-end dev, i have a passion <br />
      for creating quality sites with <br />
      optimal code and i would love to work with <br />
      you <br />
      ...   
     </p>
     </div>
     </div>
      </div>
      </div>
      )
}

export default Intro