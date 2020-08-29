import React, { useState, useEffect } from 'react';
import {Button} from '@material-ui/core';
import './App.css';
import News from './components/News/News';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Left from './components/News/Left';
import TopNews from './components/Page/TopNews';
import TopNav from './components/Page/TopNav';
import Myroute from './components/Page/Myroute'
import { BrowserRouter } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const [articles, setArticle] = useState([]);
  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=91b9c79c1b6b4aeebc5138c97060b62f';
    fetch(url)
    .then(res => res.json())
    .then(data => setArticle(data.articles));
  },[])
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TopNav></TopNav>
      {/* <BrowserRouter>
      
      <Myroute></Myroute>
      </BrowserRouter> */}
      
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper} style={{paddingRight: 0}}>
          {
            articles.map(article => <Left article={article}></Left>)
          }
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper} style={{paddingLeft: 0,paddingRight: 0}}>
            <TopNews></TopNews>
          {
            articles.map(article => <News article={article}></News>)
          }
          </Paper>
        </Grid>
        <Grid item xs >
        {/* style={{position: '-webkit-sticky',
    position: 'sticky',top:"110px"
  }} */}
          <Paper className={classes.paper} style={{paddingLeft: 0}}>
          {
            articles.map(article => <Left article={article}></Left>)
          }
          </Paper>
        </Grid>
      </Grid>
        
      
      
    
    </div>
  );
}

export default App;
