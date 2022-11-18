import React from "react";
import { Footer } from "../styles";

const SHORT_CHARS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function toShort(valu: number): string {
  return (
    valu
      .toString()
      .match(/.{1,2}/g)
      ?.map((s) => SHORT_CHARS[parseInt(s)])
      .join("") ?? ""
  );
}

function getTimestamp(seconds: number): string {
  const date = new Date(seconds * 1000);
  const dateArr = [
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
  ];

  return dateArr.map(toShort).join(".") + "-0";
}

const FooterInfo = ({ timestamp }) => {
  return (
    <Footer>
      <span>
        &copy;2022 kjhoerr@https://submelon.dev/:
        {getTimestamp(parseInt(timestamp))}
      </span>
    </Footer>
  );
};

export default FooterInfo;
