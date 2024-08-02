// Icons
import { FaArrowLeft } from "react-icons/fa";
import { GiBeard } from "react-icons/gi";
import { IoIosBody } from "react-icons/io";
import { IoGlassesOutline } from "react-icons/io5";
import { PiHairDryerFill } from "react-icons/pi";
import { TbMoustache } from "react-icons/tb";

// Swiper
import 'swiper/css';
import { SwiperSlide, Swiper } from "swiper/react";

// Components
import { Form, AvatarMaker, AssetsEnum, Button, GhostButton } from "../../../components";

import { useSubmit } from "../../../hooks/useSubmit";

export const Step2 = () => {
  const { back } = useSubmit();

  return (
    <Form.Fieldset>
      <Form.Legend>Personalize o avatar</Form.Legend>
      <AvatarMaker.Root>
        <AvatarMaker.Frame />
        <Swiper
          className="absolute -bottom-4 left-0 w-full"
          spaceBetween={0}
          slidesPerView={5}
        >
          <SwiperSlide><AvatarMaker.Asset asset={AssetsEnum.Body} icon={<IoIosBody />} /></SwiperSlide>
          <SwiperSlide><AvatarMaker.Asset asset={AssetsEnum.Hair} icon={<PiHairDryerFill />} /></SwiperSlide>
          <SwiperSlide><AvatarMaker.Asset asset={AssetsEnum.Beard} icon={<GiBeard />} /></SwiperSlide>
          <SwiperSlide><AvatarMaker.Asset asset={AssetsEnum.Moustache} icon={<TbMoustache />} /></SwiperSlide>
          <SwiperSlide><AvatarMaker.Asset asset={AssetsEnum.Glasses} icon={<IoGlassesOutline />} /></SwiperSlide>
        </Swiper>
        <AvatarMaker.Palette />
        <AvatarMaker.CurrentAsset />
      </AvatarMaker.Root>
      <Form.Buttons>
        <GhostButton.RoundedRoot onClick={back}>
          <GhostButton.Icon element={<FaArrowLeft className="text-pink-600" />} />
        </GhostButton.RoundedRoot>
        <Button.Root type="submit">Concluir</Button.Root>
      </Form.Buttons>
    </Form.Fieldset>
  )
}
