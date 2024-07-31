import { useContext } from "react";
import { SubmitContext } from "../contexts/submitContext";

export const useSubmit = () => {
  return useContext(SubmitContext);
};
