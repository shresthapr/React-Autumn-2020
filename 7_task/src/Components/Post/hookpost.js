import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = "http://localhost:3001/posts";
const Hookpost = () => {
  const [title, setTitle] = useState('Hello World!')
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({
    title: '',
    img: '',
    desc: '',
    author: ''
  })
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    axios.get(API).then((response) => setPosts(response.data));
  }, []);

  const changeTitleHandler = () => {
    let newTitle = prompt("What should be the next title?");
    setTitle(newTitle);
  };


  const changevalueHandler = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  }

  const addPosthandler = (e) => {
    setIsLoading(true);
    e.preventDefault();
    axios.post(API, post)
      .then(() => {
        return axios.get(API);
      })
      .then((response) => setPosts(response.data))
      .then(() => setIsLoading(false));
  }


  return <div>
    <h1 onClick={changeTitleHandler}>{title}</h1>
    <div className="posts">
      {posts.map((p) =>
        (<div className="post" key={p.id}>
          <img src={p.img} height="200px" width="500px" alt={p.author} />
          <h2>{p.title}</h2>
          <p>{p.desc}</p>
          <p>{p.author}</p>
        </div>
        ))}
    </div>
    <form onSubmit={addPosthandler}>
      <input type="text" name="id" placeholder="id" onChange={changevalueHandler} />
      <input type="text" name="title" placeholder="title" onChange={changevalueHandler} />
      <input type="text" name="author" placeholder="author" onChange={changevalueHandler} />
      <input type="text" name="desc" placeholder="desc" onChange={changevalueHandler} />

      <button type="submit">Send</button>
    </form>
  </div >
};

export default Hookpost;