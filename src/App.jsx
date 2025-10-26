import MakeSideBar from './SideBar';
import MapMaker from './Map'
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


// use "routing" to make pages and stuff! :-)

function App() {
  return (
    <BrowserRouter>
      <div className="SideBarContainer">
        {MakeSideBar()}
      </div>
      <div className="MapContainer">
        {MapMaker()}
      </div>
      {/* <Routes>
        <Route path='/projects' element={<MapMaker />}/>
        <Route path="*" element={<div>Not found</div>} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;