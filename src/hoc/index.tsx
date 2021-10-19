import React from "react";
import GoodBye from "./GoodBye";
import Hoc from "./Hoc";
import Welcome from "./Welcome";

interface IProps {}

const Index: React.FC<IProps> = () => {
  return (
    <div>
      {Hoc(GoodBye)}
      {Hoc(Welcome)}
    </div>
  );
};

export default Index;
