import React, { useState } from "react";
import Square from "../Square";
import "./index.less";

interface IProps {}
export type ISquareValue = string | number;

const Board: React.FC<IProps> = () => {
  const [squareValue, setSquareValue] = useState<ISquareValue[]>(
    Array(9).fill(null)
  );

  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const renderSquare = (i: number) => (
    <Square value={squareValue[i]} onClick={() => handleClick(i)} />
  );
  const handleClick = (i: number) => {
    const newArr = squareValue.slice();
    console.log(newArr);

    if (calculateWinner(newArr) || newArr[i]) {
      return;
    }
    newArr[i] = xIsNext ? "X" : "O";

    setSquareValue(newArr);
    setXIsNext(!xIsNext);
  };

  function calculateWinner(squares: ISquareValue[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  const winner = calculateWinner(squareValue);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <>
      <div className='status'>{status}</div>
      <div className='parent'>
        <div className='div1'> {renderSquare(0)}</div>
        <div className='div2'> {renderSquare(1)}</div>
        <div className='div3'> {renderSquare(2)}</div>
        <div className='div4'> {renderSquare(3)} </div>
        <div className='div5'> {renderSquare(4)}</div>
        <div className='div6'> {renderSquare(5)}</div>
        <div className='div7'> {renderSquare(6)}</div>
        <div className='div8'> {renderSquare(7)}</div>
        <div className='div9'> {renderSquare(8)} </div>
      </div>
    </>
  );
};

export default Board;
