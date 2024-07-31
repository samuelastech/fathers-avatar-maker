import { ReactNode } from "react";

export interface ButtonsProps {
  children?: ReactNode;
}

export const Buttons = ({ children }: ButtonsProps) => {
  return (
    <div className="my-7 flex w-full gap-2 justify-center">
      {children}
    </div>
  );
};
