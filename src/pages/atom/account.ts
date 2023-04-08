import { atom } from "recoil";
import type { Account } from "../api/authenticate";

const accountState = atom<Account | null>({
  key: "accountState",
  default: null,
});

export default accountState;
