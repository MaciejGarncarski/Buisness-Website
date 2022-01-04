import { ReactNode, RefObject } from 'react';

export type Anchor = {
  id?: string;
};

export type AnchorArray = {
  ids: string[];
};

export type Card = {
  label: string;
  heading: string;
  description: string;
  Icon: ReactNode;
};

export type CardContainer = Card & {
  bg: string;
  border: string;
};

export type Link = {
  children: ReactNode;
  href: string;
  target: string;
  rel: string;
};

export type Multiply = {
  multiply: number;
};

export type Shape = Multiply & {
  ref: RefObject<HTMLElement>;
};

export type Offset = {
  offsetY: number;
};

export type Nav = AnchorArray & Offset;

export type Children = {
  children: ReactNode;
};

export type Label = {
  labelText: string;
};

export type ListItem = {
  children: ReactNode;
};

export interface NavLink {
  href: string;
  title: string;
}

export interface ContactLink extends NavLink {
  label: string;
  icon: ReactNode;
  isLink: boolean;
}
