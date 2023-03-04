import { legacy_createStore as createStore , applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { marketCapReducer} from './reducers';


const store = createStore(marketCapReducer, composeWithDevTools(applyMiddleware(thunk)));



export default store;