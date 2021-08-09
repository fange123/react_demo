import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useForm, Controller } from "react-hook-form";

interface IProps {}

const Index: React.FC<IProps> = (props) => {
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={handleSubmit(onSubmit)}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label='Username'
        name='username'
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input {...register("username")} />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password {...register("password")} />
      </Form.Item>

      <Form.Item valuePropName='checked' wrapperCol={{ offset: 8, span: 16 }}>
        <Controller
          name='remember'
          control={control}
          render={({ field: { value, onChange } }) => (
            <Checkbox
              checked={value}
              onChange={(e) => {
                onChange(e.target.checked);
              }}
            >
              记住我
            </Checkbox>
          )}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Index;
