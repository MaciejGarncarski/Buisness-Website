import React from "react";
import Anchor from "./Link.styles";

type PLink = {
  children: React.ReactNode;
  href: string;
  target: string;
  rel: string;
};

const Link = function ({ href, target, rel, children }: PLink) {
  return (
    <Anchor href={href} target={target} rel={rel}>
      {children}
    </Anchor>
  );
};

export default Link;
