import React, {useState, useEffect} from 'react';
import Icon from "./Icon";
import './Socialshare.css';
import $ from 'jquery';


function Socialshare() {
  const [click, setClick] = useState(false);
  const shareClick = () => setClick(!click);

  return (
    <>
      <section className="share-posts">
        <button className={click ? 'touch-effect share-btn js-active':'touch-effect share-btn'} onClick={shareClick}>
          <span>Share this article</span>
          <Icon icon="share" />
        </button>
        <nav className={click ? 'social-share-posts social-share js-active':'social-share-posts social-share'}>
          <button className="fb-share touch-effect"><Icon icon="facebook1" /></button>
          <button onclick="sendMail(); return false" className="email-share touch-effect"><Icon icon="email" /></button>
          <button className="twitt-share touch-effect"><Icon icon="twitter" /></button>
          <button className="copy-link touch-effect" data-clipboard-target="#input-url">
            <Icon icon="link" />
            <input id="input-url" className="sr-only" value=""/>
          </button>
        </nav>
      </section>
    </>
  )
}

export default Socialshare
