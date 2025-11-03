import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './Pages/home';
import BikeTripPage from './Pages/bike-trip';
import About from './Pages/about';
import Projects from './Pages/projects'
import MakeSideBar from './SideBar';
import SketchComp from './background'


function App() {
  const [isBackground, setBackground] = useState(false);

  return (
    <div>
    {/* <div className="BackgroundContainer">{(isBackground ? <SketchComp /> : "")}</div> */}
    {/* <SketchComp /> */}
      <BrowserRouter>
        <div className="SideBarContainer">
          <MakeSideBar is_Background={isBackground} set_Background={setBackground}/>
        </div>
        <div className="PageContainer">
          <Routes>
            <Route path='/bike-trip' element={<BikeTripPage />}/>
            <Route path='/' element={<Home />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;