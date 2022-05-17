import { useMemo } from "react";

const getUU = (inputContent) => {
  let temp = inputContent.split("?")[0];
  temp = temp.replace("http://", "");
  temp = temp.replace("https://", "");
  temp = temp.replace("www.", "");
  temp = temp.split("/");
  return `http://${temp[0]}/${temp[1]}/${temp[2]}`;
};

const getYT = (queryInput) => {
  const query = queryInput?.split("?")?.[1];
  return query
    ? (/^[?#]/.test(query) ? query.slice(1) : query)
        .split("&")
        .reduce((params, param) => {
          let [key, value] = param.split("=");
          params[key] = value
            ? decodeURIComponent(value.replace(/\+/g, " "))
            : "";
          return params;
        }, {})
    : {};
};

// MUI > Card > // MUI > Card > Multi Action Area Card
export function ContentCard({ content: inputContent, type }) {
  const image = useMemo(() => {
    if (type === "Unicorn University link") {
      return `${getUU(inputContent)}/getProductLogo?type=3x2`;
    } else {
      return `https://img.youtube.com/vi/${
        getYT(inputContent)["v"]
      }/default.jpg`;
    }
  }, [inputContent, type]);

  return (
    <a href={inputContent} target="_blank" rel="noreferrer">
      <img src={image} style={{ width: "100%" }} alt={type} />
    </a>
  );
}
