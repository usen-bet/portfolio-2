import "./chat.css"
import {
    AiFillBackward
} from "react-icons/ai"
import { Link } from "react-router-dom"

const Fone = () => {
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
        <a href="https://fone-ent.vercel.app/Front.htm"
          className='w-btn h-fit p-2 btn text-white rounded-lg m-4 text-center'>View site</a>
      </div>
      <div>
      <div  className="img-holder" >
        <img src="./Photos/Fone Network/Capture.PNG" className="img" />
      </div>
     
      <div className="grid place-items-center mt-12">
        <p className="w-onethird text-center text-xl text-white mb-10">
        This was a job i got and a very tasking one because i had been working
        solely with react for a very long time, so going back to raw HTML
        took at while to adjust to, it honestly made me thank goodness for react, 
        i lost sight of the comfort working with react gave me,
        the main reason this project was difficult was
        i was a bit rusty in the javascript 
        area, but that was not going to stop me....ha   
      </p>
      </div>
      
       <div  className="img-holder" >
        <img src="./Photos/Fone Network/Capture2.PNG" className="img" />
      </div>
      <div className="grid place-items-center mt-12">
      <p className="w-onethird text-center text-xl text-white mb-10">
       This was the most difficult part of the project honestly
       making this slider was tasking and i had to do a bit 
       of research an how to do it and i did it separately on a screen to
       make sure i was not just cramming code but i fully understood
       the role that everything played and the logic behind the infinite scroll 
      </p>  
      
      <div  className="img-holder">
        <img src="./Photos/Fone Network/Capture3.PNG" className="img" />
      </div>    
      <div className="grid place-items-center mt-12">
        <p className="w-onethird text-center text-xl text-white mb-10">
       my favorite part of this project is the color of everything, 
       i really liked the mix of colors and all in all this was a good experience  
      </p>
      </div>
      
      </div>      
      </div>
    </div>
  )
}

export default Fone