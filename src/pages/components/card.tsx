import Link from "next/link";
import { useState } from "react";
import { mockCloudComputingCourse } from "../api/mock";
import { Button } from "./button";
import styles from "@/styles/Card.module.css";
import { Avatar, Typography } from "antd";
import { ShopFilled } from "@ant-design/icons";

type Props = {
  showAds?: boolean;
};

export const ProductCard = ({ showAds }: Props) => {
  const [isLoading, setLoading] = useState(true);
  const { Title, Text, Paragraph } = Typography;

  return (
    <div className={styles.main} style={{ margin: 15 }}>
      <Link href={`/detailPage`} style={{ textDecoration: "none" }}>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              margin: 20,
            }}
          >
            <Avatar size={55} icon={<ShopFilled />} />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                marginLeft: 10,
              }}
            >
              <Title style={{ margin: 0 }} level={3} ellipsis={true}>
                NUS
              </Title>
              <Text style={{ margin: 0 }} ellipsis={true}>
                FullTime
              </Text>
            </div>
          </div>
          {showAds ? (
            <div
              style={{
                display: "flex",
                marginRight: 20,
              }}
            >
              <Button
                text="Ads"
                style={{ width: 40 }}
                type="secondary"
                size="small"
              />
            </div>
          ) : null}
        </div>
        <div>
          <Title style={{ margin: 20, marginTop: 0 }} level={3} ellipsis={true}>
            Cloud Computing
          </Title>
        </div>
        <div style={{ display: "flex" }}>
          <Paragraph
            style={{
              marginBottom: 20,
              marginLeft: 20,
              marginRight: 20,
            }}
            ellipsis={{ rows: 3 }}
          >
            Lorem ipsum Mi sit lorem mollis vitae quis curabitur vestibulum. Mi
            sit lorem mollis vitae quis curabitur vestibulum.Mi sit lorem
          </Paragraph>
        </div>
        <div
          style={{
            marginLeft: 20,
            marginRight: 20,
            flexDirection: "row",
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{ margin: 0, marginRight: 20, fontSize: 20 }}
            ellipsis={true}
          >
            Fee: $50009999
          </Text>
          <Button text="Sign Up" />
        </div>
      </Link>
    </div>
  );
};
