import React from 'react'

function Resource() {
  return (
    <>
      <header class="featured-header">
        <h1>Blogposts</h1>
        <button class="touch-effect browse-dropdown"><span>Browse By</span><i class="icon-chevron-down"></i></button>
        <div class="resources">
          <div>
            <h1>Resourse Type</h1>
            <ul>
              <li><a class="current touch-effect" href="#">Sermons</a></li>
              <li><a class="touch-effect" href="#">Blogposts</a></li>
              <li><a class="touch-effect" href="#">All resource types</a></li>
            </ul>
          </div>
          <div class="index">
            <h1>Index</h1>
            <ul>
              <li>
                <a class="touch-effect" href="#">Scripture</a>
                <ul>
                  <li><a class="touch-effect" href="#">John</a></li>
                  <li><a class="touch-effect" href="#">James</a></li>
                  <li><a class="touch-effect" href="#">Ruth</a></li>
                  <li><a class="touch-effect" href="#">Revelation</a></li>
                </ul>
                <a class="touch-effect" href="#"><span>View All</span><i class="icon-triangle-right"></i></a>
              </li>
              <li>
                <a class="touch-effect" href="#">Authors/Speakers</a>
                <ul>
                  <li><a class="touch-effect" href="#">Brian Barnett</a></li>
                  <li><a class="touch-effect" href="#">Bill Gamble</a></li>
                  <li><a class="touch-effect" href="#">David Stine</a></li>
                  <li><a class="touch-effect" href="#">Jeff Hendry</a></li>
                </ul>
                <a class="touch-effect" href="#"><span>View All</span><i class="icon-triangle-right"></i></a>
              </li>
              <li>
                <a class="touch-effect" href="#">Topic</a>
                <ul>
                  <li><a class="touch-effect" href="#">Fellowship</a></li>
                  <li><a class="touch-effect" href="#">Hermeneutics</a></li>
                  <li><a class="touch-effect" href="#">Faith in Life</a></li>
                  <li><a class="touch-effect" href="#">Sin</a></li>
                </ul>
                <a class="touch-effect" href="#"><span>View All</span><i class="icon-triangle-right"></i></a>
              </li>
              <li>
                <a class="touch-effect" href="#">Series</a>
                <ul>
                  <li><a class="touch-effect" href="#">1 Samuel: God is King</a></li>
                  <li><a class="touch-effect" href="#">Membership Matters</a></li>
                  <li><a class="touch-effect" href="#">Outreach</a></li>
                  <li><a class="touch-effect" href="#">Who is this Christ</a></li>
                </ul>
                <a class="touch-effect" href="#"><span>View All</span><i class="icon-triangle-right"></i></a>
              </li>
              <li>
                <a class="touch-effect" href="#">Dates</a>
                <ul>
                  <li><a class="touch-effect" href="#">2016</a></li>
                  <li><a class="touch-effect" href="#">2017</a></li>
                  <li><a class="touch-effect" href="#">2018</a></li>
                  <li><a class="touch-effect" href="#">2019</a></li>
                </ul>
                <a class="touch-effect" href="#"><span>View All</span><i class="icon-triangle-right"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </header> 
    </>
  )
}

export default Resource
