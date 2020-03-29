import React, {Component} from "react";
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Time extends Component{
  state = {
    date: new Date()
  };

  timeUpdate(){
    setInterval(() =>{
      this.setState({date:new Date()})
    }, 1000)
  }

  render (){
    return(
      <Grid container justify="center">
        <Typography variant="body1">
          Current time: {this.state.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
        </Typography>
        {this.timeUpdate()}
      </Grid>
    )
  }
}

export default Time;