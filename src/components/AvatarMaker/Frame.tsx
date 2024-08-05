import { useCallback, useEffect, useRef, useState } from "react";
import { useAvatar } from "../../hooks/useAvatar";
import { createImage, Image as AvatarImage } from "../../helpers/createImage";
import { Layer, Stage, Image as Img } from 'react-konva';
import Konva from 'konva';

interface Size {
  width?: number;
  height?: number;
}

type ImagesMap = {
  [key: string]: AvatarImage;
};

export const Frame = () => {
  const DEFAULT_HEIGTH = 200;
  const DEFAULT_WIDTH = 210;
  const PICTURE_SIZE = 135;

  const canvasRef = useRef<Konva.Stage>(null);
  const headRef = useRef<Konva.Layer>(null);
  const [firstRender, setFirstRender] = useState(true);

  // Sources
  const {
    tone,
    hair: hairSrc,
    beard: beardSrc,
    moustache: moustacheSrc,
    glasses: glassesSrc,
    setFrame,
  } = useAvatar();

  // Elements
  const [images, setImages] = useState<ImagesMap>({
    body: null,
    head: null,
    hair: null,
    beard: null,
    moustache: null,
    glasses: null,
  });

  const resizeCanvas = ({ width = DEFAULT_WIDTH, height = DEFAULT_HEIGTH }: Size) => {
    if (canvasRef.current) {
      canvasRef.current.setSize({ width, height });
    }
  };

  const centerOnCanvas = (objectWidth: number, canvasSize: number = DEFAULT_WIDTH) => {
    return (canvasSize - objectWidth) / 2;
  };

  const getFrame = useCallback(() => {
    if (headRef.current) {
      setFrame(headRef.current.toDataURL());
    }
  }, [setFrame]);

  const takePicture = useCallback(() => {
    resizeCanvas({ height: PICTURE_SIZE });
    getFrame();
    resizeCanvas({ height: DEFAULT_HEIGTH });
  }, [getFrame]);

  useEffect(() => {
    const loadImages = async () => {
      const bodySrc = await import(`../../assets/body/1/${tone}.png`);
      const headSrc = await import(`../../assets/face/${tone}.png`);
      const [body, head, hair, beard, moustache, glasses] = await Promise.all([
        createImage(bodySrc.default),
        createImage(headSrc.default),
        createImage(hairSrc),
        createImage(beardSrc),
        createImage(moustacheSrc),
        createImage(glassesSrc),
      ]);

      setImages({ body, head, hair, beard, moustache, glasses });
    };
    loadImages();
    setFirstRender(false);
  }, [
    tone,
    hairSrc,
    beardSrc,
    moustacheSrc,
    glassesSrc,
    takePicture
  ]);

  useEffect(() => {
    if (!firstRender) {
      takePicture();
    }
  }, [firstRender, takePicture]);

  return (
    <Stage
      width={DEFAULT_WIDTH}
      height={PICTURE_SIZE}
      className="flex justify-center my-3 border border-transparent"
      style={{ borderStyle: 'solid' }}
      ref={canvasRef}>
      <Layer height={PICTURE_SIZE} ref={headRef}>
        { images.head && <Img image={images.head} x={centerOnCanvas(100)} y={30} width={100} height={100} /> }
        { images.hair && <Img image={images.hair} x={centerOnCanvas(100)} y={-10} width={90} height={90} /> }
        { images.beard && <Img image={images.beard} x={58} y={52} width={101} height={85} /> }
        { images.moustache && <Img image={images.moustache} x={45} y={59} width={90} height={82} /> }
        { images.glasses && <Img image={images.glasses} x={50} y={30} width={87} height={95} /> }
      </Layer>
      <Layer>
        { images.body && <Img image={images.body} x={centerOnCanvas(300)} y={120} width={300} height={300} /> }
        { images.beard && <Img image={images.beard} x={58} y={52} width={101} height={85} /> }
      </Layer>
    </Stage>
  );
};
