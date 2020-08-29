import React, { useState, useEffect } from 'react';
import {Button} from '@material-ui/core';
import './App.css';
import News from './components/News/News';

function App() {
  const [articles, setArticle] = useState([]);
  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=91b9c79c1b6b4aeebc5138c97060b62f';
    fetch(url)
    .then(res => res.json())
    .then(data => setArticle(data.articles));
  },[])
  return (
    <div>
      <Button variant="contained" color="primary">
      Hello World
    </Button>
    <Button variant="contained" color="secondary">
      Secondary
    </Button>
  <h1>Total News: {articles.length}</h1>
  {
    articles.map(article => <News article={article}></News>)
  }
    
    </div>
  );
}

export default App;
