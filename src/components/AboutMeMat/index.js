import React from "react";
import { Grid, Paper, withStyles } from '@material-ui/core';
import Picture from '../../images/Kenny.png'

const styles = theme => ({
  paperPadding: {
    padding: "30px",
    marginTop: "10px"
  },
  picturePadding: {
    marginTop: "40px"
  }
})

function AboutMe(props){
  const { classes } = props

  return(
    <Grid container direction="row" justify="center" alignItems="center">
      <img src={Picture} className={classes.picturePadding} alt="Self Portrait" />
      <Paper elevation={3} className={classes.paperPadding}>
      Hello, my name is Kin-Wai Lam. I currently reside in Edison, NJ and I am a full stack developer. Welcome to my portfolio page, I am currently converting my portfolio into a full React experience. Please be patient with me while I learn React! 
      </Paper> 
    </Grid>
  )
}

export default withStyles(styles)(AboutMe);