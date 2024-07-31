import { useSwiperSlide } from "swiper/react";
import { useEffect } from "react";

export interface MiniatureProps {
  image: string;
  set: (image: string) => void;
}

export const Miniature = ({ image, set }: MiniatureProps) => {
  const swiperSlide = useSwiperSlide();

  useEffect(() => {
    if(swiperSlide.isActive) {
      set(image);
    }
  }, [swiperSlide.isActive, image, set]);

  return (
    <img
      onClick={() => set(image)}
      src={image}
      style={{borderStyle: 'solid'}}
      className="
        w-10
        h-10
        rounded-full
        bg-white
        border
        p-1
        border-gray-700
        cursor-pointer
        shadow
      "
    />
  );
};
