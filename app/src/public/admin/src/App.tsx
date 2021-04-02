import * as React from "react";
import { Routes } from "./routes/Router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./stores";
import { Loading } from "./components/Loading";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};
