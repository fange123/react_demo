import { message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import "./index.less";

interface IProps {}
//前后端手写分片上传秒传与断点续传

const Index: React.FC<IProps> = (props) => {
  const [currentFile, setCurrentFile] = useState<File>();
  const [objectURL, setObjectURL] = useState<string>();
  const fileRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);

    if (e.target.files) {
      const file = e.target.files[0];
      setCurrentFile(file);
    }
  };
  const handleUpload = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };
  const handleSubmit = () => {
    if (!currentFile) {
      return message.error("未选择文件");
    }
    if (!validateFile(currentFile)) return;
    //...此处上传服务器操作
  };
  useEffect(() => {
    if (currentFile) {
      const objecturl = window.URL.createObjectURL(currentFile);
      setObjectURL(objecturl);
      return () => window.URL.revokeObjectURL(objecturl);
    }
  }, [currentFile]);

  function validateFile(file: File) {
    const isValideType = ["image/jpeg", "image/png", "image/gif"].includes(
      file.type
    );
    if (!isValideType) {
      message.error("不支持的文件类型");
    }
    const isValideDate = file.size < 1024 * 1024 * 1024; //单位字节 1024字节=1kb 1024k = 1mb ...
    if (!isValideDate) {
      message.error("上传文件大小过大");
    }
    return isValideType && isValideDate;
  }

  return (
    <div className='spliceupload'>
      <input
        type='file'
        onChange={handleChange}
        ref={fileRef}
        style={{ display: "none" }}
      />
      <div className='uploadicon' onClick={handleUpload}>
        {!objectURL && <UploadOutlined />}
        {
          //有url显示图片
          objectURL && (
            <img
              alt=''
              src={objectURL}
              style={{ width: "100px", height: "100px" }}
            ></img>
          )
        }
      </div>
      <button onClick={handleSubmit}>提交</button>
    </div>
  );
};

export default Index;
