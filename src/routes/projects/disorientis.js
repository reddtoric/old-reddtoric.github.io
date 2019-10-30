import React from 'react';

import AppBadgeLink from 'components/AppBadgeLink';

export default () => (
  <main>
    <h1>Disorientis</h1>
    <img className="img" src="https://eddevs.com/imgs/disorientis-banner.png" alt="Disorientis poster" />
    
    <section>
      <h2>Intro</h2>
      <p>Disorientis is a single-player high-score top-down game. Using a rotary controller, you rotate to the direction you want your character to move towards and collect items and power-ups. The challenge is that the mapping of the 360 degree direction changes every few seconds.</p>
	  <p>
	  Will be available on the Apple App Store in the future.
	  </p>
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
	
	<section>
		<h4 id="#adsettings">Ad settings</h4>
		<p>Admob and Unity Ads were used in the app and these are the settings applied.</p>
		<p>AdMob:
			<ul>
				<li>
					All 200 General Categories are allowed.
				</li>
				<li>
					Under Sensitive Categories:
					<ul>
						<li>
							Allowed: Black Magic, Astrology & Esoteric, Downloadable Utilities, Video Games (Casual & Online), and Weight Loss
						</li>
						<li>
							<b>Blocked:</b> Alcohol, Gambling & Betting (18+), Cosmetic Procedures & Body Modification, Dating, Drugs & Supplements, Get Rich Quick, Politics, References to Sex & Sexuality, Religion, Sensationalism, Sexual & Reproductive Health, Significant Skin Exposure, and Social Casino Games
						</li>
					</ul>
				</li>
				<li>
					Ad content rated G, PG, and Teens are allowed (except blocked categories).
				</li>
			</ul>
		</p>
		<p>Unity Ads:
			<ul>
				<li>
					Allowed Categories: Action, Adventure, Arcade, Board, Card, Educational, Family, Music, Puzzle, Racing, Role playing, Simulation, Sports, Strategy, Trivia, Word, Health and Medicine, Health and Fitness Apps, Food, News and Weather, and Personal Finance
				</li>
				<li>
					<b>Blocked Categories:</b> Alcoholic Beverages, Casino, Contests and Shopping, Dating and Social Media, Law, Government, and Politics, Lottery and Gambling, Religion and Spirituality
				</li>
				<li>
					Does not show ads rated 13+
				</li>
			</ul>
		</p>
	</section>
  </main>
)