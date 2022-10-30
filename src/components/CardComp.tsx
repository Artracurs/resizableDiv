import React from "react";
import ButtonsComp from "./ButtonsComp";

type Props = {
  width: string
  height: string
};

export default function Card({height, width}: Props) {
  return (
    <>
    <ButtonsComp />
    <div style={{width, height, margin: '0 auto', border: '1px solid white'}}>
      <h1>
        CARD
      </h1>
    </div>
    </>
  );
}
