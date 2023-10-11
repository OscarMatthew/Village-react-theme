import React from 'react';
import './Author.css';

function Author() {
  return (
    <>
      <section class="featured-single-author">
        <div>
          <h1>Author</h1>
          <div class="single-author-content">
            <div class="author-image">
              <img alt="" sizes="" srcset="" src="images/avatar-david-stine.jpg"/>
            </div>
            <div class="author-content">
              <span class="article-label">Author of the article</span>
              <h1>David Stine</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit augue sit amet ultrices efficitur. Duis a tincidunt dolor, vitae mattis lacus.</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit augue sit amet ultrices efficitur. Duis a tincidunt dolor, vitae mattis lacus.</p>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Author
