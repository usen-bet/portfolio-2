import "./Style.css"
import Navbar from "../Components/Navbar"
import Portfolio from './Project/Portfolio'
import Animate from "../Animate"


const Home = () => {
  return (
    <Animate>
    <div>
      <Navbar />
  <div className="flex items-center lg:justify-start screen">
  <div className="hidden seen">
    <img src="./Images/bro.png" />
  </div>
  <div className="w-fit length items-center justify-start flex ml-10 ">
    <div className="">
    <div className="flex space-x-1">
      <p className="text letters">
      Hello
      </p> 
      <p className="letters">there, I'm</p>
      </div> 
      <div className=" -mt-12 md:-mt-16 -ml-2 ">
      <p className="words">
        Betse
      </p>
      <p className="words unseen -mt-20 ">
       Usen
      </p>
      <p className="hidden seens words -mt-20">
        Usenekong
      </p>
      </div>
      <div className="flex space-x-1 -mt-10 md:-mt-14">
        <p className="f letters">and i make </p>
        <p className="text fletters"> websites...</p>
          </div>
        <p className="fletters">i'd love to work with you</p>
    </div>
    </div>
 </div>
      </div>
  </Animate>    
  )
}

export default Home
