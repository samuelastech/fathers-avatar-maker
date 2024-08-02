import { useState, createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useAvatar } from "../hooks/useAvatar";

const useValue = () => {
  const [name, setName] = useState<string>('');
  const [step, setStep] = useState<number>(1);
  const navigate = useNavigate();
  const { frame, tone } = useAvatar();

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/product', { state: { dataURL: frame, tone } });
  };
  
  return {
    name,
    setName,
    next,
    back,
    step,
    handleSubmit
  };
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


