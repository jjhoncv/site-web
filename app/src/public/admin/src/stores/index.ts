import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunkMiddleware from "redux-thunk";

import { authReducer } from "../stores/auth/reducer";
import { productReducer } from "./product/index";
import { messageAlertReducer } from "./message/reducer";

const authPersistConfig = {
  key: "auth",
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  product: productReducer,
  messageAlert: messageAlertReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
const persistor = persistStore(store);

export { store, persistor };
