import React from 'react';
import '../../App.css';
import '../Archive.css';
import '../Pagination.css';
import Resource from '../Resource';
import Cards from '../Cards';
import Pagination from '../Pagination';

function Sermon() {
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

export default Sermon
