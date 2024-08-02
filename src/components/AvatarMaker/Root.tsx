import { ReactNode } from "react";

export interface RootProps {
  children?: ReactNode;
}

export const Root = ({ children }: RootProps) => {
  return (
    <div className="relative">
      {children}
    </div>
  );
};
