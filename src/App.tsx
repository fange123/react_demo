import React from "react";
import "./App.less";
import { Provider } from "react-redux";
import store from "./store/index";
// import { List } from "./components";
// import Count from "function/Count";
// import MyDemoContext from "./demo/useContext";
import MyUpload from "./game";

const App = (props: any) => {
  return (
    <Provider store={store}>
      <div className='app'>
        <MyUpload />
        {/* <List>我是列表哈哈哈哈</List> */}
      </div>
    </Provider>
  );
};

export default App;
