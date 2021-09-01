import React, { useEffect, useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

import styles from "./index.less";

interface IProps {}

const Index: React.FC<IProps> = (props) => {
  const [file, setFile] = useState<any>(null);
  useEffect(() => {
    console.log(file);
  }, [file]);
  return (
    <div className={styles.item}>
      <FilePond
        allowMultiple={true}
        maxFiles={3}
        onupdatefiles={(fileItems) => {
          setFile(fileItems.map((fileItem) => fileItem.file));
        }}
      />
    </div>
  );
};

export default Index;
