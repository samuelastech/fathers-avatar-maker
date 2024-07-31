export interface LegendProps {
  children: React.ReactNode;
}

export const Legend = ({ children }: LegendProps) => {
  return (
    <legend className="text-center mb-3 text-gray-600 font-bold text-xl">{children}</legend>
  );
};
