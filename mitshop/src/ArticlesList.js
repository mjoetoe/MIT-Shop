import React, { useState, useEffect } from 'react';
import Article from './Article';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('./articles.json')
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = id => {
    setArticles(articles.filter(article => article.article_id !== id));
  };

  return (
    <>
      <h2 class="c-winkelmandje">
        winkelmandje
        
        {articles.map(article => (
          <Article key={article.article_id} {...article} handleDelete={handleDelete} />        
        ))}
      </h2>
    </>
  );
};

export default ArticlesList;