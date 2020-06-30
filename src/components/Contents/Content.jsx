import React from "react";
import { Breadcrumb } from "antd";

const Contents = () => {
  return (
    // <Content style={{ margin: "0 16px" }}>
    <div>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        Bill is a cat.
      </div>
    </div>
    // </Content>
  );
};

export default Contents;
