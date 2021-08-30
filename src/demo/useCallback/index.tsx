import { Button } from "antd";
import React, { useCallback, useState } from "react";

interface IProps {}

const Index: React.FC<IProps> = () => {
  const [count, setCount] = useState<number>(0);
  const momeSetCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <>
      <Button type='primary' onClick={momeSetCount}>
        加1
      </Button>
      <p>{count}</p>
    </>
  );
};

export default Index;
