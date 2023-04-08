import Link from "next/link";
import Button from "./button";
import styles from "@/styles/Card.module.css";
import { Avatar, Typography } from "antd";
import { ShopFilled } from "@ant-design/icons";
import { Course } from "../api/search";
import { useRecoilState } from "recoil";
import accountState from "../../atom/account";

type Props = {
  course?: Course;
  index?: number;
};

const ProductCard = ({ course, index }: Props) => {
  const { Title, Text, Paragraph } = Typography;
  const [account] = useRecoilState(accountState);
  const showAds = !account?.premium && index === 2;

  return (
    <div className={styles.main} style={{ margin: 15 }}>
      <Link
        href={{ pathname: `/detailPage`, query: course }}
        style={{ textDecoration: "none" }}
      >
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
                width: 165,
                overflow: "hidden",
              }}
            >
              <Title style={{ margin: 0 }} level={3} ellipsis={{ rows: 1 }}>
                {`${course?.Provider}`}
              </Title>
              <Text
                style={{ margin: 0, display: "flex", flex: 1 }}
                ellipsis={true}
              >
                {`${course?.Duration} Hour`}
              </Text>
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
          </div>
        </div>
        <div>
          <Title style={{ margin: 20, marginTop: 0 }} level={3} ellipsis={true}>
            {`${course?.Title}`}
          </Title>
        </div>
        <div style={{ display: "flex" }}>
          <Paragraph
            style={{
              marginBottom: showAds ? 20 : 40,
              marginLeft: 20,
              marginRight: 20,
            }}
            ellipsis={{ rows: 3 }}
          >
            {`${course?.Description}`}
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
            {`Fee: $${course?.Price}`}
          </Text>
          <Button text="See More" />
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
