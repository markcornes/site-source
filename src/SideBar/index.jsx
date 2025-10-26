import './index.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const PAGES = ['home', 'projects', 'music', 'about']
const PAGE_NAME = 'Home' // DON'T LEAVE THIS

function SideBarItem(item_name, page_name) {
  if (item_name==page_name) {
    return (<li className="table-item" key={item_name}><Link to={'/' + item_name}>{item_name}</Link></li>);
  }
  else {
    return (<li className="table-item" key={item_name}><Link to={'/' + item_name}>{item_name}</Link></li>);
  }
}

function AddSideBarItems() {
  let return_array = [];
  let i = 0;
  for (i=0;i<PAGES.length;i++) {
    return_array.push(SideBarItem(PAGES[i], PAGE_NAME));
  }
  return return_array;
}

function MakeSideBar() {
  return (
    <nav>
      <div className="sidebar sidebar-links">
          {AddSideBarItems()}
      </div>
    </nav>
  );
}

export default MakeSideBar;