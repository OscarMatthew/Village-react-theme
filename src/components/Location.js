import React from 'react';
import { Link } from 'react-router-dom';

function Location() {
  return (
    <>
      <Link class="featured-direction touch-effect" to="/"><i class="icon-location"></i><span>Get Directions</span></Link>
      
    </>
  )
}

export default Location
