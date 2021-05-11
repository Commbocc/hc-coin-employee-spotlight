import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.airtable.com/v0/appst1zyHKSZ92roW',
  // commbocc@gmail.com account read only api key
  headers: { Authorization: `Bearer key1XrFuYhG1GKHvu` },
})
