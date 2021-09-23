import React from "react";
import styles from "./index.less";
import { Icon } from "@iconify/react";

interface IProps {}

const IconFont: React.FC<IProps> = () => {
  return (
    <>
      svg图标字体使用
      <div className={styles.icon_font}>
        <Icon icon='gg:comment' />
      </div>
    </>
  );
};

export default IconFont;
