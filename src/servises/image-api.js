import axios from "axios";

const KEY = "22453348-6986f932e651dfab56ec0e491";
const URL = "https://pixabay.com/api/?image_type=photo&orientation=horizontal";
const AMOUNT_IMAGES = 12;

function ImageApiService(query, page) {
  const url = `${URL}&q=${query}&page=${page}&per_page=${AMOUNT_IMAGES}&key=${KEY}`;
  //   return fetch(url).then((response) => {
  //     if (response.ok) {
  //       return response.json();
  //     }
  //     return Promise.reject(new Error(`Нет картинок с запросом ${query}`));
  //   });
  return axios.get(url).then((response) => response.data.hits);
}

export default ImageApiService;
