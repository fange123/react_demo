import React from "react";
import { ISquareValue } from "../Board/Board";

interface IProps {
  value: ISquareValue;
  xIsNext: boolean;
  onClick: (value: any) => void;
}

const Square: React.FC<IProps> = (props) => {
  const { value, onClick } = props;
  return (
    <button className='square' onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
