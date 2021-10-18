import React from "react";
import Groups from "./components/Groups";
import Item from "./components/Item";

interface IProps {
  author?: string;
}

const Index: React.FC<IProps> = (props) => {
  return (
    <Groups>
      <Item name='zhy' />
    </Groups>
  );
};

export default Index;
