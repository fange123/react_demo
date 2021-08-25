import React, { useState } from "react";
import Boiling from "./components/Boiling";
import Temperature from "./components/Temperature";

interface IProps {}
export const typeName: Record<string, string> = {
  c: "摄氏温度",
  f: "华氏温度",
};

// 1、华氏度 = 32°F（华氏温标单位）+ 摄氏度 × 1.8
// 2、摄氏度 = (华氏度 - 32°F) ÷ 1.8

const Index: React.FC<IProps> = () => {
  const [temperature, setTemperature] = useState<number | "">(0);
  const [type, setType] = useState<string>("");

  //c->f
  const toFahrenheit = (value: number) => {
    return 32 + value * 1.8;
  };

  //f-> c
  const toCelsius = (value: number) => {
    return (value - 32) / 1.8;
  };

  const transformTemp = (value: any, callback: any) => {
    if (value) {
      return callback(value);
    }
    return "";
  };

  const c_temp =
    type === "f" ? transformTemp(temperature, toCelsius) : temperature;
  const f_temp =
    type === "c" ? transformTemp(temperature, toFahrenheit) : temperature;

  const ceilTemperature = (value: number) => {
    setTemperature(value);
    setType("c");
  };
  const frehTemperature = (value: number) => {
    setTemperature(value);
    setType("f");
  };

  return (
    <div>
      <Temperature
        type='c'
        temperature={c_temp}
        setTemperature={ceilTemperature}
      />
      <Temperature
        type='f'
        temperature={f_temp}
        setTemperature={frehTemperature}
      />
      <Boiling c_temperature={temperature || ""} />
    </div>
  );
};

export default Index;
