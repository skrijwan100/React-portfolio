
import './App.css';
import Home from './component/Home';
import Navebar from './component/Navebar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Project from './component/Project';
import Skill from './component/Skill';
import Contact from './component/Contact';
import Loader from './component/Loder';
import { useState } from 'react';
import "./media.css"
import Alert from './component/Alert';
import Mobilenav from './component/Mobilenav';
import Certificate from './component/Certificate';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [navhide, setnavhide] = useState(false)
  const [progress, setProgress] = useState(0);
  const [alert, setalert] = useState(null)
  const handleclose = () => {
    setnavhide(true)
  }
  const showclick = () => {
    setnavhide(false)

  }
  const startLoader = () => {
    setProgress(0);
    setIsLoading(true);
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 50);
  };
  const showalert = (title) => {
    setalert({ title: title })
  }
  return (
    <Router>
      <Loader isLoading={isLoading} progress={progress} />
      <Alert alert={alert} />
      <div className='mobilenav-show-hide' style={{position:"fixed",display:"none"}}>

      <Mobilenav startLoader={startLoader}/>
      </div>
      <div style={{ backgroundColor: "#151515",height:"100vh"}}>

        <Navebar startLoader={startLoader} navhide={navhide} handleclose={handleclose} showclick={showclick} />
        <Routes>
          <Route path='/' element={<Home startLoader={startLoader} navhide={navhide} />} />
          <Route path='/project' element={<Project navhide={navhide} />} />
          <Route path='/skill' element={<Skill navhide={navhide}/>} />
          <Route path='/certificate' element={<Certificate/>} />
          <Route path='/contact' element={<Contact navhide={navhide} showalert={showalert} />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
