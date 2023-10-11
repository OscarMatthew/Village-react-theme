import React from 'react'

function Sidebar() {
  return (
    <>
      <aside class="sidebar">
        <nav class="sidebar-nav">
            <h1>About</h1>
            <ul>
              <li class="touch-effect"><a class="touch-effect" href="#">Who we are</a></li>
              <li class="touch-effect"><a class="touch-effect" href="#">The Gospel</a></li>
              <li class="touch-effect"><a class="touch-effect" href="#">Statement of faith</a></li>
              <li class="touch-effect"><a class="touch-effect" href="#">Leadership</a>
                <ul>
                  <li class="touch-effect"><a class="touch-effect" href="#">Deacans</a></li>
                  <li class="touch-effect"><a class="touch-effect" href="#">Elders</a></li>
                </ul>
              </li>
              <li class="touch-effect"><a class="current touch-effect" href="#">Our Ministries</a></li>
            </ul>
          </nav>
      </aside>
    </>
  )
}

export default Sidebar
