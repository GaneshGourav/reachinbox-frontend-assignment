import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import reducer from "../src/Redux/reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  reducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
