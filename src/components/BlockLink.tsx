import React from "react";
import { BlockAnchor, BlockBody } from "../styles";

const BlockLink = ({ children, ...attributes }) => {
  return (
    <BlockBody theme={{ link: true }}>
      <BlockAnchor {...attributes}>{children}</BlockAnchor>
    </BlockBody>
  );
};

export default BlockLink;
