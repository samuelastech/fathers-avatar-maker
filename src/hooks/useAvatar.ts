import { useContext } from "react";
import { AvatarContext } from "../contexts/avatarContext";

export const useAvatar = () => {
  return useContext(AvatarContext);
};