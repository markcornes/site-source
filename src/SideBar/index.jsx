import './index.css'
import { NavLink } from 'react-router-dom';

const PAGES = ['home', 'projects', 'bike-trip', 'music', 'about']
const PAGE_NAME = 'home'

function SideBarItem(item_name, page_name) {
  return (
    <li className="table-item" key={item_name}>
      <NavLink to={'/' + item_name} className={({ isActive, isPending }) => isPending ? "active" : isActive ? "active" : "not-active"}>{item_name.replace('-',' ')}</NavLink>
    </li>
  );
}

function AddSideBarItems() {
  let return_array = [];
  let i = 0;
  for (i=0;i<PAGES.length;i++) {
    return_array.push(SideBarItem(PAGES[i], PAGE_NAME));
  }
  return return_array;
}

function MakeSideBar(props) {

  return (
    <nav>
      <div className="sidebar sidebar-links">
          <AddSideBarItems />
          {/* <button onClick={props.set_Background(!props.is_Background)}>Background</button> */}
      </div>
    </nav>
  );
}

export default MakeSideBar;