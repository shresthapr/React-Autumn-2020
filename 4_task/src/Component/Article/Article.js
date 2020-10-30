import React, { Component } from 'react';
import './article.css';
import image from '../Article/bccollege.png';

class Article extends Component {

  render() {
    return (
      <div className='article-container'>

        <img src={image} alt='bc-college'></img>
        <h2 style={{ fontSize: '2rem', padding: '0.1rem 2rem' }}> Full Stack Web Development Program</h2>
        <p style={{ fontSize: '1.2rem', padding: '0.1rem 2rem', lineHeight: '1.8rem' }}>Full Stack Web Developer program is designed for adults who want to work as software developers.
        Studying in the program is very practical in comparison to academic studying.
        The studies focus 100% on getting the core skills needed as software developer.
          </p>
        <h6 style={{ fontSize: '1.2rem', padding: '0.1rem 2rem' }}>  people like this article</h6>
        <button>Read more</button>
        <button>Like this page!!!</button>


      </div >
    );
  }
}

export default Article;