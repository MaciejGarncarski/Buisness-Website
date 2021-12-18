import { ReactNode } from 'react';

export type Anchor = {
  id?: string;
};

export type AnchorArray = {
  ids: ['', 'about', 'gallery', 'contact'];
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

export type Nav = AnchorArray & {
  offsetY: number;
};

export type Children = {
  children: ReactNode;
};

export type Label = {
  labelText: string;
};

export type Image = {
  src: string;
  alt: string;
  className?: string;
  variants?: {
    visible: object;
    hidden: object;
  };
};

export type ListItem = {
  children: ReactNode;
};

export type ContactLink = {
  href: string;
  title: string;
  label: string;
  icon: ReactNode;
};
