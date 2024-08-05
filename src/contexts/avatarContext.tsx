import { useState, createContext, ReactNode, useEffect } from "react";
import { AssetsEnum } from "../components/AvatarMaker/AssetsEnum";
import { ImageSource, importFiles } from "../helpers/importFiles";
import defaultHair from '../assets/hair/straight/black.png';

const curlyHair = import.meta.glob('../assets/hair/curly/*.{png,jpg,jpeg,gif}');
const baldHair = import.meta.glob('../assets/hair/bald/*.{png,jpg,jpeg,gif}');
const straightHair = import.meta.glob('../assets/hair/straight/*.{png,jpg,jpeg,gif}');
const quiffHair = import.meta.glob('../assets/hair/quiff/*.{png,jpg,jpeg,gif}');

const beards = import.meta.glob('../assets/beard/*.{png,jpg,jpeg,gif}');
const moustaches = import.meta.glob('../assets/moustache/*.{png,jpg,jpeg,gif}');
const glassesAccessory = import.meta.glob('../assets/glasses/*.{png,jpg,jpeg,gif}');

const useValue = () => {
  const bodyTones = Array.from({ length: 4 }, (_, i) => i + 1);
  const [tone, setTone] = useState<number>(1);
  const [hair, setHair] = useState<string>(defaultHair);
  const [beard, setBeard] = useState<string>('')  ;
  const [moustache, setMoustache] = useState<string>('');
  const [glasses, setGlasses] = useState<string>('');
  const [palette, setPalette] = useState<AssetsEnum>(AssetsEnum.Body);
  const [frame, setFrame] = useState<string>('');

  // Images sources
  const [hairSources, setHairSources] = useState<ImageSource[]>([]);
  const [beardSources, setBeardSources] = useState<ImageSource[]>([]);
  const [moustacheSources, setMoustacheSources] = useState<ImageSource[]>([]);
  const [glassesSources, setGlassesSources] = useState<ImageSource[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const loadedCurlyHair = await Promise.all(importFiles(curlyHair));
      const loadedBaldHair = await Promise.all(importFiles(baldHair));
      const loadedStraightHair = await Promise.all(importFiles(straightHair));
      const loadedQuiffHair = await Promise.all(importFiles(quiffHair));
      const loadedBeards = await Promise.all(importFiles(beards));
      const loadedMoustaches = await Promise.all(importFiles(moustaches));
      const loadedGlasses = await Promise.all(importFiles(glassesAccessory));
      
      const allLoadedHairImages = [
        ...loadedCurlyHair,
        ...loadedBaldHair,
        ...loadedStraightHair,
        ...loadedQuiffHair,
      ];

      setHairSources(allLoadedHairImages);
      setBeardSources(loadedBeards);
      setMoustacheSources(loadedMoustaches);
      setGlassesSources(loadedGlasses);
    };

    loadImages();
  }, []);

  return {
    bodyTones,
    palette, setPalette,
    tone, setTone,
    hair, setHair,
    beard, setBeard,
    frame, setFrame,
    moustache, setMoustache,
    glasses, setGlasses,
    hairSources,
    beardSources,
    moustacheSources,
    glassesSources,
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
