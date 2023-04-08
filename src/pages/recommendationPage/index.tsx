/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import HeaderAccount from "../components/headerAccount";
import styles from "@/styles/Home.module.css";
import ProductCard from "../components/card";
import { getRecommendation } from "@/api/recommendation";
import { Course } from "@/api/search";
import { useRecoilState } from "recoil";
import accountState from "@/atom/account";

export default function RecommendationPage() {
  const [courseList, setCourseList] = useState<Course[]>([]);
  const [account] = useRecoilState(accountState);

  useEffect(() => {
    const fetchRecommendation = async () => {
      const recommendation = await getRecommendation({
        courseLimit: 10,
        recommendLimit: 50,
      });
      const limit = account?.premium ? 24 : 8;
      setCourseList(recommendation.slice(0, limit));
    };
    fetchRecommendation();
  }, [account?.premium]);

  return (
    <>
      <HeaderAccount />

      <div className={styles.main}>
        <div style={{ margin: 50, display: "flex" }}>
          <p style={{ fontSize: 70, textAlign: "center", fontWeight: 700 }}>
            Your
            <span style={{ color: "#002ac0" }}> Recommended</span> Courses
          </p>
        </div>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className={styles.grid}>
            {courseList?.map?.((course, index) => (
              <ProductCard key={index} course={course} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
