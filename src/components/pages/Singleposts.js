import React from 'react';
import '../Archive.css';
import '../Single.css';
import '../Pagination.css';
import Author from '../Author';
import Socialshare from '../Socialshare';
import Singlepagination from '../Singlepagination';
import Entrycontent from '../Entrycontent';

function Singleposts() {
  return (
    <>
      <main>
        <section class="featured-posts grey-background">
          <div class="featured-single-posts background-image-wrapper container">
            <img class="background-image" alt="" sizes="" srcset="" src="images/lightstock_294648_full_corey.jpg"/>
            <div class="featured-posts-content archive-content">
              <span class="article-label">April 14, 2019</span>
              <h1 class="page-title">What does God Think of Your Worry?</h1>
              <div class="archive-tags">
                <span>By:<a href="#">David Stine</a></span>
                <span>Topic:<a href="#">Salvation is a Gift</a></span>
                <span>Scripture:<a href="#">Colossians 1:22</a></span>
                <span>Series:<a href="#">Christ is Supreme Over All</a></span>
              </div>
            </div>
            <div class="color-overlay"></div>
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

export default Singleposts
