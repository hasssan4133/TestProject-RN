import {showSnackbar} from 'src/Components/Snackbar';
import API from 'src/Config/API';
import Axios from 'src/Config/Axios';

import {getRedux} from 'src/Redux/ReduxFunctions';

export const SHOP_DATA = 'SHOP_DATA';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';

export const getDetails = callback => {
  const {dispatch} = getRedux();
  const {method, url} = API.LISTINGS;

  Axios.request({method, url})
    .then(data => {
      dispatch({
        type: SHOP_DATA,
        payload: data,
      });
      callback({success: true});
    })
    .catch(error => {
      console.error('There was an error fetching the data', error);
      showSnackbar({
        type: 'error',
        header: 'ERROR',
        body: 'There was an error fetching the data',
      });
    });
};

export const addToBasket = item => ({
  type: ADD_TO_BASKET,
  payload: item,
});

export const removeFromBasket = itemId => ({
  type: REMOVE_FROM_BASKET,
  payload: itemId,
});
