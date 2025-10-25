import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const PAGES = ['home', 'projects', 'music', 'about']
const PAGE_NAME = 'Home' // DON'T LEAVE THIS

function SideBarItem(item_name, page_name) {
  console.log('got to sidebar item');
  if (item_name==page_name) {
    return (<li className="table-item"><Link to={'/' + item_name}>{item_name}</Link></li>);
  }
  else {
    return (<li className="table-item"><Link to={'/' + item_name}>{item_name}</Link></li>);
  }
}

function AddSideBarItems() {
  console.log('got to adding items')
  let return_array = [];
  let i = 0;
  for (i=0;i<PAGES.length;i++) {
    return_array.push(SideBarItem(PAGES[i], PAGE_NAME));
  }
  return return_array;
}

function MakeSideBar() {
  console.log('got to making');
  return (
    <nav>
      <div className="sidebar">
          <ul className="sidebar-links">
            {AddSideBarItems()}
          </ul>
      </div>
    </nav>
  );
}

export default MakeSideBar;