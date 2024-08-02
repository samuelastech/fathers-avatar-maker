import { useRef, useMemo, useEffect } from "react";
import { Image } from "react-konva";
import Konva from "konva";
import "gifler";

export interface GifProps {
  src: string;
  y: number;
}

export const Gif = ({ src, y }: GifProps) => {
  const imageRef = useRef<Konva.Image>(null);
  const canvas = useMemo(() => document.createElement("canvas"), []);

  useEffect(() => {
    let anim;
    const f = window.gifler(src);
    
    f.get(a => {
      anim = a;
      anim.animateInCanvas(canvas);
      anim.onDrawFrame = (ctx, frame) => {
        ctx.drawImage(frame.buffer, frame.x, frame.y);
        if (imageRef.current) {
          imageRef.current.getLayer().draw();
        }
      };
    });
  }, [src, canvas]);

  return <Image image={canvas} ref={imageRef} width={450} height={650} y={y} />;
};