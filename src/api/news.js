import axios from "axios";  

export function getGeneralNews(){
    return axios.get( "https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=5ee534723b4f4e00a6d0f9dcda6ad4fa")
    .then((response) => {
      const data = response.data.articles;
      return data
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getHealthNews(){
    return axios.get( "https://newsapi.org/v2/top-headlines?category=health&language=en&apiKey=5ee534723b4f4e00a6d0f9dcda6ad4fa")
    .then((response) => {
      const data = response.data.articles;
      return data
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getSportsNews(){
    return axios.get( "https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=5ee534723b4f4e00a6d0f9dcda6ad4fa")
    .then((response) => {
      const data = response.data.articles;
      return data
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getEntertainmentNews(){
   return axios.get( "https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=5ee534723b4f4e00a6d0f9dcda6ad4fa")
    .then((response) => {
      const data = response.data.articles;
      return data
    })
    .catch((error) => {
      console.log(error);
    });
}

export function getScienceNews(){
    return axios.get( "https://newsapi.org/v2/top-headlines?category=science&language=en&apiKey=5ee534723b4f4e00a6d0f9dcda6ad4fa")
    .then((response) => {
      const data = response.data.articles;
      return data
    })
    .catch((error) => {
      console.log(error);
    });
}