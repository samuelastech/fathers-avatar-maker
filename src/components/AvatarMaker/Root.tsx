import { ReactNode } from "react";

export interface RootProps {
  children?: ReactNode;
}

export const Root = ({ children }: RootProps) => {
  return (
    <div className="border-t-[35px] border-x-2 border-b-2 border-gray-500 rounded relative w-full" style={{ borderStyle: 'solid' }}>
      {children}
    </div>
  );
};
