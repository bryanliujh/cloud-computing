/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Image, Typography, Descriptions } from "antd";
import styles from "@/styles/Detail.module.css";
import { useRouter } from "next/router";
import { Course } from "../api/search";
import ActionBar from "../components/actionBar";

export default function DetailPage() {
  const { Title } = Typography;
  const router = useRouter();
  const data: Partial<Course> = router.query;
  return (
    <>
      <ActionBar />
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
              {data?.Title || "Cloud Computing"}
            </Title>
            <Descriptions title="" bordered>
              <Descriptions.Item label="Category">
                {data?.Category || "Cloud"}
              </Descriptions.Item>
              <Descriptions.Item label="Course Id">
                {data?.Course_Id || "123"}
              </Descriptions.Item>
              <Descriptions.Item label="Duration">
                {data?.Duration ? `${data?.Duration} hours` : "5 hours"}
              </Descriptions.Item>
              <Descriptions.Item label="Price">
                {data?.Price ? `$${data?.Price}` : "$5"}
              </Descriptions.Item>
              <Descriptions.Item label="Provider">
                {data?.Provider || "NUS"}
              </Descriptions.Item>
              <Descriptions.Item label="Taggings">
                {data?.Taggings || "tag1"}
              </Descriptions.Item>
              <Descriptions.Item label="Description" span={3}>
                {data?.Description || "abcde"}
              </Descriptions.Item>
            </Descriptions>
          </div>
        </div>
      </div>
    </>
  );
}
