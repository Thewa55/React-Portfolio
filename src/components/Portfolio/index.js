import React, {useEffect, useState} from "react";
import API from "../../utils/API"
import RepoCard from "../RepoCard"

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
      <div>
        <h1>Work in Progress!!!!</h1>
      </div>
      <div>
        {selected.map(repo =>(
          <div key={repo.id}>{repo.name}</div>
        ))}
      </div>
    </div> 
  )
}

export default Portfolio;