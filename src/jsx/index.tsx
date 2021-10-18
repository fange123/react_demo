import React from "react";
import RepeatItem from "./RepeatItem";
import styles from "./index.less";

interface IProps {}

const Index: React.FC<IProps> = (props) => {
  return (
    <>
      <RepeatItem num={10}>
        {(index: number) => (
          <div key={index} className={styles.wrap}>
            item:{index}
          </div>
        )}
      </RepeatItem>
      <div>{String(undefined)}</div>
    </>
  );
};

export default Index;
