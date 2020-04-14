import React, {useEffect, useState} from "react";
import API from "../../utils/API"
import RepoCard from "../RepoCard"
import Grid from '@material-ui/core/Grid';

function Portfolio(){
  const [selected, setSelected] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [favorite, setFavorite] = useState([])
  const kennysFav = ["Note-Taker", "Tablify", "Google-book-search", "React-Portfolio", "TableManager"]

  function getPortfolio(){
    let fav = []
    API.getGitHubRepo()
      .then(res => {
        res.data.forEach(repo => {
          if(kennysFav.indexOf(repo.name) > -1 ){
            console.log(repo.name)
            fav.push(repo)
            setSelected(fav)
          }
        });
        setPortfolio(res.data)
      })
      .catch(err => console.log(err))
  }
  
  useEffect(() => {
    getPortfolio()
  }, [])
  
  console.log(portfolio)
  console.log(selected)

  return(
    <div>
      <Grid container justify="center">
        <h1>Welcome to my portfolio page</h1>
      </Grid>
      <div>
        <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
          {selected.map(repo =>(
            <Grid item xs={4}>
              <RepoCard  repo={repo}/>
            </Grid>
          ))}
        </Grid>
      </div>
    </div> 
  )
}

export default Portfolio;