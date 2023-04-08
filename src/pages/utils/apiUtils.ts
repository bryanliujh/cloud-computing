export default function jsonToQueryString(
  json: Record<
    string,
    string | null | undefined | number | boolean | Array<any>
  >,
  skipQuestionMark = false
): string {
  if (!json) {
    return "";
  }
  const keys = Object.keys(json).filter((key) => {
    const val = json[key];
    return typeof val !== "undefined" && val !== null;
  });
  if (!keys.length) {
    return "";
  }
  return (
    (skipQuestionMark ? "" : "?") +
    keys
      .sort()
      .map(function (key) {
        return (
          encodeURIComponent(key) +
          "=" +
          // undefined | null is already filtered out above
          encodeURIComponent(json[key] as string | number | boolean)
        );
      })
      .join("&")
  );
}
