import { useAvatar } from "../../hooks/useAvatar";

export interface BodyToneProps {
  tone: number;
}

export const BodyTone = ({ tone }: BodyToneProps) => {
  const { setTone } = useAvatar();

  return (
    tone === 1 ? (
      <button type="button" className="w-10 h-10 rounded-full bg-body-tone-1 border-2 border-white shadow-2xl" onClick={() => setTone(1)}></button>
    ) : tone === 2 ? (
      <button type="button" className="w-10 h-10 rounded-full bg-body-tone-2 border-2 border-white shadow-2xl" onClick={() => setTone(2)}></button>
    ) : tone === 3 ? (
      <button type="button" className="w-10 h-10 rounded-full bg-body-tone-3 border-2 border-white shadow-2xl" onClick={() => setTone(3)}></button>
    ) : (
      <button type="button" className="w-10 h-10 rounded-full bg-body-tone-4 border-2 border-white shadow-2xl" onClick={() => setTone(4)}></button>
    )
  );
};
