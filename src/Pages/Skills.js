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

const Skills = () => {
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
    <div>
    <div className="h-full w-full absolute bg top-0 topbanz back grid place-items-center" ref={el => { logoitem = el }} >
    <div className="w-onethird breadth h-half m-auto rounded-lg"></div> 
    </div>
    </div>
      <div>
    <div className='back '>
            <Link to="/">
      <div className="flex items-center mt-3 ml-10 linker">
        <AiFillBackward className="home-link" 
        style={{ fontSize: "40px", color: "white", cursor: "pointer" }} 
        />
        <p className="text-white word-link">
          Go Home
        </p>
      </div>
      </Link>
        <p className='flex justify-center m-6 text-white letters text-center underline mb-32' >Skills</p>
          <h1 className="w-full flex justify-center text-white -mt-10">
            Here are the frameworks/languages i can use</h1>
      <div className="w-onethird breadth h-half m-auto rounded-lg mt-7">
        <div className="text-center grid place-items-center ">
          <p>HTML</p>
          <AiFillHtml5 style={{ fontSize: "25px"}} />
        </div>
          <div className="text-center grid place-items-center">
            <p>CSS</p>
          <FaCss3  style={{ fontSize: "25px"}} />
        </div>
          <div className="text-center grid place-items-center">
            <p>Javascript</p>
          <IoLogoJavascript  style={{ fontSize: "25px"}} />
          </div>
          <div className="text-center grid place-items-center">
            <p>React.js</p>
            <FaReact  style={{ fontSize: "25px"}} />
          </div>
           <div className="text-center grid place-items-center">
            <p>Tailwind css</p>
          <SiTailwindcss  style={{ fontSize: "25px"}} />
          </div>
          <div className="text-center grid place-items-center">
            <p>Firebase</p>
           <SiFirebase  style={{ fontSize: "25px"}} /> 
          </div>
          <div className="text-center grid place-items-center">
            <p>Figma</p>
          <SiFigma  style={{ fontSize: "25px"}} />
          </div>
          <div className="text-center grid place-items-center">
            <p>Github</p>
          <AiFillGithub style={{ fontSize: "25px"}} />
          </div>        
      </div>  
      </div>
      </div>
    </div>
  )
}

export default Skills