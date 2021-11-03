import React from 'react';
import Article from './Article';

function Main({articles}) {
  return (
    <main className='corefunc Main'>
      {articles.map((object, i) => <Article key={i} title={object.title} image={object.image} text={object.text} />)}
    </main>
  );
}

export default Main;
