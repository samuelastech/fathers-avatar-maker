import { ReactNode } from "react";

export interface IconProps {
  element?: ReactNode;
}

export const Icon = ({ element: Icon }: IconProps) => {
  return Icon && Icon;
};
