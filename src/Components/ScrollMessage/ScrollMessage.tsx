import React from "react";
import Message from "./ScrollMessage.styles";

type TMultiplayer = {
  multiplayer: number;
};

const ScrollMessage = function ({ multiplayer }: TMultiplayer) {
  return (
    <Message style={{ transform: `translate3d(0, ${multiplayer}px, 0)` }}>
      scroll down
      <br />
      for more
    </Message>
  );
};

export default ScrollMessage;
