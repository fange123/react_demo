import React, { useState } from "react";

interface IProps {}

const Count: React.FC<IProps> = (props) => {
  const [currentValue, setCurrentValue] = useState<number>(0);

  return (
    <div>
      当前值:{currentValue}
      <button
        onClick={() => {
          setCurrentValue(() => {
            return currentValue + 1;
          });
        }}
        // onClick={() => {
        //   setCurrentValue(currentValue + 1);
        //   console.log(currentValue);
        // }}
      >
        +1
      </button>
    </div>
  );
};

export default Count;
