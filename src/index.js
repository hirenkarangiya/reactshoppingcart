import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import "./index.scss";

import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk"; //redux-thunk
import createSagaMiddleware from "redux-saga"; //redux-saga
import { rootSaga } from "./sagas/saga";

import reducer from "./store/reducer";
import reducerA from "./store/reducerA";
import reducerB from "./store/reducerB";
import sortbyreducer from './store/reducers/sortByReducer';
import filterbypricereducer from './store/reducers/filterByPriceReducer';
import shoppinglistreducer from './store/reducers/shoppingListReducer';

const rootReducer = combineReducers({
  r1: reducer,
  r2: reducerA,
  r3: reducerB,
  sb: sortbyreducer,
  fp: filterbypricereducer,
  sl: shoppinglistreducer
});

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
