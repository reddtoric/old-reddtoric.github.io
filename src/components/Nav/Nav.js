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
	<div className="nav-align-wrapper">
    <div className="nav-aligner">
      {pages.map(page => {
        if (page.showInNav){
		  if (page.external){
			return (
			  <NavLink
			    key={page.id}
				className="nav-link"
				target="_blank"
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
    </div>
  </nav>
)