import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { 
    mdiDotsHorizontal
} from '@mdi/js';

import FancyLink from 'components/FancyLink';

import './ProjectCard.sass';


function ViewMore ({link}) {
  const baseClassName = "project-link";
  
  let className = baseClassName;
  let to = link;
  let onClick = undefined;
  
  //TODO fix next line
  if (!(typeof link != 'undefined' || link === null)){
    className = baseClassName.concat(" project-link-disabled");
    to = "";
    onClick = (e => e.preventDefault());
  }
  
  return (
    <Link 
      className={className} 
      to={to}
      onClick={onClick}
    >
      <Icon className="project-link-icon" path={mdiDotsHorizontal} />
      <span>More</span>
    </Link>
  )
}

export default ({title, links, summary, image}) => {
  const { more, ...others } = links || { undefined };
  
  let extraLinks;
  //TODO fix next line
  if (typeof links != 'undefined' || links === null){
    extraLinks = Object.entries(others).map(tmp => {
      const [ type, props ] = tmp;
      
      return (
        <FancyLink key={type} type={type} newTab={props.newTab} href={props.href} />
      )
    })
  }
  
  return (
    <div className="project-card">
      <div className="project-bg-image" style={{backgroundImage: `url(${image})`}}>
        <h2 className="project-title">{title}</h2>
      </div>
      <div className="project-summary">
        {extraLinks}
        <p>{summary}</p>
      </div>
      <ViewMore link={more} />
    </div>
  )
}