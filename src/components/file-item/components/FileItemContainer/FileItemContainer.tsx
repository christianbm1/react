import "./FileItemContainer.scss";

import React, { FC } from "react";
import { FileItemContainerProps } from "./FileItemContainerProps";

const FileItemContainer: FC<FileItemContainerProps> = (
  props: FileItemContainerProps,
) => {
  const { children, view, style, onClick } = props;
  const finalView = view || "list";

  return (
    <div
      className={`file-item-list-container file-item-list-${finalView}`}
      style={style}
      onClick={() => props.onClick}
    >
      {children}
    </div>
  );
};
export default FileItemContainer;
