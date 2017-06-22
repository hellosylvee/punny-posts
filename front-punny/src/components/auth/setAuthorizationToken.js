import axios from 'axios'

const setAuthorizationToken = (token) => {
  if(token){
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete axios.defaults.headers.common['Authorization']
  }
  console.log('Authorization is SET')
}

// def authorized_request(url)
//   // axios.get(url, {headers go here})
// end

export default setAuthorizationToken
