import React from "react";
import { BlockAnchor, BlockBody } from "../styles";

const BlockLink = ({ children, ...attributes }) => {
  return (
    <BlockBody>
      <BlockAnchor {...attributes}>{children}</BlockAnchor>
    </BlockBody>
  );
};

export default BlockLink;
