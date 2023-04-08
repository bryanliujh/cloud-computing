import React from "react";
import { useRecoilState } from "recoil";
import accountState from "../../atom/account";
import HeaderAccount from "./headerAccount";
import Header from "./header";

export default function ActionBar() {
  const [account] = useRecoilState(accountState);
  return account ? <HeaderAccount /> : <Header />;
}
