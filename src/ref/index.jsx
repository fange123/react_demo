import { Button, Input } from "antd";
import React from "react";

const Index = () => {
  const inputRef  = React.createRef()



    const handleClick = () => {
      inputRef.current.focus()
    }
  return (
    <div>
      <Input ref={inputRef} />
      <Button type='primary' onClick={handleClick}>
        点击
      </Button>
    </div>
  );
};

export default Index;
