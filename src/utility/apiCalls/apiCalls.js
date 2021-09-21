import axios from "axios"

export const getNews = async (section) => {
  const apiKey = '9G0OsTXKKZFBCsSXqEIpXqU8wfrAhn1Z'
  const config = {
    method: 'get',
    url: `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`,
  }
  return await axios(config)
    .then(response => response.data)
    .catch(error => console.error('Server Error: ' + error))
}
