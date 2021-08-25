import React from "react";

interface IProps {
  c_temperature: number | "";
}

const Boiling: React.FC<IProps> = (props) => {
  const { c_temperature = 99 } = props;
  return (
    <div>
      {c_temperature >= 100 ? <h2>水已经沸腾了～～</h2> : <p>水没有沸腾。</p>}
    </div>
  );
};

export default Boiling;
