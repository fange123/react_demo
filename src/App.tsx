import React from "react";
import "./App.less";
import { Provider } from "react-redux";
import store from "./store/index";
// import { List } from "./components";
// import Count from "function/Count";
// import MyDemoContext from "./demo/useContext";
import MyDemo from "./demo/waterBoiling";

const App = (props: any) => {
  return (
    <Provider store={store}>
      <div className='app'>
        <MyDemo />
        {/* <List>我是列表哈哈哈哈</List> */}
      </div>
    </Provider>
  );
};

export default App;
