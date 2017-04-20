import React from 'react' 
import RepoGridItem from './repo-grid-item' 
import './repo-grid.css'

const RepoGrid = ({repos}) => (

  <ul className='grid'>
    {repos.map( (repo , i) =><RepoGridItem key={repo.full_name} repo={repo} rank={i} /> )} 
  </ul>

)

export default RepoGrid