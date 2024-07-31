import { useState, createContext, ReactNode } from "react";

const useValue = () => {
  const [submit, setSubmit] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  return { submit, setSubmit, name, setName };
}

export const SubmitContext = createContext({} as ReturnType<typeof useValue>);

export interface AvatarProviderProps {
  children?: ReactNode;
}

export const SubmitProvider = ({ children }: AvatarProviderProps) => {
  return (
    <SubmitContext.Provider value={useValue()}>
      {children}
    </SubmitContext.Provider>
  );
};


