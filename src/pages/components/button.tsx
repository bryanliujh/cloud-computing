import React from "react";
import { theme } from "antd";
import styles from "@/styles/Button.module.css";
import { CSSProperties } from "react";

import { Button as AntButton } from "antd";

type Props = {
  text: string;
  type?: "secondary" | "primary";
  style?: CSSProperties;
  size?: "small" | "middle" | "large";
};

export const Button = ({
  text,
  style,
  type = "primary",
  size = "large",
}: Props) => {
  const className = type === "primary" ? styles.primary : styles.secondary;
  return (
    <AntButton className={className} style={style} size={size}>
      {text}
    </AntButton>
  );
};
