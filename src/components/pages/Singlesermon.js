import React from 'react';
import '../Archive.css';
import '../Single.css';
import '../Pagination.css';
import Author from '../Author';
import Socialshare from '../Socialshare';
import Singlepagination from '../Singlepagination';
import Entrycontent from '../Entrycontent';

function Singlesermon() {
  return (
    <>
      <main>
        <section class="featured-sermon">
          <div class="featured-single-sermon">
            <h1>Sermon</h1>
            <div class="featured-single-container">
              <div class="featured-sermon-media">
                <div class="sermon-single-mediatype">
                  <div id="watch-content" class="watch-video js-active">
                    <iframe src="https://player.vimeo.com/video/5828862?color=a30248&amp;title=0&amp;byline=0&amp;portrait=0" style={{position: 'absolute', top:'0',left:'0', width:'100%', height:'100%'}}frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
                  </div>
                  <div id="listen-content" class="audio-player">
                    <iframe tabindex="-1" width="100%" height="60" src="https://embed.sermonaudio.com/player/a/21819144382968/?dark=true&amp;mini=true" style={{minWidth: "150px"}} frameborder="0" scrolling="no"></iframe>
                  </div>
                </div>
                <div class="featured-media-tab">
                  <button class="watch-tab js-current touch-effect"><span>Video</span></button>
                  <button class="listen-tab touch-effect"><span>Audio</span></button>
                  <button class="download-sermon download-tab touch-effect">
                    <span>Download</span>
                    <nav class="sermon-download-opt">
                      <a href="#" class="touch-effect">Video/MP4</a>
                      <a href="#" class="touch-effect">Audio/MP3</a>
                      <a href="#">PDF</a>
                    </nav>
                  </button>
                </div>
              </div>
              <div class="featured-sermon-content">
                <div class="archive-content">
                  <span class="article-label">April 14, 2019</span>
                  <h1 class="page-title">What does God Think of Your Worry?</h1>
                  <div class="archive-tags">
                    <span>By:<a href="#">David Stine</a></span>
                    <span>Topic:<a href="#">Salvation is a Gift</a></span>
                    <span>Scripture:<a href="#">Colossians 1:22</a></span>
                    <span>Series:<a href="#">Christ is Supreme Over All</a></span>
                  </div>
                </div>
                <a class="more-btn" href="#">In this Series</a>
              </div>
            </div>
          </div>
        </section>
        <section class="featured-single-page container">
          <div class="page-content entry-content breakout-content">
            <Entrycontent/>
          </div>
        </section>
        <Author/>
        <Socialshare/>
        <Singlepagination/>
      </main> 
    </>
  )
}

export default Singlesermon
