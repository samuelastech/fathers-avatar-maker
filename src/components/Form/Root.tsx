import { ReactNode }from "react";

export interface RootProps {
  children?: ReactNode;
}

export const Root = ({ children }: RootProps) => {
  return (
    <form className="
      w-full
      max-w-96
      min-h-[450px]
      rounded
      
      relative
      shadow-2xl
      
      flex-col
      flex
      items-center
      gap-4
      
      bg-white">
      {children}
    </form>
  );
};
