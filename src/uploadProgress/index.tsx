import { Button, message, Upload } from "antd";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import "./index.less";

interface IProps {}

const Index: React.FC<IProps> = (props) => {
  const fileProps = {
    //? 后端请求地址，也可以通过customRequest属性自定义上传请求
    action: "/api/download",

    onChange(info: any) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent: number) => `${parseFloat(percent.toFixed(2))}%`,
    },
  };

  return (
    <>
      <Upload {...fileProps}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </>
  );
};

export default Index;
