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
        Hello, my name is Kin-Wai Lam. I am a full stack developer currently living in Edison, NJ. I've always had a passion in all things computer related, it first started when I was young and playing games on my first computer with floppy disks. In high school I was introduced to True Basic, PASCAL and Visual Basic. I went to college as a computer science major but ended up with an engineering degree. After graduating I worked at different jobs and after some time I decided that I need a career change. At the end of 2019 I enrolled into a bootcamp and now starting my journey into becoming a developer.
      </Paper>
    </Grid>
  )
}

export default withStyles(styles)(AboutMe);