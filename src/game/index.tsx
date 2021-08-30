import React from "react";
import Board from "./components/Board";
import "./index.less";

interface IProps {}

const Index: React.FC<IProps> = (props) => {
  return (
    <div className='game'>
      <div className='game-board'>
        <Board />
      </div>
      <div className='game-info'>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};

export default Index;
