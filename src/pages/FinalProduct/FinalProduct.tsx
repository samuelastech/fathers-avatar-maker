import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Stage, Layer, Image as KonvaImage } from "react-konva";
import { Text, Button, Scenario } from "../../components";
import { ImageSource, importFiles } from "../../helpers/importFiles";
import useImage from "use-image";
import { createImage, Image } from "../../helpers/createImage";

const scenarios = import.meta.glob('../../assets/scenarios/*.{png,jpg,jpeg,gif}');

type Images = [Image, Dispatch<SetStateAction<Image>>][];

export const FinalProduct = () => {
  const [loadedScenarios, setScenariosSources] = useState<ImageSource[]>([]);
  const [loadedBodies, setBodiesSources] = useState<ImageSource[]>([]);
  const [bodiesImg, setBodiesImg] = useState({
    1: null,
    2: null,
    3: null,
    4: null
  });
  const bodiesImg: Images = [
    useState<Image>(null),
    useState<Image>(null),
    useState<Image>(null),
    useState<Image>(null),
  ];
  const [stageHeight, setStageHeight] = useState<number>(0);
  const { state } = useLocation();
  const { dataURL, tone } = state;
  const [image] = useImage(dataURL);

  const goToShop = () => {
    window.open('https://www.instagram.com/real.braz/', '_blank');
  };

  useEffect(() => {
    const loadImages = async () => {
      const bodies =
        tone === 1 ? import.meta.glob('../../assets/body/1/*.{png,jpg,jpeg,gif}') :
        tone === 2 ? import.meta.glob('../../assets/body/2/*.{png,jpg,jpeg,gif}') :
        tone === 3 ? import.meta.glob('../../assets/body/3/*.{png,jpg,jpeg,gif}') :
        import.meta.glob('../../assets/body/4/*.{png,jpg,jpeg,gif}');

      const loadedBodies = await Promise.all(importFiles(bodies));
      const loadedScenarios = await Promise.all(importFiles(scenarios));

      setScenariosSources(loadedScenarios);
      setBodiesSources(loadedBodies);
    };

    loadImages();
  }, [dataURL, tone]);

  useEffect(() => {
    setStageHeight(loadedScenarios.length * (650 + 50));
  }, [loadedScenarios]);

  useEffect(() => {
    const createImageElements = async () => {
      loadedBodies.forEach(async (body, i) => {
        const [, setImg] = bodiesImg[i];
        const bodyEl = await createImage(body.src);
        setImg(bodyEl);
      });
    }

    createImageElements();
  }, [loadedBodies, bodiesImg]);

  return (
    <div className="bg-white py-4 px-6 rounded my-4">
      <Text.H3>Aqui está o resultado</Text.H3>
      <div className="w-full flex justify-center mb-4">
        <Button.Root onClick={goToShop}>Quero fazer meu pedido!</Button.Root>
      </div>
      <Stage width={450} height={stageHeight} className="flex justify-center">
        <Layer>
          {
            loadedScenarios.map((scenario, i) => {  
              return (
                <React.Fragment key={i}>
                  <Scenario.Gif y={(650 + 50) * i} src={scenario.src} />
                  <KonvaImage image={image} width={210} height={135} y={((650 + 50) * i) + (650 - 410)} x={(650 - 430) / 2} />
                  {
                    bodiesImg.map((body, i) => {
                      return body[0] ? <KonvaImage key={i} image={body[0]} width={210} height={135} y={((650 + 50) * i) + (650 - 410)} x={(650 - 430) / 2} /> : null;
                    })
                  }
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
