import React, { useState } from "react";
import { Radio } from "antd";
import { SketchPicker } from "react-color";
import "./index.css";

// @ts-ignore
export const ColorRadio = ({ color }) => {
  const [state, setState] = useState({
    displayColorPicker: false,
    color: { hex: "#000000" },
  });

  // @ts-ignore
  const setColor = (color) => {
    setState({
      ...state,
      color: color,
    });
  };

  const toggleVisible = () =>
    setState({
      ...state,
      displayColorPicker: !state.displayColorPicker,
    });

  return color === "custom" ? (
    <Radio.Button
      value={state.color.hex}
      className='color-radio'
      style={{ backgroundColor: state.color.hex }}
      onClick={toggleVisible}
    >
      <div className='circle' style={{ backgroundColor: state.color.hex }} />

      {state.displayColorPicker && (
        <div className='color-picker-wrapper'>
          <SketchPicker
            color={state.color}
            onChange={(updatedColor) => setColor(updatedColor)}
          />
        </div>
      )}
    </Radio.Button>
  ) : (
    <Radio.Button
      value={color}
      className='color-radio'
      style={{ backgroundColor: color }}
    >
      <div className='circle' style={{ backgroundColor: color }} />
    </Radio.Button>
  );
};
