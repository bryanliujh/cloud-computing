import React, { useState } from "react";
import { Input, Modal, Radio, Form } from "antd";
import Button from "./button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { postRegistration } from "../api/registration";
import { authenticateLogin } from "../api/authenticate";
import { useRecoilState } from "recoil";
import { accountState } from "../atom/account";

export default function Header() {
  const router = useRouter();
  const [form] = Form.useForm();
  const email = Form.useWatch("email", form);
  const skills = Form.useWatch("skills", form);
  const address = Form.useWatch("address", form);
  const password = Form.useWatch("password", form);
  const [premium, setPremium] = useState(true);

  const loginEmail = Form.useWatch("loginEmail", form);
  const loginPassword = Form.useWatch("loginPassword", form);

  /**
   * Login Modal Logic
   */
  const [openLogin, setOpenLogin] = useState(false);
  const [_, setAccountState] = useRecoilState(accountState);
  const [confirmLoginLoading, setConfirmLoginLoading] = useState(false);
  const showLoginModal = () => {
    setOpenLogin(true);
  };
  const handleLoginOk = async () => {
    setConfirmLoginLoading(true);
    const loginObj = await authenticateLogin({
      password: loginPassword,
      email: loginEmail,
    });
    setConfirmLoginLoading(false);
    if (loginObj?.authenticate) {
      setAccountState(loginObj);
      router.push("/recommendationPage");
      setOpenLogin(false);
    }
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
  const handleRegisterOk = async () => {
    setConfirmRegisterLoading(true);
    const isRegisteredSuccess = await postRegistration({
      password,
      premium,
      address,
      skills,
      email,
    });
    setConfirmRegisterLoading(false);
    if (isRegisteredSuccess) {
      setOpenRegister(false);
    }
  };
  const handleReigsterCancel = () => {
    setOpenRegister(false);
  };

  return (
    <div>
      <Form form={form}>
        {/* {Login Popup} */}
        <Modal
          open={openLogin}
          onOk={handleLoginOk}
          confirmLoading={confirmLoginLoading}
          onCancel={handleLoginCancel}
          okText={"Log In"}
        >
          <Form.Item name={"loginEmail"}>
            <Input
              size="large"
              placeholder="Enter Email"
              style={{ display: "flex", marginBottom: 20, marginTop: 20 }}
            />
          </Form.Item>
          <Form.Item name={"loginPassword"}>
            <Input.Password
              size="large"
              placeholder="Enter Password"
              style={{ display: "flex" }}
            />
          </Form.Item>
        </Modal>
        {/* {Register Popup} */}
        <Modal
          open={openRegister}
          onOk={handleRegisterOk}
          confirmLoading={confirmRegisterLoading}
          onCancel={handleReigsterCancel}
          okText={"Sign Up"}
        >
          <Form.Item name={"email"}>
            <Input
              size="large"
              placeholder="Enter Email"
              style={{ display: "flex", marginBottom: 20, marginTop: 20 }}
            />
          </Form.Item>
          <Form.Item name={"password"}>
            <Input.Password
              size="large"
              placeholder="Enter Password"
              style={{ display: "flex", marginBottom: 20 }}
            />
          </Form.Item>
          <Form.Item name={"skills"}>
            <Input
              size="large"
              placeholder="Enter Skills"
              style={{ display: "flex", marginBottom: 20 }}
            />
          </Form.Item>
          <Form.Item name={"address"}>
            <Input
              size="large"
              placeholder="Enter Address"
              style={{ display: "flex", marginBottom: 20 }}
            />
          </Form.Item>

          {/**check this */}
          <Form.Item name={"premium"}>
            <Radio.Group
              defaultValue="premium"
              buttonStyle="solid"
              onChange={(e) => {
                if (e.target.value === "premium") {
                  setPremium(true);
                } else {
                  setPremium(false);
                }
              }}
            >
              <Radio.Button value="premium">Premium Plan</Radio.Button>
              <Radio.Button value="basic">Basic Plan</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Modal>
      </Form>
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
