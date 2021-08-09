import React from "react";
import { useMyContext } from "../MyOwnContext";

interface IProps {}

const SecondList: React.FC<IProps> = () => {
  const { age } = useMyContext();
  return <div>{age}</div>;
};

export default SecondList;
