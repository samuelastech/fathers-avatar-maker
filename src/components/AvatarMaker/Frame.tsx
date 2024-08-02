import { useCallback, useEffect, useRef, useState } from "react";
import { useAvatar } from "../../hooks/useAvatar";
import { Layer, Stage, Image as Img } from 'react-konva';
import Konva from 'konva';

interface Size {
  width?: number;
  height?: number;
}

type AvatarImage = HTMLImageElement | null;

export const Frame = () => {
  const DEFAULT_HEIGTH = 200;
  const DEFAULT_WIDTH = 210;
  const PICTURE_SIZE = 135;

  const canvasRef = useRef<Konva.Stage>(null);
  const headRef = useRef<Konva.Layer>(null);

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
  const [body, setBody] = useState<AvatarImage>(null);
  const [head, setHead] = useState<AvatarImage>(null);
  const [hair, setHair] = useState<AvatarImage>(null);
  const [beard, setBeard] = useState<AvatarImage>(null);
  const [moustache, setMoustache] = useState<AvatarImage>(null);
  const [glasses, setGlasses] = useState<AvatarImage>(null);

  const createImage = async (src: string, set: (param: AvatarImage) => void) => {
    return new Promise<void>((resolve) => {
      if (src) {
        const imgEl = new Image();
        imgEl.onload = () => {
          set(imgEl);
          resolve();
        };
        imgEl.src = src;
      } else {
        set(null);
        resolve();
      }
    });
  };

  const resizeCanvas = ({ width = DEFAULT_WIDTH, height = DEFAULT_HEIGTH }: Size) => {
    if (canvasRef.current) {
      canvasRef.current.setSize({ width, height });
    }
  };

  const centerOnCanvas = (objectWidth: number, canvasSize: number = DEFAULT_WIDTH) => {
    return (canvasSize - objectWidth) / 2;
  };

  const takePicture = useCallback(() => {
    if (headRef.current) {
      setFrame(headRef.current.toDataURL());
    }
  }, [setFrame]);

  useEffect(() => {
    const loadImages = async () => {
      const bodySrc = await import(`../../assets/body/${tone}.png`);
      const headSrc = await import(`../../assets/face/${tone}.png`);
      await Promise.all([
        createImage(bodySrc.default, setBody),
        createImage(headSrc.default, setHead),
        createImage(hairSrc, setHair),
        createImage(beardSrc, setBeard),
        createImage(moustacheSrc, setMoustache),
        createImage(glassesSrc, setGlasses),
      ]);
      resizeCanvas({ height: PICTURE_SIZE });
      takePicture();
      resizeCanvas({ height: DEFAULT_HEIGTH });
    };
    loadImages();
  }, [
    tone,
    hairSrc,
    beardSrc,
    moustacheSrc,
    glassesSrc,
    takePicture
  ]);

  return (
    <Stage
      width={DEFAULT_WIDTH}
      height={PICTURE_SIZE}
      className="flex justify-center my-3 border"
      style={{ borderStyle: 'solid' }}
      ref={canvasRef}>
      <Layer height={PICTURE_SIZE} ref={headRef}>
        { head && <Img image={head} x={centerOnCanvas(100)} y={30} width={100} height={100} /> }
        { hair && <Img image={hair} x={centerOnCanvas(100)} y={-10} width={90} height={90} /> }
        { beard && <Img image={beard} x={58} y={52} width={101} height={85} /> }
        { moustache && <Img image={moustache} x={45} y={59} width={90} height={82} /> }
        { glasses && <Img image={glasses} x={50} y={30} width={87} height={95} /> }
      </Layer>
      <Layer>
        { body && <Img image={body} x={centerOnCanvas(300)} y={120} width={300} height={300} /> }
        { beard && <Img image={beard} x={58} y={52} width={101} height={85} /> }
      </Layer>
    </Stage>
  );
};
