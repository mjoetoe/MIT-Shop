import React from 'react';

const Article = (props) => {

  return (
    <>
    <div class="c-article">
        <div class="c-article__image">
            <img src={props.afbeelding} alt={props.naam} />
        </div>
        <div class="c-article__info">
            <h1>{props.naam}</h1>
            <p class="c-article__description">{props.beschrijving}</p>
            <h2>&euro; {props.prijs}</h2>
            <button class="c-btn" onClick={() => props.handleDelete(props.article_id)} >Verwijder</button>
        </div>
    </div>
    </>
  );
  
};

export default Article;