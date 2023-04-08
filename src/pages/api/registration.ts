import hashText from "../utils/hashUtils";

export type Registration = {
  password: string;
  premium: boolean;
  address: string;
  skills: string;
  email: string;
};

export const REGISTRATION_ENDPOINT =
  "https://2jqfzfie1e.execute-api.ap-southeast-1.amazonaws.com/dev/registration";

export const postRegistration = async ({
  password,
  premium,
  address,
  skills,
  email,
}: Registration) => {
  const data = await fetch(REGISTRATION_ENDPOINT, {
    method: "POST",
    body: JSON.stringify({
      password: hashText(password),
      premium,
      address,
      skills,
      email,
    }),
  });
  const json = await data.json();
  return json?.error_message === "success";
};
