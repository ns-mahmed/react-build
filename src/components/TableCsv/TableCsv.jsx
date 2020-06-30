import React, { useState } from "react";
import "antd/dist/antd.css";
import moment from "moment";
import { CSVLink } from "react-csv";

import "./TableCsv.module.css";
import { Table, Modal, Button, Row, Col } from "antd";

let timeData = [];

for (var i = 0; i < 10000; i++) {
  timeData.push({
    empid: `${i}`,
    empname: `empname ${i}`,
    tdate: `05/09/${i > 2019 ? "2019" : i}`,
  });
}

const TableCsv = () => {
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  const columns = [
    {
      title: "Employee ID",
      dataIndex: "empid",
      key: "empid",
      width: 120,
      defaultSortOrder: "descend",
      sorter: (a, b) => a.empid - b.empid,
      fixed: "left",
    },
    {
      title: "Employee Name",
      dataIndex: "empname",
      key: "empname",
      width: 250,
      defaultSortOrder: "descend",
      sorter: (a, b) => (a.empname ? a.empname.localeCompare(b.empname) : 1),
      fixed: "left",
    },
    {
      title: "Date",
      dataIndex: "tdate",
      key: "tdate",
      width: 100,
      render: (date) => moment(date).format("DD/MM/YYYY"),
      sorter: (a, b) => a.tdate.localeCompare(b.tdate),
      fixed: "left",
    },
  ];

  return (
    <div>
      <Row>
        <Button type="primary" onClick={openModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={show}
          onOk={closeModal}
          onCancel={closeModal}
        >
          <Table
            columns={columns}
            dataSource={timeData}
            rowKey="id"
            size="small"
            bordered
            scroll={{ x: "max-content", y: 450 }}
            pagination={{
              pageSizeOptions: ["10", "30", "60", "100", "1000"],
              showSizeChanger: true,
            }}
          />

          <CSVLink
            filename={"Time Detail Report.csv"}
            data={timeData}
            className="btn btn-primary"
          >
            Download me
          </CSVLink>
        </Modal>
      </Row>
      <Row>
        <Col span={12} style={{ textAlign: "center" }}>
          <CSVLink
            filename={"Detail Report.csv"}
            data={timeData}
            className="btn btn-primary"
          >
            Download Detail report
          </CSVLink>
        </Col>
        <Col span={12} style={{ textAlign: "center" }}>
          <CSVLink
            filename={"Report.csv"}
            data={timeData}
            className="btn btn-primary"
          >
            Download Detail report
          </CSVLink>
        </Col>
      </Row>
    </div>
  );
};

export default TableCsv;
