import React from "react";
import { useBoolean } from "ahooks";
import { Button } from "antd";

interface IProps {}

const Index: React.FC<IProps> = () => {
  const [state, { toggle, setTrue, setFalse }] = useBoolean(true);
  return (
    <div>
      <p>状态值:{state ? "true" : "false"}</p>
      <Button onClick={setTrue}>true</Button>
      <Button onClick={setFalse}>false</Button>
      <Button onClick={() => toggle()}>toggle</Button>
    </div>
  );
};

export default Index;
