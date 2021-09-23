import { Button, Input } from "antd";
import React, { useState } from "react";

const Index = () => {
  const [ref, setRef] = useState(null)

  const setInputRef = (/** @type {any} */ ref)=> {
    setRef(ref)
    }

    const handleClick = () => {
      // @ts-ignore
      ref.focus()
    }
  return (
    <div>
      <Input ref={setInputRef} />
      <Button type='primary' onClick={handleClick}>
        点击
      </Button>
    </div>
  );
};

export default Index;
