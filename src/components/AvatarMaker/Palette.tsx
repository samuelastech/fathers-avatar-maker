import { SwiperSlide, Swiper } from "swiper/react";
import { AssetsEnum } from "./AssetsEnum";
import { BodyTone } from "./BodyTone";
import { useAvatar } from "../../hooks/useAvatar";
import { Miniature } from "./Miniature";
import { NoneAsset } from "./NoneAsset";

export const Palette = () => {
  const {
    setHair,
    setBeard,
    setMoustache,
    setGlasses,
    glassesSources,
    moustacheSources,
    beardSources,
    hairSources,
    palette,
    bodyTones,
  } = useAvatar();

  return (
    <Swiper
        className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-5/6"
        spaceBetween={0}
        slidesPerView={5}
      >
        {
          palette === AssetsEnum.Hair ? <SwiperSlide><NoneAsset set={setHair} /></SwiperSlide> :
          palette === AssetsEnum.Beard ? <SwiperSlide><NoneAsset set={setBeard} /></SwiperSlide> :
          palette === AssetsEnum.Moustache ? <SwiperSlide><NoneAsset set={setMoustache} /></SwiperSlide> :
          palette === AssetsEnum.Glasses ? <SwiperSlide><NoneAsset set={setGlasses} /></SwiperSlide> : null
        }
        {
          palette === AssetsEnum.Body ?
            bodyTones.map((tone, i) => {
              return <SwiperSlide key={i}><BodyTone tone={tone} /></SwiperSlide>;
            })
          : palette === AssetsEnum.Hair ?
            hairSources.map((image, i) => {
              return (
                <SwiperSlide key={i}>
                  <Miniature set={setHair} image={image.src} />
                </SwiperSlide>
              );
            })
          : palette === AssetsEnum.Beard ?
            beardSources.map((image, i) => {
              return (
                <SwiperSlide key={i}>
                  <Miniature set={setBeard} image={image.src} />
                </SwiperSlide>
              );
            })
          : palette === AssetsEnum.Moustache ?
            moustacheSources.map((image, i) => {
              return (
                <SwiperSlide key={i}>
                  <Miniature set={setMoustache} image={image.src} />
                </SwiperSlide>
              );
            }) 
          : glassesSources.map((image, i) => {
              return (
                <SwiperSlide key={i}>
                  <Miniature set={setGlasses} image={image.src} />
                </SwiperSlide>
              );
            })
        }
      </Swiper>
  );
}
