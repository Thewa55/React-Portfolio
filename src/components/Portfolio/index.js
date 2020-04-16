import React, {useEffect, useState} from "react";
import API from "../../utils/API"
import RepoCard from "../RepoCard"
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function Portfolio(){

  const [selected, setSelected] = useState({
    repos:[],
    label: "Favorite"
  })
  const [portfolio, setPortfolio] = useState({
    allRepo: [],
    label: "All projects"
  })
  const [favorite, setFavorite] = useState({
    favRepo:[],
    label: "Favorite"
  })

  const kennysFav = ["Note-Taker", "Tablify", "Google-book-search", "React-Portfolio", "TableManager"]
  const [state, setState] = React.useState({
    checkedA: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    if(state.checkedA){
      setSelected({...selected, repos: portfolio.allRepo, label: portfolio.label})
    }
    else{
      setSelected({...selected, repos: favorite.favRepo, label: favorite.label})
    }
  };

  function getPortfolio(){
    let fav = []
    API.getGitHubRepo()
      .then(res => {
        res.data.forEach(repo => {
          if(kennysFav.indexOf(repo.name) > -1 ){
            fav.push(repo)
            setSelected({...selected, repos: fav})
            setFavorite({...favorite, favRepo: fav})
          }
        });
        setPortfolio({...portfolio, allRepo: res.data})
      })
      .catch(err => console.log(err))
  }
  
  useEffect(() => {
    getPortfolio()
  }, [])
  
console.log(selected)
  return(
    <div>
      <Grid container justify="center" alignItems="center" >
        <h4>My projects: </h4>
      </Grid>
      <Grid container justify="left" alignItems="center" >
        <FormGroup row>
          <FormControlLabel
          control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
          label={selected.label}
          />
        </FormGroup>
      </Grid>
      <div>
        <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
          {selected.repos.map(repo =>(
            <Grid item xs={12} sm={6} md={4}>
              <RepoCard  repo={repo}/>
            </Grid>
          ))}
        </Grid>
      </div>
    </div> 
  )
}

export default Portfolio;