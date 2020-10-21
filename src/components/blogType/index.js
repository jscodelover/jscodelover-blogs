import React from "react";
import Card from "./card";
import Line from "./line";
import List from "./list";

function BlogType(props) {
  const { type } = props;
  switch (type) {
    case "1":
      return <Card {...props} />;
    case "2":
      return <List {...props} />;
    case "3":
      return <Line {...props} />;
    default:
      return <Card {...props} />;
  }
}

export default BlogType;
