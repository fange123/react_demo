import { Avatar, Button, Form, Table } from "antd";
import React from "react";
import { useAntdTable } from "ahooks";
import { PaginatedParams } from "ahooks/lib/useAntdTable";
import FormBuilder from "antd-form-builder";
import { randomUUID } from "node:crypto";
import { ColorRadio } from "./components";

interface IProps {}

const Index: React.FC<IProps> = () => {
  const [form] = Form.useForm();

  interface Item {
    key: string;
    name: string;
    age: number;
    address: string;
  }
  interface Result {
    total: number;
    list: Item[];
  }
  const getTableData = async (
    { current, pageSize }: PaginatedParams[0],
    formData: Object
  ): Promise<Result> => {
    let query = `page=${current}&size=${pageSize}`;
    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
        query += `&${key}=${value}`;
      }
    });

    return {
      total: 6,
      list: dataSource,
    };
  };

  const { tableProps, search } = useAntdTable(getTableData, {
    defaultPageSize: 5,
    form,
  });

  const { type, changeType, submit, reset } = search;
  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
  ];
  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ];

  const meta = {
    columns: 1,
    fields: [
      {
        key: "title",
        render() {
          return (
            <fieldset>
              <h2>Configuración</h2>
            </fieldset>
          );
        },
      },
      {
        key: "logo",
        label: "Logo del espacio",
        forwardRef: true,
        widget: Avatar,
        extra: <h2>gggg</h2>,
      },
      {
        key: "username",
        label: "User Name",
        require: true,
        type: "input",
        name: "username",
        disabled: true,
      },
      {
        key: "password",
        label: "Password",
        type: "password",
        extra: "密码不可见",
      },
      {
        key: "url",
        label: "网址",
        placeholder: "Ep: mi.dominio",
        widgetProps: { suffix: ".dofleini.com" },
        extra: <p>aaaa</p>,
      },
      {
        key: "working",
        label: "钱",
        widget: "radio-group",
        buttonGroup: true,
        options: [
          "Sólo yo",
          "2 - 10",
          "11 - 25",
          "26 - 50",
          "51 - 100",
          "500+",
        ],
        initialValue: "Sólo yo",
      },
      {
        key: "color",
        label: "Color del tema",
        widget: "radio-group",
        initialValue: "#E59100",
        buttonGroup: true,
        children: [
          "#39B0FF",
          "#04B58B",
          "#3E9C4B",
          "#B6BC00",
          "#E59100",
          "#E55C00",
          "#EE1F50",
          "custom",
        ].map((key) => <ColorRadio color={key} />),
      },
    ],
  };

  const onFinish = () => {
    console.log(form.getFieldsValue());
  };
  return (
    <>
      <Form form={form} onFinish={onFinish}>
        <FormBuilder meta={meta} form={form} />
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button type='primary' htmlType='submit'>
            Login
          </Button>
        </Form.Item>
      </Form>
      <Table columns={columns} {...tableProps} />
      );
    </>
  );
};

export default Index;
