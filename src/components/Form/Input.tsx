import { InputHTMLAttributes } from 'react';
import { useSubmit } from '../../hooks/useSubmit';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export const Input = ({ ...rest }: InputProps) => {
  const { name, setName } = useSubmit();

  return (
    <input
      value={name} onChange={(event) => setName(event.target.value)}
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
