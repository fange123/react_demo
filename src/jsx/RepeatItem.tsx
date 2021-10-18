import React from "react";

interface IProps {
  num: number;
  children: (num: number) => void;
}

const RepeatItem: React.FC<IProps> = (props) => {
  const { num, children } = props;

  const arr = [];
  for (let index = 0; index < num; index++) {
    arr.push(children(index));
  }
  console.log(arr);

  return <div>{arr}</div>;
};

export default RepeatItem;
