import React from 'react';
import Article from './Article';

function Main({page, articles}) {
  return (
    <main>
      {articles.map((object, i) => <Article title={object.title} image={object.image} text={object.text} />)}
    </main>
  );
}

export default Main;
