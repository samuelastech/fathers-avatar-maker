export type Image = HTMLImageElement | null;

export const createImage = async (src: string) => {
  return new Promise<Image>((resolve) => {
    if (src) {
      const imgEl = new Image();
      imgEl.onload = () => {
        resolve(imgEl);
      };
      imgEl.src = src;
    } else {
      resolve(null);
    }
  });
};
