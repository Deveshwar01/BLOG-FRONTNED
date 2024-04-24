import React from "react";
import Routes from "./Routes";
import { Toaster } from "react-hot-toast";
import store from "store/store.jsx";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <Routes />
      <Toaster/>
    </Provider>
  );
}

export default App;
