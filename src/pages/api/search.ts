import { jsonToQueryString } from "../utils/apiUtils";

export type SearchParam = {
  limit?: number;
  title?: string;
};

export type Course = {
  Provider: string;
  Title: string;
  Course_Id: string;
  Duration: string;
  Price: string;
  Description: string;
  Index: string;
  Taggings: string;
  Category: string;
};

export const SEARCH_ENDPOINT =
  "https://qphqswhhki.execute-api.ap-southeast-1.amazonaws.com/dev/search";

export const searchCourse = async ({
  title,
  limit = 12,
}: SearchParam): Promise<Course[]> => {
  const params = jsonToQueryString({
    limit,
    title,
  });
  const data = await fetch(SEARCH_ENDPOINT + params, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await data.json();
  return json;
};
