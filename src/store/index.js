import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const middlewares = [thunk];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
const initialState = {
  user: null,
};
export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);
