import React from "react";
import "antd/dist/antd.css";
import "./AppLayer.module.css";
import { Row, Col, Divider } from "antd";

const AppLayer = () => {
  return (
    <div>
      <Divider
        orientation="left"
        style={{ color: "#333", fontWeight: "normal" }}
      >
        Percentage columns
      </Divider>
      <Row>
        <Col flex={2}>2 / 5</Col>
        <Col flex={3}>3 / 5</Col>
      </Row>
      <Divider
        orientation="left"
        style={{ color: "#333", fontWeight: "normal" }}
      >
        Fill rest
      </Divider>
      <Row>
        <Col flex="100px">100px</Col>
        <Col flex="auto">Fill Rest</Col>
      </Row>
      <Divider
        orientation="left"
        style={{ color: "#333", fontWeight: "normal" }}
      >
        Raw flex style
      </Divider>
      <Row>
        <Col flex="1 1 200px">1 1 200px</Col>
        <Col flex="0 1 300px">0 1 300px</Col>
      </Row>
    </div>
    // <Layout>
    //   <Header>Header</Header>
    //   <Layout>
    //     <Content>Content</Content>
    //     <Sider>Sider</Sider>
    //   </Layout>
    //   <Footer>Footer</Footer>
    // </Layout>
  );
};

export default AppLayer;
