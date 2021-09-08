import {setImages} from '../store/index';

export const getImages = props => {
  let url =
    'https://www.omdbapi.com/?i=tt3896198&apikey=5eec5adc&s=love&y=2020';
  return dispatch => {
    fetch(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(parsedRes => {
        dispatch(setImages(parsedRes.Search));
        return parsedRes;
      })
      .catch(error => {
        alert('Hubo un error');
      });
  };
};
