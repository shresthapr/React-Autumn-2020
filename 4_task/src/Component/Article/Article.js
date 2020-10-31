import React, { Component } from 'react';
import './article.css';
import image from '../Article/bccollege.png';

class Article extends Component {
  state = {
    likes: 0,
  }
  addLikes = () => {
    this.setState({ likes: this.state.likes + 1 });
  }
  render() {
    return (
      <div className='article-container'>

        <img src={image} alt='bc-college'></img>
        <h2 style={{ fontSize: '1rem', padding: '0rem 1rem' }}> Full Stack Web Development Program</h2>
        <p style={{ fontSize: '0.8rem', padding: '0rem 1rem', lineHeight: '1.2rem' }}>Full Stack Web Developer program is designed for adults who want to work as software developers.
        Studying in the program is very practical in comparison to academic studying.
        The studies focus 100% on getting the core skills needed as software developer.
          </p>
        <h6 style={{ fontSize: '0.5rem', padding: '0rem 1rem' }}>  {this.state.likes} people like this article</h6>
        <button>Read more</button>
        <button onClick={this.addLikes}>Like this page!!!</button>


      </div >
    );
  }
}

export default Article;