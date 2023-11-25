import {SHOP_DATA, ADD_TO_BASKET, REMOVE_FROM_BASKET} from './actions';
import {TData} from '../types';

const initialState: TData = {
  data: {},
  basket: [],
};

const authReducers = (state: TData = initialState, action: any): TData => {
  switch (action.type) {
    case SHOP_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: state.basket
          ? state.basket.filter(item => item.id !== action.payload)
          : [],
      };
    default:
      return state;
  }
};

export default authReducers;
