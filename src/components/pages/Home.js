import React from 'react';
import '../Home.css';
import Banner from '../Banner';

function Home() {
  return (
    <>
      <main>
        <Banner/>
        <section class="welcome">
          <div class="container">
            <header>
              <h1>Why Gaon Church?</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit augue sit amet ultrices efficitur. Duis a tincidunt dolor, vitae mattis lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </header>
            <div class="welcome-content">
              <div class="background-label">
                <span>Christ</span>
                <span>Saves</span>
                <span>Dead</span>
              </div>
              <div class="welcome-posts">
                <article>
                  <div class="background-image-wrapper scale">
                    <img class="background-image" alt="" sizes="" srcset="" src="images/deep-waters.jpg"/>
                  </div>
                  <div class="welcome-topic">
                    <h1>The Gospel</h1>
                    <span>Read More</span>
                  </div>
                  <a class="cover-link" href="#"><span class="sr-only"></span></a>
                </article>
                <article>
                  <div class="background-image-wrapper scale">
                    <img class="background-image" alt="" sizes="" srcset="" src="images/sunshine-forest-trunks.jpg"/>
                  </div>
                  <div class="welcome-topic">
                    <h1>Statement of Faith</h1>
                    <span>Read More</span>
                  </div>
                  <a class="cover-link" href="#"><span class="sr-only"></span></a>
                </article>
                <article>
                  <div class="background-image-wrapper scale">
                    <img class="background-image" alt="" sizes="" srcset="" src="images/lightstock_366465_download_medium_corey_.jpg"/>
                  </div>
                  <div class="welcome-topic">
                    <h1>What to expect</h1>
                    <span>Read More</span>
                  </div>
                  <a class="cover-link" href="#"><span class="sr-only"></span></a>
                </article>
              </div>
              <div class="welcome-visit">
                <span class="article-label">Plan your Visit</span>
                <h1>We are a church that believes in Christ. You are welcome to Visit us.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit augue sit amet ultrices efficitur. Duis a tincidunt dolor, vitae mattis lacus.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="featured-section background-image-wrapper">
          <img class="background-image" alt="" sizes="" srcset="" src="images/series-img.jpg"/>
          <div class="featured-section-content">
            <span class="article-label">Featured Series</span>
            <h1>Evidence and Assurance of Salvation</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit augue sit amet ultrices efficitur. Duis a tincidunt dolor, vitae mattis lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam aliquet elementum iaculis.</p>
            <a class="touch-effect" href="#"><span class="article-label">Watch all Sermons</span><i class="icon-play"></i></a>
          </div>
          <div class="color-overlay"></div>
        </section>
        <section class="featured-author">
          <h1>Twitter</h1>
          <div class="featured-author-content">
            <h1><span>Brian Barnett Tweeted</span></h1>
            <p>Arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta.</p>
            <div class="featured-author-tag">
              <a class="touch-effect">Aug 6, 2019</a>
              <a class="touch-effect" href="#">@brain_barnett</a>
              <a class="touch-effect" href="#"><i class="icon-twitter"></i>Follow</a>
            </div>
          </div>
        </section>
        <section class="featured-instagram">
          <div class="container">
            <div class="featured-instagram-info">
              <h1>Instagram</h1>
              <div class="instagram-logo">
                <img alt="Image Alt Text Here" src="images/gav-church-dark.png"/>
                {/* <!-- <h1>Gaon Church</h1> --> */}
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit augue sit amet ultrices efficitur. Duis a tincidunt dolor, vitae mattis lacus.</p>
              <button class="touch-effect" ><i class="icon-instagram"></i><span>Follow</span></button>
            </div>
            <div class="instagram-images">
              <div class="background-image-wrapper scale">
                <img class="background-image" alt="" sizes="" srcset="" src="images/lightstock_360486_full_corey.jpg"/>
                <a class="cover-link" href="#"><span class="sr-only"></span></a>
              </div>
              <div class="background-image-wrapper scale">
                <img class="background-image" alt="" sizes="" srcset="" src="images/lightstock_9748_full_corey.jpg"/>
                <a class="cover-link" href="#"><span class="sr-only"></span></a>
              </div>
              <div class="background-image-wrapper scale">
                <img class="background-image" alt="" sizes="" srcset="" src="images/lightstock_115092_full_corey.jpg"/>
                <a class="cover-link" href="#"><span class="sr-only"></span></a>
              </div>
              <div class="background-image-wrapper scale">
                <img class="background-image" alt="" sizes="" srcset="" src="images/lightstock_163431_full_corey.jpg"/>
                <a class="cover-link" href="#"><span class="sr-only"></span></a>
              </div>
              <div class="background-image-wrapper scale">
                <img class="background-image" alt="" sizes="" srcset="" src="images/lightstock_201592_full_corey.jpg"/>
                <a class="cover-link" href="#"><span class="sr-only"></span></a>
              </div>
              <div class="background-image-wrapper scale">
                <img class="background-image" alt="" sizes="" srcset="" src="images/lightstock_166543_full_corey.jpg"/>
                <a class="cover-link" href="#"><span class="sr-only"></span></a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
