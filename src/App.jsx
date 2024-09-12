
import Heroine from "./components/Heroine";
import Navbar from "./components/navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Project";
import Contact from "./components/Contacts";
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";
import Achievements from "./components/Achievemnets";
import CodingProfiles from "./components/CodingProfiles";
const App =() => {
  return (
  <div className="overflow-x-hidden text-neutral-300 antiliased slec selection:bg-cyan-300 selection:text-cyan-900">
    <div className="fixed top-0 -z-10 h-full w-full">
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
    
   <div className="container mx-auto px-8"></div> 
   <Navbar/>
    <Heroine/>
    <About/>
    <Technologies/>
    <Education/>
    <Experience/>

    <Projects/>
    <Hobbies/>
    <Achievements/>
    <CodingProfiles/>
    <Contact/>
  </div>
  );
}; 

export default App;
