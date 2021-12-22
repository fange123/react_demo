import React, { useReducer } from "react";

interface IProps {}

//* useReducer去其他地方借资源，使用方法和redux类似

const store = {
  num: 1,
};
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "num":
      return {
        ...state,
        num: action.num,
      };

    default:
      return state;
  }
};

const ReducerFunc: React.FC<IProps> = (props) => {
  //* useReducer接受两个参数，第一个是reducer函数，第二个是store
  //* useReducer返回里一个数组,第一个参数是state,第二个参数是dispatch

  const [state, dispatch] = useReducer(reducer, store);

  //~利用dispatch来修改仓库store中的内容

  return (
    <div
      onClick={() => dispatch({ type: "num", num: 10 })}
      style={{ background: "red" }}
    >
      {state.num}
    </div>
  );
};

export default ReducerFunc;
