// export const URL_SEARCH_API =
//   "https://mock-api.ssg-wsg.sg/courses/directory?pageSize=2&page=1&keyword=engineer";

import { mockCloudComputingCourse } from "./mock";

export const getSearchCourse = (searchKeywords: string) => {
  return [mockCloudComputingCourse, mockCloudComputingCourse];
};

export const saveSearchKeywords = (searchKeywords: string) => {};
