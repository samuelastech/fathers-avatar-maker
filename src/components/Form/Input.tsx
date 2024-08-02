import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  setValue?: (value: string) => void;
}

export const Input = ({ value, setValue, ...rest }: InputProps) => {
  return (
    <input
      value={value} onChange={(event) => setValue && setValue(event.target.value)}
      className="
        w-full
        py-2
        border-b
        border-gray-400
        border-solid
        bg-transparent
        placeholder:text-gray-400
        outline-none
        focus:border-b-pink-600
        text-center
      "
      {...rest}
    />
  );
};
