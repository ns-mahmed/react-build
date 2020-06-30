import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import {
  SiderApp,
  Contents,
  AppLayer,
  TableComp,
  TableCsv,
} from "./components";

const { Header, Footer, Content } = Layout;
function App() {
  const components = {
    1: <Contents />,
    2: <AppLayer />,
    3: <div style={{ textAlign: "center" }}>Option 3</div>,
    4: <TableComp />,
    5: <TableCsv />,
  };

  const [render, updateRender] = useState(1);

  const handleMenuClick = (menu) => {
    updateRender(menu.key);
  };

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ padding: 0 }}>
          <h1 style={{ color: "white", textAlign: "left" }}>Urlc DashBoard</h1>
        </Header>
        <Layout className="site-layout">
          <SiderApp handleClick={handleMenuClick} />
          <Content>{components[render]}</Content>
        </Layout>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
      );
    </div>
  );
}

export default App;
