
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

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
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
  return (
    <Router>
      <Loader  isLoading={isLoading} progress={progress}/>
      <div style={{display:'flex'}}>

    <Navebar startLoader={startLoader}/> 
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/skill' element={<Skill/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
      </div>
    </Router>

  );
}

export default App;
