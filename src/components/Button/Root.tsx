import { ButtonHTMLAttributes, ReactNode } from "react";

export interface RootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  type?: 'button' | 'submit';
}

export const Root = ({ children, type = 'button', ...rest }: RootProps) => {
  const { disabled } = rest;

  return (
    <button {...rest} disabled={disabled} type={type} className={`
      ${disabled ? 'bg-gray-500' : 'bg-gradient-to-r from-pink-600 to-amber-500'}
      h-9
      px-4
      text-center
      pointer
      text-white
      rounded-3xl
    `}>{children}</button>
  );
};
