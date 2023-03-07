import {
  AiFillHtml5,
  AiFillGithub
} from "react-icons/ai"
import {
  FaCss3,
  FaReact,

} from "react-icons/fa"
import {
  IoLogoJavascript
  
} from "react-icons/io"
import {
  SiTailwindcss,
  SiFirebase,
  SiFigma,
  SiJavascript
} from "react-icons/si"
import {
    AiFillBackward
} from "react-icons/ai"
import { Link } from "react-router-dom"
import {TweenMax, Power3} from 'gsap'
import {useRef, useEffect} from 'react' 


const Projects = () => {
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

    </div>
      <div className='back scroll'>
      <Link to="/">
      <div className="flex items-center mt-3 ml-10 linker">
        <AiFillBackward className="home-link" 
        style={{ fontSize: "40px", color: "white", cursor: "pointer" }} />
        <p className="text-white word-link">
          Go Home
        </p>
      </div>
      </Link>
   <h1 className='flex justify-center m-6 text-white letters text-center' >PROJECTS</h1>
   <div className='grid pro place-items-center'>
        <div>
          <p className='text-center text-2xl text-white'>
            Project 1
          </p>
          <p className='text-center text-white'>
            Chat Application
          </p>
          <div className="width">
          <Link to="/chatapp" className="h-input w-input bg-white rounded-full mb-14 mt-5 cursor-pointer anime">
          </Link>
          </div> 
          {/* icons */}
          <div className="flex -mt-10 mb-5 space-x-4 justify-center">
            <SiFirebase style={{ fontSize: "25px", color: "white" }} />
            <FaCss3 style={{ fontSize: "25px", color: "white" }} />
            <FaReact style={{ fontSize: "25px", color: "white" }} />
            <AiFillHtml5 style={{ fontSize: "25px", color: "white" }} />
          </div>
        </div>


    <div> 
      <p className='text-center text-2xl text-white'>
        Project 2
          </p>
          <p className='text-center text-white'>
            Netflix Dashboard clone
          </p>
          <div className="width">
          <Link to="/netclone" className="h-input w-input bg-white rounded-full mb-14 mt-5 cursor-pointer anime">
          </Link>
          </div> 
          {/* icons */}
          <div className="flex -mt-10 mb-5 space-x-4 justify-center">
          <SiFirebase style={{ fontSize: "25px", color: "white" }} />
            <FaCss3 style={{ fontSize: "25px", color: "white" }} />
            <FaReact style={{ fontSize: "25px", color: "white" }} />
            <AiFillHtml5 style={{ fontSize: "25px", color: "white" }} />
          </div>
    </div>
    
        
    <div>
       <p className='text-center text-2xl text-white'>
        Project 3
        </p>
         <p className='text-center text-white'>
          My Portfolio
    </p> 
    <div className="width">
      <Link to="/portfolio" className="h-input w-input bg-white rounded-full mb-14 mt-5 cursor-pointer anime">
    </Link>
          </div>
          {/* icons */}
    <div className="flex -mt-10 mb-5 space-x-4 justify-center">
            <FaCss3 style={{ fontSize: "25px", color: "white" }} />
            <FaReact style={{ fontSize: "25px", color: "white" }} />
            <AiFillHtml5 style={{ fontSize: "25px", color: "white" }} />
            <SiTailwindcss style={{ fontSize: "25px", color: "white" }} />
            <SiFigma style={{ fontSize: "25px", color: "white" }} />
      </div>
      
      </div>
      
        
    <div>
       <p className='text-center text-2xl text-white'>
        Project 4
        </p>
         <p className='text-center text-white'>
          Weather App
    </p> 
    <div className="width">
      <Link to="/weather" className="h-input w-input bg-white rounded-full mb-14 mt-5 cursor-pointer anime">

    </Link>
          </div>
          {/* icons */}
    <div className="flex -mt-10 mb-5 space-x-4 justify-center">
            <FaCss3 style={{ fontSize: "25px", color: "white" }} />
            <AiFillHtml5 style={{ fontSize: "25px", color: "white" }} />
            <IoLogoJavascript style={{ fontSize: "25px", color: "white" }} />
      </div>
    </div>
        

    <div> 
      <p className='text-center text-2xl text-white'>
        Project 5
        </p> 
        <p className='text-center text-white'>
          Clothing Site
    </p> 
    <div className="width">
      <Link to="/clothingsite" className="h-input w-input bg-white rounded-full mb-14 mt-5 cursor-pointer anime">

    </Link>
    </div>
    {/* icons */}
    <div className="flex -mt-10 mb-5 space-x-4 justify-center">
            <SiFirebase style={{ fontSize: "25px", color: "white" }} />
            <FaCss3 style={{ fontSize: "25px", color: "white" }} />
            <FaReact style={{ fontSize: "25px", color: "white" }} />
            <AiFillHtml5 style={{ fontSize: "25px", color: "white" }} />  
            <SiTailwindcss style={{ fontSize: "25px", color: "white" }} />
      </div>
     </div>
     
        
    <div> 
      <p className='text-center text-2xl text-white'>
        Project 6
        </p> 
        <p className='text-center text-white'>
        Fone Network Company
    </p> 
    <div className="width">
      <Link to="/Fone" className="h-input w-input bg-white rounded-full mb-14 mt-5 cursor-pointer anime">

    </Link>
    </div>
    {/* icons */}
    <div className="flex -mt-10 mb-5 space-x-4 justify-center">
            <FaCss3 style={{ fontSize: "25px", color: "white" }} />
            <AiFillHtml5 style={{ fontSize: "25px", color: "white" }} />
            <IoLogoJavascript style={{ fontSize: "25px", color: "white" }} />
      </div>
      
      </div>
   </div>
    </div>
</div>
  )
}

export default Projects