import { useAvatar } from "../../hooks/useAvatar";
import { AssetsEnum } from "./AssetsEnum";

export const CurrentAsset = () => {
  const { palette, } = useAvatar();
  return (
    <span
      className="
        absolute
        top-0
        left-0
        border
        border-gray-500
        rounded-lg
        text-sm
        text-gray-700
        p-1
      "
      style={{ borderStyle: 'solid' }}
    >{
      palette === AssetsEnum.Body ? 'Cor de pele' :
      palette === AssetsEnum.Hair ? 'Cabelo' :
      palette === AssetsEnum.Beard ? 'Barba' :
      palette === AssetsEnum.Moustache ? 'Bigode' : 'Óculos'
    }</span>
  )
}
