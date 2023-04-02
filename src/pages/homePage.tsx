import Head from "next/head";
import { ProductCard } from "./components/card";
import { Button } from "./components/button";
import styles from "@/styles/Home.module.css";
import { Typography, Input } from "antd";

export default function Home() {
  const { Title } = Typography;
  return (
    <>
      <Head>
        <title>UpSkillz</title>
      </Head>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: 50,
        }}
      >
        <Button
          text="Log In"
          style={{ width: 100, height: 50, marginRight: 15 }}
          type={"secondary"}
        />
        <Button
          text="Register Now"
          style={{ width: 150, height: 50 }}
          type={"secondary"}
        />
      </div>
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
