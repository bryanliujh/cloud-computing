import { searchCourse } from "./search";
import type { Course } from "./search";

export type CourseParam = {
  limit?: number;
};

export type RecommendParam = {
  courseLimit?: number;
  recommendLimit?: number;
};

export const RECOMMENDATION_ENDPOINT =
  "https://crz1ih0820.execute-api.ap-southeast-1.amazonaws.com/dev/recommendation";

export const getRecommendation = async ({
  courseLimit = 12,
  recommendLimit = 8,
}: RecommendParam): Promise<Course[]> => {
  const courseList = await searchCourse({ limit: courseLimit });
  const courseIDList = courseList.map(({ Course_Id }) => Course_Id);
  const body = JSON.stringify({
    k_num: recommendLimit,
    courses: courseIDList,
  });
  const data = await fetch(RECOMMENDATION_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
  const json = await data.json();
  const recommendList = Object.values(json).map((course: any, index) => {
    return {
      Description: course?.description,
      Provider: course?.provider,
      Title: course?.title,
      Course_Id: course?.course_id,
      Duration: course?.duration,
      Price: course?.price,
      Index: index.toString(),
      Category: course?.category,
      Taggings: "",
    };
  });
  return recommendList;
};
