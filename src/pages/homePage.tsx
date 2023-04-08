import Head from "next/head";
import ProductCard from "./components/card";
import styles from "@/styles/Home.module.css";
import { Typography, Input } from "antd";
import { useEffect, useState } from "react";
import { searchCourse } from "./api/search";
import ActionBar from "./components/actionBar";

import type { Course } from "./api/search";

export default function Home() {
  const { Title } = Typography;
  const [courseList, setCourseList] = useState<Course[] | never[]>([]);
  const [titleFilter, setTitleFilter] = useState<string>("");

  useEffect(() => {
    const fetchCourse = async () => {
      const searchList = await searchCourse({ limit: 12, title: titleFilter });
      setCourseList(searchList);
    };
    fetchCourse();
  }, [titleFilter]);

  return (
    <>
      <Head>
        <title>UpSkillz</title>
      </Head>
      <ActionBar />
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
            placeholder="Search Full Title"
            enterButton
            style={{ display: "flex" }}
            onSearch={(value) => {
              setTitleFilter(value);
            }}
          />
        </div>
        <div style={{ marginBottom: 50 }}>
          <Title>Your Search Result</Title>
        </div>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className={styles.grid}>
            {courseList?.map?.((course, index) => {
              return <ProductCard course={course} key={index} index={index} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
}
