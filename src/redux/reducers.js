import { FETCH_MARKET_COINS_REQUEST, FETCH_MARKET_COINS_SUCCESS, FETCH_MARKET_COINS_FAILURE, UPDATE_CURRENCY } from './constants';


const initialState = {
  loading: false,
  coins: [],
  error: '',
  currency: 'usd',
};

export const marketCapReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MARKET_COINS_REQUEST:
      return {
        ...state,
      };
    case FETCH_MARKET_COINS_SUCCESS:
      return {
        ...state,
        coins: action.payload,
      };

    case FETCH_MARKET_COINS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_CURRENCY:
      return {
        ...state,
        currency: action.currency,
      };
    default:
      return state;
  }
};










