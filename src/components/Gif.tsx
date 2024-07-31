import React from "react";
import { Image } from "react-konva";
// gifler will be imported into global window object
import "gifler";

// the first very simple and recommended way:
export const GIF = ({ src, y }) => {
  const imageRef = React.useRef(null);
  const canvas = React.useMemo(() => {
    const node = document.createElement("canvas");
    return node;
  }, []);

  React.useEffect(() => {
    // save animation instance to stop it on unmount
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