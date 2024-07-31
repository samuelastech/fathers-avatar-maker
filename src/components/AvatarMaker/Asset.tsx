import { ReactNode, useEffect } from "react";
import { useSwiperSlide } from "swiper/react";
import { Assets } from "./AssetsEnum";
import { useAvatar } from "../../hooks/useAvatar";

export interface AssetProps {
  icon?: ReactNode;
  asset?: Assets;
}

export const Asset = ({ icon, asset }: AssetProps) => {
  const swiperSlide = useSwiperSlide();
  const { setPalette } = useAvatar();

  useEffect(() => {
    if(swiperSlide.isActive && asset) {
      setPalette(asset);
    }
  }, [asset, setPalette, swiperSlide.isActive]);

  return (
    <button
      onClick={() => asset ? setPalette(asset) : null}
      type="button"
      className={`
        border-2
        border-gray-700
        bg-white
        rounded-full
        p-2
        text-2xl
        ${!swiperSlide.isActive ? 'scale-75' : null}
      `}>{icon}</button>
  );
};
