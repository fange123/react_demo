import { Button, message, Progress, Tooltip, Upload } from "antd";
import React, { ReactElement, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { UploadFile } from "antd/lib/upload/interface";
import "./index.less";
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined";

interface IProps {}

const Index: React.FC<IProps> = (props) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);
  // 上传前
  const beforeUpload = (file: UploadFile) => {
    setFileList((prevFileList) => {
      return [...prevFileList, file];
    });
    return false;
  };

  // 点击删除文件时
  const onRemoveFile = (file: UploadFile) => {
    setFileList((prevFileList) => {
      return prevFileList.filter((item) => item !== file);
    });
  };
  // 上传操作
  const handleUpload = () => {
    if (fileList.length) {
      setUploading(true);
      //TODO:...请求
    } else {
      message.warning("请先选择文件");
    }
  };
  const fileProps = {};

  //~自定义文件列表（展示）
  const itemRender = (_: ReactElement, file: UploadFile) => {
    //截取文件后缀
    const fileType = file.name.substring(file.name.lastIndexOf(".") + 1);
    return (
      <Tooltip title={file.name}>
        <div className={`file_card file_card_${fileType}`}>
          <span>{`${file.name.slice(0, 15)}...`}</span>
          <span>
            <DeleteOutlined
              className='delete'
              onClick={() => onRemoveFile(file)}
            />
          </span>
        </div>
      </Tooltip>
    );
  };
  return (
    <>
      <Upload
        fileList={fileList}
        beforeUpload={beforeUpload}
        itemRender={(originNode: ReactElement, file: UploadFile) =>
          itemRender(originNode, file)
        }
        {...fileProps}
      >
        <Button icon={<UploadOutlined />}>点击上传</Button>
      </Upload>
      <Button
        className='btn_upload'
        type='primary'
        loading={uploading}
        onClick={handleUpload}
      >
        开始上传
      </Button>
    </>
  );
};

export default Index;
