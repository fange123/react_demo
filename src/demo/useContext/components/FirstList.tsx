import React from "react";
import { useMyContext } from "../MyOwnContext";

interface IProps {}

const FirstList: React.FC<IProps> = () => {
  const { username } = useMyContext();

  return <div>{username}</div>;
};

export default FirstList;
