import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import ReduxLogger from "redux-logger";
import ReduxThunk from "redux-thunk";
import rootReducer from "./rootReducer";

const initialState = {};
const middlewares = [ReduxThunk];
if (process.env.NODE_ENV === "development") {
  middlewares.push(ReduxLogger);
}

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);
