import React from 'react';
import Article from './Article';

function Main({articles}) {
  let revart = articles.slice().reverse();
  return (
    <main className='corefunc Main'>
      {revart.map((object, i) => 
      <Article key={i} title={object.title}
      image={object.image} text={object.text}
      location='main__articles'
      />)}
    </main>
  );
}

export default Main;
