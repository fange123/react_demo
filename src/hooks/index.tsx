import React from "react";
import StateClass from "./components/StateClass";
import StateFunc from "./components/StateFunc";
import ContextFunc from "./components/ContextFunc";
import ReducerFunc from "./components/ReducerFunc";

interface IProps {}

const Index: React.FC<IProps> = (props) => {
  return (
    <>
      父组件
      {/* <StateClass />
      <StateFunc /> */}
      {/* <ContextFunc /> */}
      <ReducerFunc />
    </>
  );
};

export default Index;
