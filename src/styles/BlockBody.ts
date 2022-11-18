import styled from "styled-components";
import BlockAnchor from "./BlockAnchor";

export default styled.div`
  & + & {
    margin-top: 3px;
  }

  background-color: #fff;
  border: 1px #000 solid;
  border-left: 3px #000 solid;
  border-right: 3px #000 solid;

  padding: ${(props) => (props.theme.link ? "0" : "4px 8px")};

  & > ${BlockAnchor} {
    &:hover {
      background-color: #ddd;
      color: #222;
    }
  }
  &:last-child,
  &:last-child > ${BlockAnchor} {
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
  }
`;
