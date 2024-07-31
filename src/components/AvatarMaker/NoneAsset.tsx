import { MdBlock } from "react-icons/md";

export interface NoneAssetProps {
  set: (param: string) => void;
} 

export const NoneAsset = ({ set }: NoneAssetProps) => {
  return (
    <button
      onClick={() => set('')}
      type="button"
      className="
        w-10
        h-10
        bg-white
        rounded-full
        text-red-600
        text-2xl
        border
        border-gray-700
        flex
        justify-center
        items-center
      "
    ><MdBlock /></button>
  );
};
