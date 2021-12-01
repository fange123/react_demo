import { Button, Space } from "antd";
import React, { useReducer } from "react";

interface IProps {}

const Index: React.FC<IProps> = (props) => {
  const reducer = (state: State, action: { type: string }) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
    }
  };

  type State = {
    count: number;
  };
  const initialState: State = {
    count: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      使用useReducer实现的计数器
      <p>数量：{state?.count}</p>
      <Space>
        <Button onClick={() => dispatch({ type: "increment" })}>添加</Button>
        <Button
          disabled={state?.count === 0}
          onClick={() => dispatch({ type: "decrement" })}
        >
          减少
        </Button>
      </Space>
    </div>
  );
};

export default Index;
