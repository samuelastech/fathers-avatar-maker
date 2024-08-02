import { ReactNode }from "react";
import { useSubmit } from "../../hooks/useSubmit";

export interface RootProps {
  children?: ReactNode;
}

export const Root = ({ children }: RootProps) => {
  const { handleSubmit } = useSubmit(); 
  
  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-full
        max-w-96
        h-[500px]
        rounded
        
        relative
        shadow-2xl
        
        flex-col
        flex
        items-center
        gap-4
        
        bg-white
      ">
      {children}
    </form>
  );
};
