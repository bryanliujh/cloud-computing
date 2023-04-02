/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Image, Typography, Descriptions } from "antd";
import Header from "../components/header";
import styles from "@/styles/Detail.module.css";

export default function DetailPage() {
  const { Title } = Typography;
  return (
    <>
      <Header />
      <div className={styles.main}>
        <div
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignContent: "flex-start",
            display: "flex",
          }}
        >
          <div>
            <Image
              width={460}
              height={640}
              src={
                "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3687&q=80"
              }
            />
          </div>
          <div style={{ marginLeft: 50 }}>
            <Title style={{ margin: 0, marginBottom: 20 }}>
              Cloud Computing
            </Title>
            <Descriptions title="" bordered>
              <Descriptions.Item label="Product">
                Cloud Database
              </Descriptions.Item>
              <Descriptions.Item label="Billing Mode">
                Prepaid
              </Descriptions.Item>
              <Descriptions.Item label="Automatic Renewal">
                YES
              </Descriptions.Item>
              <Descriptions.Item label="Order time">
                2018-04-24 18:00:00
              </Descriptions.Item>
              <Descriptions.Item label="Usage Time" span={2}>
                2019-04-24 18:00:00
              </Descriptions.Item>
              <Descriptions.Item label="Negotiated Amount">
                $80.00
              </Descriptions.Item>
              <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
              <Descriptions.Item label="Official Receipts">
                $60.00
              </Descriptions.Item>
              <Descriptions.Item label="Config Info">
                Data disk type: MongoDB
                <br />
                Database version: 3.4
                <br />
                Package: dds.mongo.mid
                <br />
                Storage space: 10 GB
                <br />
                Replication factor: 3
                <br />
                Region: East China 1
                <br />
              </Descriptions.Item>
            </Descriptions>
          </div>
        </div>
      </div>
    </>
  );
}
