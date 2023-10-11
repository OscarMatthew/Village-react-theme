import React from 'react';
import './Singlepagination.css';

function Singlepagination() {
  return (
    <>
      <section class="posts-pagination">
        <div class="previous touch-effect">
          <div class="background-image-wrapper scale">
            <img class="background-image" alt="" sizes="" srcset="" src="images/lightstock_294648_full_corey.jpg"/>
            <h1 class="line-clamp-2">Fellowship Outside the Four Walls</h1>
            <div class="color-overlay"></div>
          </div>
          <a class="cover-link" href="#"><span class="sr-only"></span></a>
        </div>
        <div class="next touch-effect">
          <div class="background-image-wrapper scale">
            <img class="background-image" alt="" sizes="" srcset="" src="images/lightstock_115092_full_corey.jpg"/>
            <h1 class="line-clamp-2">Casting Aside the Fear of Man</h1>
            <div class="color-overlay"></div>
          </div>
          <a class="cover-link" href="#"><span class="sr-only"></span></a>
        </div>
      </section>
    </>
  )
}

export default Singlepagination
