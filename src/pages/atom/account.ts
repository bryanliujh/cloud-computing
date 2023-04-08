import { atom } from "recoil";
import type { Account } from "../api/authenticate";

export const accountState = atom<Account | null>({
  key: "accountState",
  default: null,
});
