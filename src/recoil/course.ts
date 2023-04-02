import { atom, selector } from "recoil";

export const courseState = atom({
  key: "courseState",
  default: null,
});

export const courseValue = selector({
  key: "courseValue",
  get: ({ get }) => {
    const course = get(courseState);
    return course;
  },
  cachePolicy_UNSTABLE: {
    eviction: "most-recent",
  },
});
