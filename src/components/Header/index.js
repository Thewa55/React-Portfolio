import React from "react";
// import CenteredGrid from "../CenteredGrid";
import Breadcrumbs from "../BreadcrumbsNav";
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';
import Time from '../Time'

function Header(){
  return(
    <div>
      <Grid container justify="center">
        <Typography variant="h4" component="h2">
          Kin-Wai Lam
        </Typography>
      </Grid>
      <Grid container justify="center">
        <Breadcrumbs />
      </Grid>
      <Time />
    </div>
  )
}

export default Header;