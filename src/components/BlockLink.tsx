import React from "react";
import { ThemedStyledFunction } from "styled-components";
import { BlockAnchor, BlockBody, Theme } from "../styles";

type BlockLinkProps = {
  children: React.ReactNode;
} & ThemedStyledFunction<"a", Theme>;

const BlockLink = ({ children, ...attributes }: BlockLinkProps) => {
  return (
    <BlockBody theme={{ link: true }}>
      <BlockAnchor {...attributes}>{children}</BlockAnchor>
    </BlockBody>
  );
};

export default BlockLink;
