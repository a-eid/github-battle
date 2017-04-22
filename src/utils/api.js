import axios from 'axios' 

export const fetchPopularRepos =  (language) => {
    const uri = encodeURI(`https://api.github.com/search/repositories?q=stars:>100+language:${language}&sort=stars&order=desc&type=repositories`)
    return axios(uri).then(res => res.data.items )
  }

export const fetchUser =  (username) => {
    return axios(encodeURI(`https://api.github.com/users/${username}`)).then( u => u.data )
  }
