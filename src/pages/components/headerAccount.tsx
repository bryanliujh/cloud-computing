import React from "react";
import Button from "./button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function HeaderAccount() {
  const router = useRouter();

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            margin: 50,
          }}
        >
          <Link href={`/`} style={{ textDecoration: "none" }}>
            <Image alt="logo" src="/Logo.png" width={125} height={59} />
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: 50,
          }}
        >
          <Button
            text="Log Out"
            style={{ width: 100, height: 50, marginRight: 15 }}
            type={"secondary"}
            onClick={() => {
              router.push("/");
            }}
          />
        </div>
      </div>
    </div>
  );
}
