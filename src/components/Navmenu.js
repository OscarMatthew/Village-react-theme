import React from 'react';
import { Link } from 'react-router-dom';
import { Buffer } from 'buffer';
global.Buffer = Buffer;

function Navmenu() {
  return (
    <>
      <ul>
        <li>
          <Link className="current touch-effect" to="/">Home</Link>
        </li>
        <li>
          <Link className="touch-effect" to="/page">About</Link>
          <ul>
            <li>
              <Link className="touch-effect" to="/page">Who we are</Link>
            </li>
            <li>
              <Link className="touch-effect" to="/page">The Gospel</Link>
            </li>
            <li>
              <Link className="touch-effect" to="/page">Statement of faith</Link>
            </li>
            <li>
              <Link className="touch-effect" to="/page">Leadership</Link>
            </li>
            <li>
              <Link className="touch-effect" to="/page">Our Ministries</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link className="touch-effect" to="/">Events</Link>
        </li>
        <li>
          <Link className="touch-effect" to="/post">Blog</Link>
        </li>
        <li>
          <Link className="touch-effect" to="/sermon">Sermons</Link>
        </li>
        <li>
          <Link className="touch-effect" to="/page">I'm New</Link>
          <ul>
            <li>
              <Link className="touch-effect" to="/page">What to expect</Link>
            </li>
            <li>
              <Link className="touch-effect" to="/page">Plan Your Visit</Link>
            </li>
            <li>
              <Link className="touch-effect" to="/page">Service Times &amp; Direction</Link>
              <ul>
                <li>
                  <Link className="touch-effect" to="/page">What to expect</Link>
                </li>
                <li>
                  <Link className="touch-effect" to="/page">Plan Your Visit</Link>
                </li>
                <li>
                  <Link className="touch-effect" to="/page">Service Times &amp; Direction</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul> 
    </>
  )
}

export default Navmenu
