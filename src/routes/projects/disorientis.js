import React from 'react';

import AppBadgeLink from 'components/AppBadgeLink';

export default () => (
  <main>
    <h1>Disorientis</h1>
    <img className="img" src="https://eddevs.com/imgs/disorientis-banner.png" alt="Disorientis poster" />
    
    <section>
      <h2>Intro</h2>
      <p>Disorientis is a single-player high-score top-down game. Using a rotary controller, you rotate to the direction you want your character to move towards and collect items and power-ups. The challenge is that the mapping of the 360 degree direction changes every few seconds.</p>
      <p>Collect food items for points. Dodge moving cars and bursting fire hydrants. All while using a tricky controller. Your character will randomly change direction and you have to adjust accordingly to move in the direction you want. The game becomes more and more difficult the more points you obtain. Compete for the highest score on the leaderboard against others. </p>
	  <p>
	  Features:
		<ul>
			<li>Challenging and unique game experience</li>
			<li>Challenging and tricky controller/move mechanism</li>
			<li>Interested in trolling a friend? Throw them in the game without an explanation about the controller/move mechanism</li>
			<li>Randomly generated obstacles/map each game</li>
			<li>Low-poly graphics</li>
			<li>Power-ups</li>
			<li>Skins (more to come)</li>
			<li>Local top 10 high score board</li>
			<li>Google Play online leaderboard</li>
		</ul>
	  </p>
    </section>
    
    <section>
      <h3>Available on</h3>
      <AppBadgeLink type="playstore" href="https://play.google.com/store/apps/details?id=com.eddevs.disorientis&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" />
	  <p>
	    Will be available on the Apple App Store in the future.
	  </p>
    </section>
	
	{/*
	<section>
		<h2>Expected Updates</h2>
		<ul>
			<li>Ability to move character when finger leaves controller</li>
		</ul>
	</section>
	*/}
	<section>
		<h2>Devlog</h2>
		<ul>
			<li>
				Ver 2.0 (Dec 25, 2019)
				<ul>
					<li>Free snowman skin!</li>
					<li>New and improved</li>
					<li>Google Play sign in</li>
					<li>Graphics Quality settings</li>
					<li>Controller Settings</li>
				</ul>
			</li>
		</ul>
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
	
	{/*
	<section>
		<h4 id="adsettings">Ad settings</h4>
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
	*/}
  </main>
)