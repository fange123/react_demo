import React from "react";

interface IProps {}

const Index: React.FC<IProps> = (props) => {
  return (
    <div style={{ backgroundColor: "pink", width: "100%", height: "100%" }}>
      我的页面
      <iframe
        src='https://odp-webssh.console.tg.ncmp.unicom.local/dolphinscheduler/ui/#/security/tenant'
        frameBorder='0'
        width='100%'
        height='100%'
      ></iframe>
    </div>
  );
};

export default Index;
