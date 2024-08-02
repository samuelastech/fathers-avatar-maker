import { ReactNode } from "react"

export interface FieldsetProps {
  children: ReactNode;
}

export const Fieldset = ({ children }: FieldsetProps) => {
  return (
    <fieldset className="w-5/6 flex flex-col justify-between h-full">
      {children}
    </fieldset>
  );
}