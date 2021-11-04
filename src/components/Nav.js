import React from 'react';
import Article from './Article';

function Nav({articles}) {
  let revart = articles.slice().reverse();
  return (
    <nav className='Nav'>
      <div>
        <h4>Advertisement</h4>
      </div>
      <div>
      <h4>Featured Posts</h4>
      <div>
        <Article
        title={revart[0].title}
        image={revart[0].image}
        text={revart[0].text}
        />
      </div>
      </div>
    </nav>
  );
}

export default Nav;
