import "./chat.css"
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

const Netclone = () => {
  return (
<div className="back overflow-y-scroll">
      <div className="w-full h-fit mt-4 ml-4 flex items-center space-x-3">
        <Link to="/projects" className="flex items-center"> <AiFillBackward style={{ fontSize: '40px', color: 'white' }} /> <p className="text-white">Projects</p></Link>
        <Link to="/" className="flex items-center"><AiFillBackward style={{ fontSize: '40px', color: 'white' }} /> <p className="text-white">Home</p></Link>
      </div>
      <h1 className="w-full h-fit text-white text-center text-3xl underline">Netflix Clone</h1>
      <div className="w-full flex justify-center">
        <a href='https://github.com/usen-bet/Net-clone.git'
          className='w-btn h-fit p-2 btn text-white rounded-lg m-4 text-center'>View Code</a>
        <a href="https://net-clone-tau.vercel.app/"
          className='w-btn h-fit p-2 btn text-white rounded-lg m-4 text-center'>View site</a>
      </div>
      <div>
      <div  className="img-holder" >
        <img src="./Photos/Netflix-clone/Screenshot 2022-08-11 145611.png" className="img" />
      </div>
     
      <div className="grid place-items-center mt-12">
        <p className="w-onethird text-center text-xl text-white mb-10">
        This was my first ever go at something that has been
          produced before, the aim was to test my css skills mainly
          and has no very difficult functionality
      </p>
      </div>
      
       <div  className="img-holder" >
        <img src="./Photos/Netflix-clone/netflix-dashboard.png" className="img" />
      </div>
      <div className="grid place-items-center mt-12">
      <p className="w-onethird text-center text-xl text-white mb-10">
       The movies on display came from an API and if you click on any
          of the movies the computer will look for <br /> the trailer of said movie 
          and play it 
      </p>  
      
      <div  className="img-holder" >
        <img src="./Photos/Netflix-clone/dash2.png" className="img" />
      </div>    
      <div className="grid place-items-center mt-12">
        <p className="w-onethird text-center text-xl text-white mb-10">
       Another trait you may find interesting is the dashboard
          picture and story changes on reload and the background of the
          navbar becomes transparent when you scroll to the picture area
          but becomes dark when the scroll has passed that area
      </p>
      </div>
      
      </div>      
      </div>
    </div>
  )
}

export default Netclone