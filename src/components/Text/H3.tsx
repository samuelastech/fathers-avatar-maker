import { ReactNode } from "react";

export interface H3Props {
  children?: ReactNode;
}

export const H3 = ({ children }: H3Props) => {
  return (
    <h3 className="text-center mb-3 text-gray-600 font-bold text-2xl">{children}</h3>
  );
};
