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
import "./chat.css"

const Portfolio = () => {
  return (
     <div className="back overflow-y-scroll">
      <div className="w-full h-fit mt-4 ml-4 flex items-center space-x-3">
        <Link to="/projects" className="flex items-center"> <AiFillBackward style={{ fontSize: '40px', color: 'white' }} /> <p className="text-white">Projects</p></Link>
        <Link to="/" className="flex items-center"><AiFillBackward style={{ fontSize: '40px', color: 'white' }} /> <p className="text-white">Home</p></Link>
      </div>
      <h1 className="w-full h-fit text-white text-center text-3xl underline">Chat Application</h1>
      <div className="w-full flex justify-center">
        <a href='https://github.com/usen-bet/Chat-Application.git'
          className='w-btn h-fit p-2 btn text-white rounded-lg m-4 text-center'>View Code</a>
        <a href="https://whatsapp-clone-990eb.web.app/"
          className='w-btn h-fit p-2 btn text-white rounded-lg m-4 text-center'>View site</a>
      </div>
      <div>
      <div  className="img-holder" >
        <img src="./Photos/Portfolio/Dashboard.png" className="img" />
      </div>
     
      <div className="grid place-items-center mt-12">
        <p className="w-onethird text-center text-xl text-white mb-10">
            This project is a my portfolio (you're already in it), the selling point
            of this is the aesthetic and the user friendliness of the site.
            
      </p>
      </div>
      
       <div  className="img-holder" >
        <img src="./Photos/Portfolio/Intro.png" className="img" />
      </div>
      <div className="grid place-items-center mt-12">
      <p className="w-onethird text-center text-xl text-white mb-10">
           this is the intro page as you can see, it has 
            nice photo to go along with the writeup to keep your eyes busy,
            it is a simple but good-looking site, it has no serious functionality
            like the chat application
            but it is one of my toughest designs because of the things i had to learn 
            while doing it
      </p>  
      
      <div  className="img-holder" >
        <img src="./Photos/Portfolio/Projects.png" className="img" />
      </div>    
      <div className="grid place-items-center mt-12">
        <p className="w-onethird text-center text-xl text-white mb-10">
        A page that shows the projects i have done with the corresponding languages
      </p>
      </div>
      
      </div>      
      </div>
    </div>
  )
}

export default Portfolio