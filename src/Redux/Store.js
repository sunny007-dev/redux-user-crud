import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import { Reducers } from "./Reducer";
// import logger from "redux-logger";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({user: Reducers})
const Store = configureStore({reducer: rootReducer}, applyMiddleware(thunk));

export default Store;