import React from 'react';
import '../../App.css';
import '../Archive.css';
import '../Pagination.css';
import Resource from '../Resource';
import Postcards from '../Postcards';
import Pagination from '../Pagination';

function Posts() {
  return (
    <>
      <main>
			  <section class="featured-container">
          <Resource/>
          <Postcards/>
          <Pagination/>
        </section>
      </main>
    </>
  )
}

export default Posts
