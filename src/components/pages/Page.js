import React from 'react';
import '../Entrycontent.css';
import Enrtycontent from '../Entrycontent';
import Sidebar from '../Sidebar';


function Page() {
  return (
    <>
      <main>
        <section class="single-page-banner grey-background">
          <div class="container background-image-wrapper">
            <img class="background-image" alt="" sizes="" srcset="" src="images/railroad-tracks.jpg"/>
            <span class="article-label">Learn about</span>
            <h1>Our Ministries</h1>
            <div class="color-overlay"></div>
          </div>
        </section>
        <section class="featured-single-page container">
          <div class="page-content entry-content">
            <Enrtycontent/>
          </div>
          <Sidebar/>
        </section>
      </main>
      
    </>
  )
}

export default Page
