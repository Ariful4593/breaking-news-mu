import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    borderBottom: "1px solid lightgray",
    marginBottom: "10px"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));
const Left = (props) => {
    const classes = useStyles();
  const theme = useTheme();
    const {title, description,urlToImage } = props.article;
  return (
    <Card className={classes.root}>
        <CardMedia
        className={classes.cover}
        image={urlToImage}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="small" variant="small">
            <a href="#"><strong>{title.slice(0,30)}</strong></a>
          </Typography>
          {/* <Typography variant="subtitle1" color="textSecondary">
            {description.slice(0,10)}
          </Typography> */}
        </CardContent>
        
      </div>
      
    </Card>
  );
};

export default Left;