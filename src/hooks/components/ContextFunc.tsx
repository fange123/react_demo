import React, { createContext, useContext, useState } from "react";

interface IProps {}

//* useContext带着子组件去流浪
//* 上层数据发生变化，肯定会触发渲染
const Context = createContext({});
const ContextFunc: React.FC<IProps> = (props) => {
  const [num, setNum] = useState<number>(0);

  // ? context.Provider包裹的所有子组件，都可以共享到父组件的值
  return (
    <Context.Provider value={num}>
      <Child1 />
      <Child2 />
    </Context.Provider>
  );
};

const Child1 = () => {
  //* 子组件获取从父组件共享的值,也要通过useContext
  const num = useContext(Context);
  return <div>子组件{num}</div>;
};
const Child2 = () => {
  //* 子组件获取从父组件共享的值
  const num = useContext(Context);
  return <div>子组件{num}</div>;
};

export default ContextFunc;
