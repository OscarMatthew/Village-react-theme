import React from 'react';
import '../Archive.css';
import '../Pagination.css';
import Resource from '../Resource';
import Cards from '../Cards';
import Pagination from '../Pagination';

function Browse() {
  return (
    <>
      <main>
        <section class="featured-container">
          <Resource/>
          <Cards/>
          <Pagination/>
        </section>
      </main>
    </>
  )
}

export default Browse
