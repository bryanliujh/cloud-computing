import React, { useState } from "react";
import { Input, Modal, Radio } from "antd";
import { Button } from "./button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  /**
   * Login Modal Logic
   */
  const [openLogin, setOpenLogin] = useState(false);
  const [confirmLoginLoading, setConfirmLoginLoading] = useState(false);
  const showLoginModal = () => {
    setOpenLogin(true);
  };
  const handleLoginOk = () => {
    setConfirmLoginLoading(true);
    setTimeout(() => {
      setOpenLogin(false);
      setConfirmLoginLoading(false);
    }, 2000);
    router.push("/recommendationPage");
  };
  const handleLoginCancel = () => {
    setOpenLogin(false);
  };

  /**
   * Register Modal Logic
   */
  const [openRegister, setOpenRegister] = useState(false);
  const [confirmRegisterLoading, setConfirmRegisterLoading] = useState(false);
  const showRegisterModal = () => {
    setOpenRegister(true);
  };
  const handleRegisterOk = () => {
    setConfirmRegisterLoading(true);
    setTimeout(() => {
      setOpenRegister(false);
      setConfirmRegisterLoading(false);
    }, 2000);
  };
  const handleReigsterCancel = () => {
    setOpenRegister(false);
  };

  return (
    <div>
      {/* {Login Popup} */}
      <Modal
        open={openLogin}
        onOk={handleLoginOk}
        confirmLoading={confirmLoginLoading}
        onCancel={handleLoginCancel}
        okText={"Log In"}
      >
        <Input
          size="large"
          placeholder="Enter Email"
          style={{ display: "flex", marginBottom: 20, marginTop: 20 }}
        />
        <Input.Password
          size="large"
          placeholder="Enter Password"
          style={{ display: "flex" }}
        />
      </Modal>
      {/* {Register Popup} */}
      <Modal
        open={openRegister}
        onOk={handleRegisterOk}
        confirmLoading={confirmRegisterLoading}
        onCancel={handleReigsterCancel}
        okText={"Sign Up"}
      >
        <Input
          size="large"
          placeholder="Enter Email"
          style={{ display: "flex", marginBottom: 20, marginTop: 20 }}
        />
        <Input.Password
          size="large"
          placeholder="Enter Password"
          style={{ display: "flex", marginBottom: 20 }}
        />
        <Input
          size="large"
          placeholder="Enter Skills"
          style={{ display: "flex", marginBottom: 20 }}
        />
        <Input
          size="large"
          placeholder="Enter Address"
          style={{ display: "flex", marginBottom: 20 }}
        />
        <Radio.Group defaultValue="a" buttonStyle="solid">
          <Radio.Button value="a">Premium Plan</Radio.Button>
          <Radio.Button value="b">Basic Plan</Radio.Button>
        </Radio.Group>
      </Modal>
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
            text="Log In"
            style={{ width: 100, height: 50, marginRight: 15 }}
            type={"secondary"}
            onClick={showLoginModal}
          />
          <Button
            text="Register Now"
            style={{ width: 150, height: 50 }}
            type={"secondary"}
            onClick={showRegisterModal}
          />
        </div>
      </div>
    </div>
  );
}
