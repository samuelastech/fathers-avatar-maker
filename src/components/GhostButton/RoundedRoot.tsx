import { HTMLAttributes, ReactNode } from "react";

export interface RoundedRootProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const RoundedRoot = ({ children, ...rest }: RoundedRootProps) => {
  return (
    <button className="rounded-full bg-gradient-to-r from-pink-600 to-amber-500 h-9 w-9" {...rest}>
      <div className="bg-white rounded-full h-8 w-8 m-auto flex justify-center items-center">
        {children}
      </div>
    </button>
  );
};
