import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiMenu, mdiClose } from '@mdi/js';


import './Nav.sass';


export function Toggle ({showNav, handleClick}) {
  return (
    <button className="nav-toggle" onClick={handleClick}>
      {showNav ?
        <Icon className="close-icon" path={mdiClose} />
        : <Icon className="menu-icon" path={mdiMenu} /> 
      }
    </button>
  )
}

export default ({showNav, pages, handleClick}) => (
  <nav className={showNav ? "nav-show" : ""}>
    <div className="nav-aligner">
      {pages.map(page => {
        if (page.showInNav){
          return (
            <NavLink 
              key={page.id}
              exact
              className="nav-link" 
              to={page.path}
              activeClassName="active"
              onClick={handleClick}
            >
              <span>
                {page.name}
              </span>
            </NavLink>
          )
        }
        else{
          return null;
        }
      })}
    </div>
  </nav>
)