import axios from 'axios' 

export default {
  fetchPopularRepos: (language) => {
    const uri = encodeURI(`https://api.github.com/search/repositories?q=stars:>100+${language}:javascript&sort=stars&order=desc&type=repositories`)
  return axios(uri).then(res => res.data.items )
  }
}