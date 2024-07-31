import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export const Input = ({ ...rest }: InputProps) => {
  return (
    <input
      
      className="
        w-full
        py-2
        border-b
        border-gray-400
        border-solid
        bg-transparent
        placeholder:text-gray-400
        outline-none
      "
      {...rest}
    />
  );
};
