import React from 'react';
import './Socialshare.css';
import ReactDOM from 'react-dom';
import $ from 'jquery';

// function Socialshare() {
//   return (
//     <>
//       <section class="share-posts">
//         <button class="touch-effect share-btn">
//           <span>Share this article</span>
//           <i class="icon-share"></i>
//         </button>
//         <nav class="social-share-posts social-share">
//           <button class="fb-share touch-effect"><i class="icon-facebook1"></i></button>
//           <button onclick="sendMail(); return false" class="email-share touch-effect"><i class="icon-email"></i></button>
//           <button class="twitt-share touch-effect"><i class="icon-twitter"></i></button>
//           <button class="copy-link touch-effect" data-clipboard-target="#input-url">
//             <i class="icon-link"></i>
//             <input id="input-url" class="sr-only" value=""/>
//           </button>
//         </nav>
//       </section>
//     </>
//   )
// }

// export default Socialshare

///////////////////
//Search 
///////////////////

// Mob Search

$(".mob-search-btn").click(function() {
  $(".mob-search").toggleClass("js-active");
  $(".menu-icon").removeClass("js-active");
  $(".primary-nav-mobile").removeClass("js-active");
  $(".main-header").removeClass("js-active");
  //Adds Body so body not move 
  $("html, body").removeClass("js-noscroll");
});

// Close search 
$(".mob-search-close-btn").click(function(){
	//Remove search so jS can change make it disappear
  $(".mob-search").removeClass("js-active");
});
