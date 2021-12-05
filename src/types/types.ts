export type TypeId = {
  id: string;
  offsetY?: number;
};

export type TIdArray = {
  ids: string[];
};

export type TCard = {
  label: string;
  heading: string;
  description: string;
  icon: React.ReactNode;
};

export type TCardContainer = {
  children: React.ReactNode;
  bg: string;
  border: string;
};

export type TLink = {
  children: React.ReactNode;
  href: string;
  target: string;
  rel: string;
};

export type TMultiply = {
  multiply: number;
};
