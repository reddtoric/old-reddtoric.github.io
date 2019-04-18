import React from 'react';
import Icon from '@mdi/react';

import './IconLink.sass';


export default ({className, href, title, iconPath}) => {
  return (
      <a
        className={(className ? " " + {className} : "")}
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        title={title ? title : null}
      >
        <Icon className="icon-link" path={iconPath} />
      </a>
    )
}