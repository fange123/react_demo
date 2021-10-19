import React from "react";

interface IProps {
  username: string;
}

const GoodBye: React.FC<IProps> = (props) => {
  const { username } = props;

  return <div>bye!{username}</div>;
};

export default GoodBye;
