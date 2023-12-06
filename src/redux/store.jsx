import {counterReducer} from "./counter/reducer";
import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {cashReducer} from "./cash/reducer";

const rootReducer = combineReducers({
  cashReducer,
  counterReducer
})

export const store = createStore(rootReducer, composeWithDevTools())