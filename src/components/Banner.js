import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <>
      <section class="banner background-image-wrapper">
        <img class="background-image" alt="Image Alt Text Here" srcset="" src="images/anthony-intraversato-455600-unsplash.jpg"/>
        <div class="banner-content container">
          <span class="article-label">Helping the people to know Jesus Christ, Grow in Faith</span>
          <h1>Go into the world equipped to serve.</h1>
          <button class="touch-effect">Learn more about us</button>
        </div>
        <div class="featured-banner">
          <div class="banner-featured-slider container">
            <article>
              <span class="article-label">Please Join us</span>
              <p>We Gather on Every Sunday at 9:00 am and on Every Wednesday at 6:00 pm</p>
            </article>
            <article>
              <span class="article-label">Where</span>
              <p>Gaon Church 7892 Marnul Avenue, La Jolla CA 92037</p>
            </article>
            <article>
              <span class="article-label">Connect</span>
              <p>Dive into a community focused on loving God and loving people.</p>
            </article>
          </div>
        </div>
        <div class="banner-gradient"></div>
      </section>
    </>
  )
}

export default Banner
