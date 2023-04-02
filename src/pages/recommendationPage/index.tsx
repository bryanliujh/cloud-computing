/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Image, Typography } from "antd";
import HeaderAccount from "../components/headerAccount";
import styles from "@/styles/Home.module.css";
import { ProductCard } from "../components/card";

export default function RecommendationPage() {
  const { Title } = Typography;
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
      </div>
    </>
  );
}
