import React from "react";
import Link from '@material-ui/core/Link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';


function BreadcrumbsNav() {
  return(
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" style={{ textDecoration: 'none' }}>
        About Me
      </Link>
      <Link color="inherit" href="/Portfolio" style={{ textDecoration: 'none' }}>
        Portfolio
      </Link>
      <Link color="inherit" href="/ContactMe" aria-current="page" style={{ textDecoration: 'none' }}>
        Contact Me
      </Link>
    </Breadcrumbs>
  )
}

export default BreadcrumbsNav;