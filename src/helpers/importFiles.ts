export type ImageSource = {
  path: string;
  src: string;
};

interface ImageModule {
  default: string;
}

export const importFiles = (files: Record<string, () => Promise<unknown>>) => {
    return Object.entries(files).map(async ([path, importImage]) => {
      const { default: src } = (await importImage()) as ImageModule;
      return { path, src };
    })
  };