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

const Clothingsite = () => {
  return (
    <div className="back overflow-y-scroll">
      <div className="w-full h-fit mt-4 ml-4 flex items-center space-x-3">
        <Link to="/projects" className="flex items-center"> <AiFillBackward style={{ fontSize: '40px', color: 'white' }} /> <p className="text-white">Projects</p></Link>
        <Link to="/" className="flex items-center"><AiFillBackward style={{ fontSize: '40px', color: 'white' }} /> <p className="text-white">Home</p></Link>
      </div>
      <h1 className="w-full h-fit text-white text-center text-3xl underline">Clothing brand site</h1>
      <div className="w-full flex justify-center">
        <a href='https://github.com/usen-bet/clothing-site.git'
          className='w-btn h-fit p-2 btn text-white rounded-lg m-4 text-center'>View Code</a>
        <a href="https://clothing-site-96961.web.app/"
          className='w-btn h-fit p-2 btn text-white rounded-lg m-4 text-center'>View site</a>
      </div>
      <div>
<div  className="img-holder" >
        <img src="./Photos/Cloth-site/dashboard.png" className="img" />
      </div>
     
      <div className="grid place-items-center mt-12">
        <p className="w-onethird text-center text-xl text-white mb-10">
        This was a site that i did as an extra basically, a simple website with a sign in, login and pages for specific 
          clothing, 
      </p>
      </div>
      
      <div  className="img-holder" >
        <img src="./Photos/Cloth-site/login.png" className="img" />
      </div>

      <div className="grid place-items-center mt-12">
      <p className="w-onethird text-center text-xl text-white mb-10">
        The login functionality signs you into the site and also registers that you 
        are online to the firebase backend 
      </p>  
      
      <div  className="img-holder" >
        <img src="./Photos/Cloth-site/Jeans.png" className="img" />
      </div>    
      <div className="grid place-items-center mt-12">
        <p className="w-onethird text-center text-xl text-white mb-10">
       The main design of the site is basic and there was really no difficulty in making the site.
      </p>
      </div>
      </div>      
      </div>
    </div>
  )
}

export default Clothingsite