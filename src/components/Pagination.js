import React from 'react'

function Postpagination() {
  return (
    <>
      <nav class="pagination">
        <a class="prev" href="#"><i class="icon-chevron-left"></i></a>
        <a href="">1</a>
        <a href="">2</a>
        <span>...</span>
        <a class="current" href="">11</a>
        <a href="">12</a>
        <a class="next" href="#"><i class="icon-chevron-right"></i></a>
      </nav>
    </>
  )
}

export default Postpagination
