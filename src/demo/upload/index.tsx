import UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";
import { Button, Form, Upload } from "antd";
import React from "react";

interface IProps {}

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const Index: React.FC<IProps> = (props) => {
  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  return (
    <Form {...formItemLayout}>
      <Form.Item
        name='upload'
        label='文件上传'
        valuePropName='fileList'
        getValueFromEvent={normFile}
      >
        <Upload name='logo' action='/upload.do' listType='picture'>
          <Button icon={<UploadOutlined />}>点击上传</Button>
        </Upload>
      </Form.Item>
    </Form>
  );
};

export default Index;
