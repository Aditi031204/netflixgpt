import React from "react";
import Body from "./components/body";
import { Provider } from "react-redux";
import appStore from "./utils/appstore";

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
