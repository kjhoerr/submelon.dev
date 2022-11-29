import React from "react";
import { BlockAnchor, BlockBody } from "../styles";

type BlockLinkProps = {
  children?: React.ReactNode;
  as?: undefined;
} & React.LinkHTMLAttributes<HTMLAnchorElement>;

const BlockLink = ({ children, ...attributes }: BlockLinkProps) => {
  return (
    <BlockBody theme={{ link: true }}>
      <BlockAnchor {...attributes}>{children}</BlockAnchor>
    </BlockBody>
  );
};

export default BlockLink;
