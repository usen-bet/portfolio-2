import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { Helmet } from 'react-helmet'
import Intro from "./Pages/Intro"
import Skills from "./Pages/Skills"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import Chatapp from "./Pages/Project/Chatapp"
import Clothingsite from './Pages/Project/Clothingsite'
import Comingsoon from './Pages/Project/Comingsoon'
import Fone from "./Pages/Project/Fone";
import Weather from './Pages/Project/Weather'
import Netclone from './Pages/Project/Netclone'
import Portfolio from './Pages/Project/Portfolio'
import Animate from "./Animate";
import { AnimatePresence } from "framer-motion";
import "./App.css"

function App() {
  const location = useLocation()
  return (
    <div className="">
    <Helmet>
                <meta charSet="utf-8" />
                <title>My Portfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
        <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chatapp" element={<Chatapp />} />
        <Route path="/clothingsite" element={<Clothingsite />} />
        <Route path="/comingsoon" element={<Comingsoon />} />
        <Route path="/netclone" element={<Netclone />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/Fone" element={<Fone/> } />
        </Routes>
        </AnimatePresence>
 </div>
  );
}

export default App;
