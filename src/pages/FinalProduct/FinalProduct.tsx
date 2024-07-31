import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Stage, Layer, Image } from "react-konva";
import { GIF } from '../../components/Gif';
import useImage from "use-image";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";

interface ImageModule {
  default: string;
}

type ImageSource = {
  path: string;
  src: string;
};

const scenarios = import.meta.glob('../../assets/scenarios/*.{png,jpg,jpeg,gif}');

export const FinalProduct = () => {
  const [loadScenarios, setScenariosSources] = useState<ImageSource[]>([]);
  const [stageHeight, setStageHeight] = useState<number>(0);

  const goToShop = () => {
    window.open('https://www.instagram.com/real.braz/', '_blank');

  };

  useEffect(() => {
    const loadScenarios = async () => {
      const loadedScenarios = await Promise.all(
        Object.entries(scenarios).map(async ([path, importImage]) => {
          const { default: src } = (await importImage()) as ImageModule;
          return { path, src };
        })
      );

      setScenariosSources(loadedScenarios);
    };

    loadScenarios();
  }, []);

  useEffect(() => {
    setStageHeight(loadScenarios.length * (650 + 50));
  }, [loadScenarios]);

  const location = useLocation();
  const { dataURL } = location.state;
  const [image] = useImage(dataURL);

  return (
    <div className="bg-white py-4 px-6 rounded my-4">
      <Text.H3>Aqui está o resultado</Text.H3>
      <div className="w-full flex justify-center mb-4">
        <Button.Root onClick={goToShop}>Quero fazer meu pedido!</Button.Root>
      </div>
      <Stage width={450} height={stageHeight} className="flex justify-center">
        <Layer>
          {
            loadScenarios.map((scenario, i) => {  
              return (
                <>
                  <GIF key={i} y={(650 + 50) * i} src={scenario.src} />
                  <Image image={image} width={190} height={410} y={((650 + 50) * i) + (650 - 410)} x={(650 - 430) / 2} />
                </>
              );
            })
          }
        </Layer>
      </Stage>
      <div className="w-full flex justify-center mb-4">
        <Button.Root onClick={goToShop}>Quero fazer meu pedido!</Button.Root>
      </div>
    </div>
  );
};
