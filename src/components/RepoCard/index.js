import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom"

const useStyles = makeStyles({
  root: {
    marginTop: "10px",
  },
});

export default function RepoCard(props) {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.repo.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.repo.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={props.repo.html_url} target="_blank">
          <Button size="small" color="primary">
            Github Repo
          </Button>
        </a>
        <a href={props.repo.homepage} target="_blank">
          <Button size="small" color="primary">
            Deployed Site
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}