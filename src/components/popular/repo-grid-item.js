import React from 'react' 
import './repo-grid-item.css' 

const RepoGridItem = ({repo , rank}) => (
  <li className="repo-grid-item">
    <ul className="item">
      <li># {rank}</li> 
      <li><img className="avatar" src={repo.owner.avatar_url} alt="" /></li> 
      <li><a href={repo.html_url}>{repo.name.length > 20 ? repo.name.substr(0 , 17) + "..." : repo.name }</a> </li> 
      <li><a href={repo.owner.html_url} >{repo.owner.login}</a></li> 
      <li>{repo.stargazers_count} stars{console.log(repo)}</li> 
    </ul>  
  </li>
)

export default RepoGridItem