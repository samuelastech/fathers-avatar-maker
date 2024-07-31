import { useState } from "react";

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
import { AvatarMaker } from "../../components/AvatarMaker";
import { Assets } from "../../components/AvatarMaker/AssetsEnum";
import { Form } from "../../components/Form";
import { Button } from "../../components/Button";
import { GhostButton } from "../../components/GhostButton";

// Contexts
import { AvatarProvider } from "../../contexts/avatarContext";
import { SubmitProvider, SubmitContext } from "../../contexts/submitContext";
import { Avatar } from "../../components/Avatar";

export const FormAvatar = () => {
  const [step, setStep] = useState<number>(0);
  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  return (
    <SubmitProvider>
      <Form.Root>
        <Form.Steps currentStep={step} />
        {step === 0 ? (
          <Form.Fieldset>
            <Form.Legend>Crie a melhor caneca para o seu papai</Form.Legend>
            <AvatarProvider>
              <Avatar />
            </AvatarProvider>
            <Form.Input type="text" name="fatherName" placeholder="Digite o nome do seu pai" required />
            <SubmitContext.Consumer>
              {({ name }) => (
                <Form.Buttons>
                  <Button.Root disabled={name ? false : true} onClick={next}>Personalizar avatar</Button.Root>
                </Form.Buttons>
              )}
            </SubmitContext.Consumer>
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
              <Button.Root type="submit">Concluir</Button.Root>
            </Form.Buttons>
          </Form.Fieldset>
        ) : null}
      </Form.Root>
    </SubmitProvider>
  );
};
