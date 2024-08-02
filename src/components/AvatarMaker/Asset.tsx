import { ReactNode } from "react";
import { AssetsEnum } from "./AssetsEnum";
import { useAvatar } from "../../hooks/useAvatar";

export interface AssetProps {
  icon?: ReactNode;
  asset?: AssetsEnum;
  text?: string;
}

export const Asset = ({ icon, asset, text = '' }: AssetProps) => {
  const { palette, setPalette } = useAvatar();

  return (
    <button
      onClick={() => asset ? setPalette(asset) : null}
      type="button"
      className={`
        border-2
        border-gray-700
        bg-white
        p-2
        text-2xl
        ${palette === asset ? null: 'scale-75'}
      `}>{icon}{text}</button>
  );
};
