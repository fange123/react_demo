import { Button, Tabs } from "antd";
import React from "react";

interface IProps {}
const { TabPane } = Tabs;
const Index: React.FC<IProps> = (props) => {
  const callback = () => {};
  return (
    <Tabs defaultActiveKey='1' onChange={callback}>
      <TabPane tab='Tab 1' key='1'>
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab='Tab 2' key='2'>
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab='Tab 3' key='3'>
        <Button type='primary' />
      </TabPane>
    </Tabs>
  );
};

export default Index;
