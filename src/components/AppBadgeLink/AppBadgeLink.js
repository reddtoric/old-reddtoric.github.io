import React from 'react';


import './AppBadgeLink.sass';

export default ({type, href}) => {
  let badge = null;
  let legal = null;
  
  if (type === "playstore"){
    badge = <img 
            className="google-play-badge" 
            alt="Get it on Google Play"
            src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
          />;
    legal = "Google Play and the Google Play logo are trademarks of Google LLC.";
  }
  else if (type === "appstore"){
    badge = <img 
            className="apple-app-badge"
            alt="Download on the App Store"
            src=""
          />
  }
  
  return (
    <React.Fragment>
      <a 
        target="_blank"
        rel="noopener noreferrer" 
        href={href}
      >
        {badge}
      </a>
      <span className="legal-attribution">{legal}</span>
    </React.Fragment>
)
}