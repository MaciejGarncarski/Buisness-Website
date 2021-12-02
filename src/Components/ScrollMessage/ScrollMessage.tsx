import React from "react";
import Message from "./ScrollMessage.styles";

type TMultiplayer = {
  multiply: number;
};

const ScrollMessage = function ({ multiply }: TMultiplayer) {
  return (
    <Message style={{ transform: `translate3d(0, ${multiply}px, 0)` }}>
      scroll down
      <br />
      for more
    </Message>
  );
};

export default ScrollMessage;
