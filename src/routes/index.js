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
        Hi there! My name is Edward. Graduated from University of Illinois at Chicago with a BS in Computer Science. <b>I am looking for opportunities in software development.</b>
      </p>
      <p>
        I love a good puzzle and challenge. Learned how to solve the Rubik's cube and several puzzles alike back in 6<sup>th</sup> grade. Learned how to ride a unicycle in less than 3 weeks.
      </p>
      <p>
        I created a wacky android game called Disorientis. I'm working on version 2 which will look and perform better. <Link to="/projects/disorientis">Read more...</Link>
      </p>
      <AppBadgeLink type="playstore" href="https://play.google.com/store/apps/details?id=com.eddevs.disorientis&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" />
      
    </section>
    <section>
      <h2>Let's Connect</h2>
      <IconLink iconPath={mdiLinkedinBox} title="LinkedIn profile" href="https://www.linkedin.com/in/edward-hughes/" />
      <IconLink iconPath={mdiGithubCircle} title="GitHub profile" href="https://github.com/reddtoric" />
      <IconLink iconPath={mdiStackOverflow} title="Stack Overflow profile" href="https://stackoverflow.com/users/6546317/reddtoric" />
    </section>
    {/*<section>
      <h2>Languages & Technologies</h2>
      
    </section>*/}
  </main>
)
