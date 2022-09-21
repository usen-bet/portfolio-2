import {
    BsWhatsapp,
    BsLinkedin,
    BsGithub,
} from "react-icons/bs"
import {
    FcGoogle
} from "react-icons/fc"
import {
    IoMdCloseCircle,
    
} from "react-icons/io"
import {
    AiOutlineClose,
       } from "react-icons/ai"
import "./Style.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import Home from "../Pages/Home"


const Navbar = () => {
    const [tap, setTap] = useState(false)

    const navigate = () => {
        setTap(!tap)
    }

      const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('CV2.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'CV2.pdf';
                alink.click();
            })
        })
    }

  return (
      <div className="flex w-full h-smoke items-center justify-between">
      <div className="grid mt-3 cursor-pointer 
      md:hidden" onClick={() => {navigate()}}>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
      </div>    
      <div className="flex w-fit mr-5 justfy-end md:ml-5">
      <div className="flex  space-x-6 items-center">
      <div className='black'>
        <a href="https://wa.me/message/DSUEJVSTOGCFJ1">
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
      </div>
      </div>
      <div className="hidden w-fit md:flex space-x-7 justify-end mr-10 lg:inline-flex">
      <p onClick={onButtonClick} className="tacked text-lg cursor-pointer">Resume</p> 
      <Link to="/intro" className="animated text-lg">Intro</Link> 
      <Link to="/contact" className="animated text-lg">Contact</Link>
      <Link to="/projects" className="animated text-lg">Projects</Link>
      <Link to="/skills" className="animated text-lg">Skills</Link>
              
      <IoMdCloseCircle className="md:hidden sm:hidden lg:inline-flex" style={{ color: "#407BFF", fontSize:"25px" }}/>
      </div>
      {tap ? (
            <div className="back overflow-y-scroll">
            <div className="w-full h-smoke p-6 cursor-pointer" onClick={() => {navigate()}} >
                <IoMdCloseCircle className="main-anim" style={{ fontSize: "40px", color: 'white', position: "absolute", backgroundColor: '#407BFF' }} />
            </div> 
            <div className="grid place-items-center">
            <Link to="/intro" className="m-10 text-6xl text-white reanimated">Intro</Link>
            <Link to="/projects" className="m-10 text-6xl p-4 text-white reanimated">Projects</Link>     
            <Link to="/contact" className="m-10 text-6xl text-white reanimated">Contact</Link> 
            <Link to="/skills" className="m-10 text-6xl text-white reanimated">Skills</Link> 
            <a  onClick={onButtonClick} className="m-10 text-6xl text-white reanimated">Resume</a> 
            </div>     
            </div>
          ): (
             null
          )}    
      </div>
  )
}

export default Navbar