import { sha256 } from "js-sha256";

export const hashText = (text: string) => {
  return sha256(text);
};
