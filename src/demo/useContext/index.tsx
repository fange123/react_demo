import React from "react";
import FirstList from "./components/FirstList";
import SecondList from "./components/SecondList";
import { MyProvider } from "./MyOwnContext";

interface IProps {}

//使用useContext共享状态
//https://www.ruanyifeng.com/blog/2019/09/react-hooks.html
const Index: React.FC<IProps> = () => {
  return (
    <MyProvider>
      <FirstList />
      <SecondList />
    </MyProvider>
  );
};

export default Index;
