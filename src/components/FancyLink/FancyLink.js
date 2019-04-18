import React from 'react';
import Icon from '@mdi/react';
import { 
    mdiGithubCircle,
    mdiApplication,
    mdiGamepadVariant,
    mdiDownload,
    mdiGooglePlay,
    mdiApple
} from '@mdi/js';

import './FancyLink.sass';


function Base ({className, newTab, href, title, children}) {
  return (
      <a
        className={"fancy-link" + (className ? ` ${className}` : "")}
        target={newTab ? "_blank" : null}
        rel={newTab? "noopener noreferrer" : null}
        href={href}
        title={title ? title : null}
      >
        {children}
      </a>
    )
}

function Special ({iconPath, text, ...passingProps}) {
  return (
    <Base {...passingProps}>
      <Icon className="fancy-link-icon" path={iconPath} />
      <span className="fancy-link-text">
        {text}
      </span>
    </Base>
  )
}

export default ({type, ...passingProps}) => {
  switch (type) {
    case 'github':
      return (
        <Special 
          className="fancy-link-github"
          iconPath={mdiGithubCircle}
          text="GitHub"
          {...passingProps}
        />
      )
    case 'webapp':
      return (
        <Special
          iconPath={mdiApplication}
          text="Web App"
          {...passingProps}
        />
      )
    case 'webgame':
      return (
        <Special
          iconPath={mdiGamepadVariant}
          text="Play"
          {...passingProps}
        />
      )
    case 'download':
      return (
        <Special
          iconPath={mdiDownload}
          text="Download"
          {...passingProps}
        />
      )
    case 'playstore':
      return (
        <Special
          className="fancy-link-playstore"
          iconPath={mdiGooglePlay}
          text="Play Store"
          {...passingProps}
        />
      )
    case 'appstore':
      return (
        <Special
          className="fancy-link-appstore"
          iconPath={mdiApple}
          text="App Store"
          {...passingProps}
        />
      )
    default:
      return <Base {...passingProps} />;
  }
}