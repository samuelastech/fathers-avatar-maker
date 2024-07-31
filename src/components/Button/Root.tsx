import { ButtonHTMLAttributes, ReactNode } from "react";

export interface RootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  type?: 'button' | 'submit';
}

export const Root = ({ children, type = 'button', ...rest }: RootProps) => {
  return (
    <button {...rest} type={type} className="
      h-9
      px-4
      text-center
      bg-gradient-to-r from-pink-600 to-amber-500
      pointer
      text-white
      rounded-3xl
    ">{children}</button>
  );
};
