import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosBody } from "react-icons/io";
import { PiHairDryerFill } from "react-icons/pi";
import { GiBeard } from "react-icons/gi";
import { IoGlassesOutline } from "react-icons/io5";
import { TbMoustache } from "react-icons/tb";

import { Avatar } from "./components/Avatar";
import { Form } from "./components/Form";
import { Button } from "./components/Button";
import { GhostButton } from "./components/GhostButton";
import { AvatarMaker } from "./components/AvatarMaker";
import { SwiperSlide, Swiper } from "swiper/react";
import { Assets } from "./components/AvatarMaker/AssetsEnum";
import 'swiper/css';
import { AvatarProvider } from "./contexts/avatarContext";

function App() {
  const [step, setStep] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  return (
    <Form.Root>
      <Form.Steps currentStep={step} />
      {step === 0 ? (
        <Form.Fieldset>
          <Form.Legend>Crie a melhor caneca para o seu papai</Form.Legend>
          <AvatarProvider>
            <Avatar />
          </AvatarProvider>
          <Form.Input value={name} onChange={(event) => setName(event.target.value)} type="text" name="fatherName" placeholder="Digite o nome do seu pai" required />
          <Form.Buttons>
            <Button.Root disabled={name ? false : true} onClick={next}>Personalizar avatar</Button.Root>
          </Form.Buttons>
        </Form.Fieldset>
      ) : step === 1 ? (
        <Form.Fieldset>
          <Form.Legend>Personalize o avatar</Form.Legend>

          <AvatarProvider>
            <AvatarMaker.Root>
              <Swiper
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-5/6"
                spaceBetween={30}
                slidesPerView={3}
                centeredSlides={true}
              >
                <SwiperSlide><AvatarMaker.Asset asset={Assets.Body} icon={<IoIosBody />} /></SwiperSlide>
                <SwiperSlide><AvatarMaker.Asset asset={Assets.Hair} icon={<PiHairDryerFill />} /></SwiperSlide>
                <SwiperSlide><AvatarMaker.Asset asset={Assets.Beard} icon={<GiBeard />} /></SwiperSlide>
                <SwiperSlide><AvatarMaker.Asset asset={Assets.Moustache} icon={<TbMoustache  />} /></SwiperSlide>
                <SwiperSlide><AvatarMaker.Asset asset={Assets.Glasses} icon={<IoGlassesOutline />} /></SwiperSlide>
              </Swiper>

              <Avatar />

              <AvatarMaker.Palette />
            </AvatarMaker.Root>
          </AvatarProvider>

          <Form.Buttons>
            <GhostButton.RoundedRoot onClick={back}>
              <GhostButton.Icon element={<FaArrowLeft className="text-pink-600" />} />
            </GhostButton.RoundedRoot>
            <Button.Root onClick={next}>Concluir</Button.Root>
          </Form.Buttons>
        </Form.Fieldset>
      ) : null}
    </Form.Root>
  );
}

export default App;
