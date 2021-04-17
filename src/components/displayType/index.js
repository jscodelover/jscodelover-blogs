import * as React from "react";
import { StyleView } from "./display-style";
import { IconGrid, IconList1, IconList2 } from "@components/icons";

function DisplayType(props) {
  const [viewType, handleViewType] = React.useState("2");

  function handleClick(e) {
    const { type } = e.target.dataset;
    props.handleType(type);
    handleViewType(type);
  }

  return (
    <StyleView>
      <li data-selected={viewType === "1" ? "true" : "false"}>
        <button data-type="1" className="view-type" onClick={handleClick}>
          <IconGrid />
        </button>
      </li>
      <li data-selected={viewType === "2" ? "true" : "false"}>
        <button data-type="2" className="view-type" onClick={handleClick}>
          <IconList1 />
        </button>
      </li>
      <li data-selected={viewType === "3" ? "true" : "false"}>
        <button data-type="3" className="view-type" onClick={handleClick}>
          <IconList2 />
        </button>
      </li>
    </StyleView>
  );
}

export default DisplayType;
