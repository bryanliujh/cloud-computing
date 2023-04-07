import { hashText } from "../utils/hashUtils";
import { jsonToQueryString } from "../utils/apiUtils";

export type Login = {
  password: string;
  email: string;
};

export const LOGIN_ENDPOINT =
  "https://hjvwi5jmcl.execute-api.ap-southeast-1.amazonaws.com/dev/authentication";

export const authenticateLogin = async ({ password, email }: Login) => {
  const params = jsonToQueryString({
    password: hashText(password),
    email,
  });
  const data = await fetch(LOGIN_ENDPOINT + params, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await data.json();
  return json?.authenticate;
};
