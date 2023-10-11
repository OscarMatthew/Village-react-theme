import React, {useState, useEffect} from 'react';
import './Header.css';
import Contact from './Contact';
import Location from './Location';
import Navmenu from './Navmenu';
import {Link} from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
// import ClickAwayListener from 'react-click-away-listener';

function Header() { 
  const [click, setClick] = useState(false);
  const [button, setMenu] = useState(true);

  const menuClick = () => setClick(!click);
  // const menuClickAway = () => setClick(false);

  const showMenu = () => {
    if(window.innerWidth > 992) {
      setMenu(false);
    }
    else {
      setMenu(true);
    }
  };

  useEffect(() => {
    showMenu();
  },[]);

  window.addEventListener('resize', showMenu);
  // const searchClick = () => setClick(!click);
  return (
    <>
      <header className="main-header">
        <div className="primary-header">
          <div className="navigation container">
					  <Contact/>
            <div className="logo">
              <Link to="/">
                <img className="light-logo" alt="Image Alt Text Here" src="images/gav-church-light.png"/>
                <img className="dark-logo" alt="Image Alt Text Here" src="images/gav-church-dark.png"/>
                {/* <!-- <h1>Gaon Church</h1> --> */}
              </Link> 
            </div>
            {/* <!-- End-Logo --> */}
            {/* <!--Mobile Nav Icon(Hamburger Icon)--> */}
            {button && <div className="mob-featured-btn">
              <button className="mob-search-btn">
                <i className="icon-search"></i>
              </button>
              <button className={click ? 'menu-icon js-active':'menu-icon'} onClick={menuClick}>
                <span className="icon-bar-1"></span>
                <span className="icon-bar-2"></span>
              </button>
            </div>}
            {/* <!--End Mobile Nav Icon--> */}
            {/* <!--Mobile-Nav--> */}
            <nav className={click ? 'primary-nav-mobile js-active':'primary-nav-mobile'}>
              <Navmenu/>
              <div className="mob-featured-nav">
                <Contact/>
                <Location/>
              </div>
            </nav>
            {/* <!--End Mobile-Nav--> */}
            {/* <!--Mobile Search--> */}
            <div className="mob-search">
              <form role="search-form" method="get" className="mob-search-form" action="website url>">
                <i className="icon-search"></i>
                <input id="fullBar" type="search" name="s" placeholder="START TYPING" autocomplete="off" autofocus=""/>
              </form>
              <button className="mob-search-close-btn">
                <i className="icon-close"></i>
              </button>
            </div>
            {/* <!--End Mobile Search--> */}
            <Location/>
          </div>
        </div>	
			  <div className="secondary-header container">
          {/* <!--Desktop-Navigation--> */}
          <nav className="primary-nav-desktop">
            <Navmenu/>
					  {/* <!--Desktop Search--> */}
            <div className="search">
              <form role="desk-search-form" method="get" className="search-form" action="website url>">
                <button>
                  <i className="icon-search"></i>
                </button>
                <input id="fullBar" type="search" name="s" placeholder="START TYPING" autocomplete="off" autofocus=""/>
              </form>
              <button className="search-close-btn">
                <i className="icon-search"></i>
                <span>Search</span>
                <i className="icon-close"></i>
              </button>
            </div>
				  	{/* <!--End Desktop Search--> */}
				  </nav>
			  	{/* <!--End Desktop Navigation--> */}
			  </div>	
		  </header>
    </>
  )
}

export default Header
