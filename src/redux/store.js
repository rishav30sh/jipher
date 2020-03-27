import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { persistStore } from "redux-persist";
const middlewares = [logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

//here persisted is imported from redux-persist and it stores the states of "store" locally.
const persistor = persistStore(store);

export  { store, persistor };
