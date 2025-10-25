import MakeSideBar from './SideBar';
import InitMap from './gpx processor'
import MapMaker from './Map'
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


// use "routing" to make pages and stuff! :-)

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {MakeSideBar()}
      </div>
      <Routes>
        <Route path='/projects' element={<MapMaker />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;