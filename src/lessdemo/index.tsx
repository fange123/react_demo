import React from "react";
import "./index.less";

interface IProps {}

const Index: React.FC<IProps> = (props) => {
  return (
    <div className='demo'>
      demo
      <p className='span'>span</p>
      <div className='div'>div</div>
    </div>
  );
};

export default Index;
