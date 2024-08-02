import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Stage, Layer, Image } from "react-konva";
import { Text, Button, Scenario } from "../../components";
import useImage from "use-image";

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
  const { state } = useLocation();
  const { dataURL } = state;
  const [image] = useImage(dataURL);

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
                <React.Fragment key={i}>
                  <Scenario.Gif y={(650 + 50) * i} src={scenario.src} />
                  <Image image={image} width={210} height={135} y={((650 + 50) * i) + (650 - 410)} x={(650 - 430) / 2} />
                </React.Fragment>
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
