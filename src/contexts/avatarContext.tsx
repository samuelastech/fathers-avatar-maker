import { useState, createContext, ReactNode } from "react";
import { Assets } from "../components/AvatarMaker/AssetsEnum";
import defaultHair from '../assets/hair/straight/black.png';

const useValue = () => {
    const bodyTones = Array.from({length: 4}, (_, i) => i + 1);
    const [tone, setTone] = useState<number>(1);
    const [hair, setHair] = useState<string>(defaultHair);
    const [beard, setBeard] = useState<string>('');
    const [moustache, setMoustache] = useState<string>('');
    const [glasses, setGlasses] = useState<string>('');
    const [palette, setPalette] = useState<Assets>(Assets.Body);
    return {
        bodyTones,
        palette, setPalette,
        tone, setTone,
        hair, setHair,
        beard, setBeard,
        moustache, setMoustache,
        glasses, setGlasses,
    }
}

export const AvatarContext = createContext({} as ReturnType<typeof useValue>);

export interface AvatarProviderProps {
  children?: ReactNode;
}

export const AvatarProvider = ({ children }: AvatarProviderProps) => {
  return (
    <AvatarContext.Provider value={useValue()}>
      {children}
    </AvatarContext.Provider>
  );
};


