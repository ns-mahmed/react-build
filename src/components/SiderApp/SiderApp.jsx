import React, { useState } from "react";
import "antd/dist/antd.css";
import "./SiderApp.module.css";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

const SiderApp = (props) => {
  const { handleClick } = props;
  const [collapsed, setActiveState] = useState(false);
  // alert(collapsed);
  let onCollapse = () => {
    setActiveState(collapsed ? false : true);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />} onClick={handleClick}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />} onClick={handleClick}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3" onClick={handleClick}>
            Tom
          </Menu.Item>
          <Menu.Item key="4" onClick={handleClick}>
            Bill
          </Menu.Item>
          <Menu.Item key="5" onClick={handleClick}>
            Alex
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />} />
      </Menu>
    </Sider>
  );
};

export default SiderApp;
