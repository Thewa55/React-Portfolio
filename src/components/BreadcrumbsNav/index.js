import React from "react";
import Link from '@material-ui/core/Link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';


function BreadcrumbsNav() {
  return(
  <Breadcrumbs aria-label="breadcrumb">
    <Link color="inherit" href="/">
      About Me
    </Link>
    <Link color="inherit" href="/Portfolio">
      Portfolio
    </Link>
    <Link
      color="inherit"
      href="/ContactMe"
      aria-current="page"
    >
    Contact Me
    </Link>
  </Breadcrumbs>
  )
}

export default BreadcrumbsNav;