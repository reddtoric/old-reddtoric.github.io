import React from 'react';
import { 
  mdiLinkedinBox,
  mdiGithubCircle,
  mdiStackOverflow
} from '@mdi/js';
import { Link } from 'react-router-dom';

import IconLink from 'components/IconLink';
import AppBadgeLink from 'components/AppBadgeLink';


export default () => (
  <main>
    <section className="" style={{/*maxWidth: "768px", margin: "auto"*/}}>
      <h1 className="hidden">About</h1>
      
      <p>
        Hi there! I'm Edward. Graduated from the University of Illinois at Chicago with a BS in Computer Science. <b>I am looking for opportunities in software development.</b>
      </p>
      <p>
        A good puzzle and challenge is what interests me. I learned how to solve the Rubik's cube and several puzzles alike back in 6<sup>th</sup> grade. And around highschool, I learned how to ride a unicycle in about 3 weeks.
      </p>
      <p>
        Do you like a challenge yourself? Check out my quirky mobile game called Disorientis. It is currently only offered on Android. <Link to="/projects/disorientis">Read more...</Link>
      </p>
	  <h3>Disorientis</h3>
      <AppBadgeLink type="playstore" href="https://play.google.com/store/apps/details?id=com.eddevs.disorientis&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" />
      
    </section>
    <section>
      <h2>Let's Connect</h2>
      <IconLink iconPath={mdiLinkedinBox} title="LinkedIn profile" href="https://www.linkedin.com/in/edward-hughes/" />
      <IconLink iconPath={mdiGithubCircle} title="GitHub profile" href="https://github.com/reddtoric" />
      <IconLink iconPath={mdiStackOverflow} title="Stack Overflow profile" href="https://stackoverflow.com/users/6546317/reddtoric" />
    </section>
  </main>
)
