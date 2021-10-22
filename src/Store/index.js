import { createStore ,combineReducers,applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import BooksReducer from '../Reducers/BooksReducers';
import SearchReducer from "../Reducers/SearchReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
const Reducers= combineReducers({
    BooksReducer,
    SearchReducer
});
const MiddleWare=applyMiddleware(thunk);
const store = createStore(Reducers,composeWithDevTools(MiddleWare));

export default store;