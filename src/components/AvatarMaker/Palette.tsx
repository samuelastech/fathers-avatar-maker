import { SwiperSlide, Swiper } from "swiper/react";
import { Assets } from "./AssetsEnum";
import { BodyTone } from "./BodyTone";
import { useAvatar } from "../../hooks/useAvatar";
import { useEffect, useState } from "react";
import { Miniature } from "./Miniature";
import { NoneAsset } from "./NoneAsset";

interface ImageModule {
  default: string;
}

type ImageSource = {
  path: string;
  src: string;
};

const curlyHair = import.meta.glob('../../assets/hair/curly/*.{png,jpg,jpeg,gif}');
const baldHair = import.meta.glob('../../assets/hair/bald/*.{png,jpg,jpeg,gif}');
const straightHair = import.meta.glob('../../assets/hair/straight/*.{png,jpg,jpeg,gif}');
const quifftHair = import.meta.glob('../../assets/hair/quiff/*.{png,jpg,jpeg,gif}');

const beards = import.meta.glob('../../assets/beard/*.{png,jpg,jpeg,gif}');
const moustaches = import.meta.glob('../../assets/moustache/*.{png,jpg,jpeg,gif}');
const glasses = import.meta.glob('../../assets/glasses/*.{png,jpg,jpeg,gif}');

export const Palette = () => {
  const { palette, bodyTones } = useAvatar();
  const [hairSources, setHairSources] = useState<ImageSource[]>([]);
  const [beardSources, setBeardSources] = useState<ImageSource[]>([]);
  const [moustacheSources, setMoustacheSources] = useState<ImageSource[]>([]);
  const [glassesSources, setGlassesSources] = useState<ImageSource[]>([]);
  const { setHair, setBeard, setMoustache, setGlasses } = useAvatar();

  useEffect(() => {
    const loadImages = async () => {
      const loadedCurlyHair = await Promise.all(
        Object.entries(curlyHair).map(async ([path, importImage]) => {
          const { default: src } = (await importImage()) as ImageModule;
          return { path, src };
        })
      );

      const loadedBaldHair = await Promise.all(
        Object.entries(baldHair).map(async ([path, importImage]) => {
          const { default: src } = (await importImage()) as ImageModule;
          return { path, src };
        })
      );

      const loadedStraightHair = await Promise.all(
        Object.entries(straightHair).map(async ([path, importImage]) => {
          const { default: src } = (await importImage()) as ImageModule;
          return { path, src };
        })
      );

      const loadedQuiffHair = await Promise.all(
        Object.entries(quifftHair).map(async ([path, importImage]) => {
          const { default: src } = (await importImage()) as ImageModule;
          return { path, src };
        })
      );

      const loadedBeards = await Promise.all(
        Object.entries(beards).map(async ([path, importImage]) => {
          const { default: src } = (await importImage()) as ImageModule;
          return { path, src };
        })
      );

      const loadedMoustaches = await Promise.all(
        Object.entries(moustaches).map(async ([path, importImage]) => {
          const { default: src } = (await importImage()) as ImageModule;
          return { path, src };
        })
      );

      const loadedGlasses = await Promise.all(
        Object.entries(glasses).map(async ([path, importImage]) => {
          const { default: src } = (await importImage()) as ImageModule;
          return { path, src };
        })
      );
      
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

  if (palette === Assets.Body) {
    return (
      <Swiper
        className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-5/6"
        spaceBetween={30}
        slidesPerView={4}
      >
        {bodyTones.map((tone, i) => <SwiperSlide key={i}><BodyTone tone={tone} /></SwiperSlide>)}
      </Swiper>
    );
  } else if (palette === Assets.Hair) {
    return (
      <Swiper
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-5/6"
        spaceBetween={30}
        slidesPerView={3}
      >
        <SwiperSlide><NoneAsset set={setHair} /></SwiperSlide>
        {hairSources.map((image, i) => {
          return <SwiperSlide key={i}><Miniature set={setHair} image={image.src} /></SwiperSlide>
        })}
      </Swiper>
    );
  } else if (palette === Assets.Beard) {
    return (
      <Swiper
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-5/6"
        spaceBetween={30}
        slidesPerView={3}
      >
        <SwiperSlide><NoneAsset set={setBeard} /></SwiperSlide>
        {beardSources.map((image, i) => {
          return <SwiperSlide key={i}><Miniature set={setBeard} image={image.src} /></SwiperSlide>
        })}
      </Swiper>
    );
  } else if (palette === Assets.Moustache) {
    return (
      <Swiper
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-5/6"
        spaceBetween={30}
        slidesPerView={3}
      >
        <SwiperSlide><NoneAsset set={setMoustache} /></SwiperSlide>
        {moustacheSources.map((image, i) => {
          return <SwiperSlide key={i}><Miniature set={setMoustache} image={image.src} /></SwiperSlide>
        })}
      </Swiper>
    );
  } else {
    return (
      <Swiper
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-5/6"
        spaceBetween={30}
        slidesPerView={3}
      >
        <SwiperSlide><NoneAsset set={setGlasses} /></SwiperSlide>
        {glassesSources.map((image, i) => {
          return <SwiperSlide key={i}><Miniature set={setGlasses} image={image.src} /></SwiperSlide>
        })}
      </Swiper>
    );
  }
}
