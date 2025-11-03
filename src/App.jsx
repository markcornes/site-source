import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home, { article_titles } from './Pages/home';
import BikeTripPage from './Pages/bike-trip';
import About from './Pages/about';
import Projects from './Pages/projects'
import Music from './Pages/music'
import MakeSideBar from './SideBar';
import Article from './Pages/home/article';
import SketchComp from './background'

// function ArticlePages(props) {
//   let return_list = [];
//   for(let n in article_titles) {
//     let title = article_titles[n];
//     return_list.push(<Route path={'/' + title} element={<Article title={title}/>}/>);
//   }
// }

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
            <Route path='/Music' element={<Music />}/>
            <Route path="*" element={<div>Not found</div>} />
            {article_titles.map(title => (<Route path={'/' + title} element={<Article title={title}/>}/>))}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;