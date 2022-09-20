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

const Chatapp = () => {
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
        <a href="https://messenger-8025d.web.app"
          className='w-btn h-fit p-2 btn text-white rounded-lg m-4 text-center'>View site</a>
      </div>
      <div>
      <div  className="img-holder" >
        <img src="./Photos/Chat-app-photos/chat-dashboard.png" className="img" />
      </div>
     
      <div className="grid place-items-center mt-12">
        <p className="w-onethird text-center text-xl text-white mb-10">
        This project is a chat appplication that has a login functionality,
        that i used firebase to make and it has storage and database, also
        done with firebase, The hardest part of this project was learning about
        forebase and how it
        works and i used and read about other react related things that i didnt 
        know about in the project 
      </p>
      </div>
      
       <div  className="img-holder" >
        <img src="./Photos/Chat-app-photos/Screenshot 2022-08-11 145258.png" className="img" />
      </div>
      <div className="grid place-items-center mt-12">
      <p className="w-onethird text-center text-xl text-white mb-10">
        The login functionality signs you into the chat and also registers that you 
        are online to the firebase backend which is shown at the side of the chat and 
        will update as "offline" when you log out
      </p>  
      
      <div  className="img-holder" >
        <img src="./Photos/Chat-app-photos/Screenshot 2022-08-11 145501.png" className="img" />
      </div>    
      <div className="grid place-items-center mt-12">
        <p className="w-onethird text-center text-xl text-white mb-10">
        Pictures and chats may be sent from one user to another and the
        chat box clears after send is clicked or enter is tapped
      </p>
      </div>
      
      <div  className="img-holder" >
        <img src="./Photos/Chat-app-photos/profile.png" className="img" />
      </div> 
      <div className="grid place-items-center mt-12">
        <p className="w-onethird text-center text-xl text-white mb-10">
        It has a profile component that can change and update the firebase when
        the picture is changed
          and also delete the picture from the database
      </p>
      </div>
      
      </div>      
      </div>
    </div>
  )
}

export default Chatapp