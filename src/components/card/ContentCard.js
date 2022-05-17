import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect, useMemo } from "react";

const fetchContent = async (content) => {
  const data = await fetch(`${content}/getProductInfo`);
  const dataJSON = await data.json();
  return dataJSON;
};

// MUI > Card > // MUI > Card > Multi Action Area Card
export function ContentCard({ content: inputContent, name, description }) {
  const content = useMemo(() => {
    let temp = inputContent.split("?")[0];
    temp = temp.replace("http://", "");
    temp = temp.replace("https://", "");
    temp = temp.replace("www.", "");
    temp = temp.split("/");
    return `http://${temp[0]}/${temp[1]}/${temp[2]}`;
  }, [inputContent]);
  const image = `${content}/getProductLogo?type=3x2`;

  return (
    <div>
      <a href={content} target="_blank" rel="noreferrer">
        <img src={image} style={{ width: "100%" }} alt={content.type} />
      </a>
    </div>
  );
}
