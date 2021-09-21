import axios from "axios";

const apiKey = '9G0OsTXKKZFBCsSXqEIpXqU8wfrAhn1Z'

const generateURL = (request) => {
  const { endpoint, id } = request
  switch (endpoint) {
    case 'questions':
      return `${url}/questions`;
    case 'question':
      return `${url}/questions/${id}`;
    case 'vote':
      return `${url}/answers/${id}`
    default: break;
  }
};

const requestUrl = (pathname, itemId) => {
  const request = {
    endpoint: pathname,
    id: itemId
  }
  return generateURL(request)
};

const sendRequest = async (config) => {
  return await axios(config)
    .then(response => response.data)
    .catch(error => console.error('Server Error: ' + error))
};

export const getNews = async () => {
  const config = {
    method: 'get',
    url: `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`,
  }
  return await sendRequest(config)
};
