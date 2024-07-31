import { useEffect, useReducer, useRef } from "react";
import { useAvatar } from "../hooks/useAvatar";
import { useSubmit } from "../hooks/useSubmit";
import { useNavigate } from "react-router-dom";

export const Avatar = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const { submit } = useSubmit();
  const {
    tone,
    hair: hairSrc,
    beard: beardSrc,
    moustache: moustacheSrc,
    glasses: glassesSrc,
  } = useAvatar();

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        const body = new Image();
        const head = new Image();
        const hair = new Image();
        const beard = new Image();
        const moustache = new Image();
        const glasses = new Image();
        
        import(`../assets/body/${tone}.png`).then((image) => {
          body.src = image.default;
        });

        import(`../assets/face/${tone}.png`).then((image) => {
          head.src = image.default;
        });

        hair.src = hairSrc;
        beard.src = beardSrc;
        moustache.src = moustacheSrc;
        glasses.src = glassesSrc;

        const renderBody = () => {
          return new Promise((resolve) => {
            body.onload = () => {
              ctx.drawImage(body, (canvas.width - 300) / 2, 120, 300, 300);
              resolve(null);
            };
          });
        };

        const renderHead = () => {
          return new Promise((resolve) => {
            head.onload = () => {
              ctx.drawImage(head, (canvas.width - 100) / 2, 30, 100, 100);
              resolve(null);
            };
          });
        };

        const renderHair = () => {
          return new Promise((resolve) => {
            if (hair.complete) {
              ctx.drawImage(hair, (canvas.width - 100) / 2, -10, 90, 90);
              resolve(null);
            } else {
              hair.onload = () => {
                ctx.drawImage(hair, (canvas.width - 100) / 2, -10, 90, 90);
                resolve(null);
              };
            }
          });
        };

        const renderBeard = () => {
          return new Promise((resolve) => {
            if (beard.complete) {
              ctx.drawImage(beard, (canvas.width - 95) / 2, 52, 101, 85);
              resolve(null);
            } else {
              beard.onload = () => {
                ctx.drawImage(beard, (canvas.width - 95) / 2, 52, 101, 85);
                resolve(null);
              };
            }
          });
        };

        const renderMoustache = () => {
          return new Promise((resolve) => {
            if (moustache.complete) {
              ctx.drawImage(moustache, (canvas.width - 125) / 2, 59, 90, 82);
              resolve(null);
            } else {
              moustache.onload = () => {
                ctx.drawImage(moustache, (canvas.width - 125) / 2, 59, 90, 82);
                resolve(null);
              };
            }
          });
        };

        const renderGlasses = () => {
          return new Promise((resolve) => {
            if (glasses.complete) {
              ctx.drawImage(glasses, (canvas.width - 115) / 2, 30, 87, 95);
              resolve(null);
            } else {
              glasses.onload = () => {
                ctx.drawImage(glasses, (canvas.width - 115) / 2, 30, 87, 95);
                resolve(null);
              };
            }
          });
        };

        const clearCanvas = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        };

        const drawOnCanvas = async () => {
          clearCanvas();
          await renderBody();
          await renderHead();
          await renderHair();
          await renderBeard();
          await renderMoustache();
          await renderGlasses();
          
          forceUpdate();
        };

        const generateFinal = async () => {
          canvas.height = 430;
          await drawOnCanvas();
          const dataURL = canvas.toDataURL('image/png');
          if (dataURL) navigate('/product', { state: { dataURL } });
        };

        drawOnCanvas();
        submit && generateFinal();
      }
    }
  }, [
    tone,
    hairSrc,
    beardSrc,
    moustacheSrc,
    glassesSrc,
    submit,
    navigate,
  ]);

  return (
    <canvas ref={canvasRef} width="210" height="200" className="mx-auto my-3"></canvas>
  );
};
