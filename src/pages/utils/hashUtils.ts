import { sha256 } from "js-sha256";

const hashText = (text: string) => {
  return sha256(text);
};

export default hashText;
