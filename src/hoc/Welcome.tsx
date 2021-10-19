import React from "react";

interface IProps {
  username: string;
}

const Welcome: React.FC<IProps> = (props) => {
  const { username } = props;

  return <div>welcome!{username}</div>;
};

export default Welcome;
