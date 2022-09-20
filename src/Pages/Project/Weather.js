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
import {
  Link
} from "react-router-dom"

const Weather = () => {
  return (
    <div className="back overflow-y-scroll">
      <div className="w-full h-fit mt-4 ml-4 flex items-center space-x-3">
        <Link to="/projects" className="flex items-center"> <AiFillBackward style={{ fontSize: '40px', color: 'white' }} /> <p className="text-white">Projects</p></Link>
        <Link to="/" className="flex items-center"><AiFillBackward style={{ fontSize: '40px', color: 'white' }} /> <p className="text-white">Home</p></Link>
      </div>
      <h1 className="w-full h-fit text-white text-center text-3xl underline">Netflix Clone</h1>
      <div className="w-full flex justify-center">
        <a href='https://github.com/usen-bet/weather.git'
          className='w-btn h-fit p-2 btn text-white rounded-lg m-4 text-center'>View Code</a>
        <a href="https://weather-app-bay-omega.vercel.app/Untitled-1.html"
          className='w-btn h-fit p-2 btn text-white rounded-lg m-4 text-center'>View site</a>
      </div>
      <div>
<div  className="img-holder" >
        <img src="./Photos/Weather App/dashboard.png" className="img" />
      </div>
     
      <div className="grid place-items-center mt-12">
        <p className="w-onethird text-center text-xl text-white mb-10">
         This is a project i made with html css and vanilla js 
         i made a webste that tracks your location with permission and gives your
         weather forecast at the moment, the information is gotten 
         from an api.
      </p>
      </div>
      </div>      
      </div>
  )
}

export default Weather