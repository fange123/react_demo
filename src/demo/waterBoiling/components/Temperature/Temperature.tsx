import { typeName } from "demo/waterBoiling";
import React from "react";

interface IProps {
  type: string;
  temperature: number | string;
  setTemperature: any;
}

const Temperature: React.FC<IProps> = (props) => {
  const { type, temperature, setTemperature } = props;

  return (
    <fieldset>
      <legend>请输入{typeName[type]}</legend>
      <input
        type='text'
        value={temperature || ""}
        onChange={(e: any) => setTemperature(e.target.value)}
      />
    </fieldset>
  );
};

export default Temperature;
