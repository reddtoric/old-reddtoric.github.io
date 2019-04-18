import React from 'react';

import AppBadgeLink from 'components/AppBadgeLink';

export default () => (
  <main>
    <h1>Disorientis</h1>
    <img className="img" src="https://eddevs.com/imgs/disorientis-banner.png" alt="Disorientis poster" />
    
    <section>
      <h2>Intro</h2>
      <p>Disorientis is a single-player high score arcade game with an unusual control pad and constant random directional changes.</p>
    </section>
    
    <section>
      <h3>Available on</h3>
      <AppBadgeLink type="playstore" href="https://play.google.com/store/apps/details?id=com.eddevs.disorientis&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" />
    </section>
    
    <section>
      <h2>Gameplay</h2>
      <p>Details to come soon.</p>
    </section>
    
    <section>
      <h2>Inspiration</h2>
      <p>Details to come soon.</p>
    </section>
    
    <section>
      <h2>Language, Tools, & Software used</h2>
      <ul>
        <li>
          C#
        </li>
        <li>
          Unity & Unity Scripting API
        </li>
        <li>
          Blender
        </li>
        <li>
          Microsoft Visual Studio
        </li>
        <li>
          Adobe Photoshop & Illustrator
        </li>
        <li>
          Audacity
        </li>
      </ul>
    </section>
  </main>
)