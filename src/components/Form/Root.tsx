import { ReactNode }from "react";
import { useSubmit } from "../../hooks/useSubmit";

export interface RootProps {
  children?: ReactNode;
}

export const Root = ({ children }: RootProps) => {
  const { setSubmit } = useSubmit(); 

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmit(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
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
        
        bg-white
      ">
      {children}
    </form>
  );
};
