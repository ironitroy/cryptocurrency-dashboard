import axios from 'axios';
import { UPDATE_CURRENCY } from './constants';
import { FETCH_MARKET_COINS_REQUEST, FETCH_MARKET_COINS_SUCCESS, FETCH_MARKET_COINS_FAILURE } from './constants';

export const updateCurrency = (currency) => ({
  type: UPDATE_CURRENCY,
  currency,
});

export const getCoinsByMarket = (currency = "usd") => async (dispatch) => {
  try {
    dispatch({ type: FETCH_MARKET_COINS_REQUEST });

    const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=1&sparkline=false`);

    dispatch({
      type: FETCH_MARKET_COINS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_MARKET_COINS_FAILURE,
      payload: error.response.data.message,
    });
  }
};



