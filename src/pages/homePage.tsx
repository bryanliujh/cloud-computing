import Head from "next/head";
import ProductCard from "./components/card";
import Header from "./components/header";
import styles from "@/styles/Home.module.css";
import { Typography, Input, Modal, Radio } from "antd";

export default function Home() {
  const { Title } = Typography;

  return (
    <>
      <Head>
        <title>UpSkillz</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div style={{ margin: 50, display: "flex" }}>
          <p style={{ fontSize: 70, textAlign: "center", fontWeight: 700 }}>
            <span style={{ color: "#002ac0" }}>Find </span>
            and <span style={{ color: "#002ac0" }}>Match</span> the{" "}
            <span style={{ color: "#002ac0" }}>Right</span> Course
          </p>
        </div>
        <div className={styles.searchBox}>
          <Input.Search
            size="large"
            placeholder="Search Title or Keyword"
            enterButton
            style={{ display: "flex" }}
          />
        </div>
        <div style={{ marginBottom: 50 }}>
          <Title>Your Search Result</Title>
        </div>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className={styles.grid}>
            {/* {data &&
              data.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))} */}
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </main>
    </>
  );
}
