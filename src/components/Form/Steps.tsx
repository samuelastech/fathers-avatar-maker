export interface StepsProps {
  currentStep: number;
}

export const Steps = ({ currentStep }: StepsProps) => {
  const steps = ['Passo 1', 'Passo 2'];

  return (
    <div className="w-full max-w-96 h-10 mx-auto flex items-center relative shadow mb-3">
      {steps.map((step, i) => {
        return (
          <div className="z-20 flex-1 flex items-center justify-center h-full text-center">
            <span className={`flex-1 ${i <= currentStep ? 'text-white' : null}`}>{step}</span>
          </div>
        );
      })}

      <div className={`
        absolute
        top-0
        left-0
        z-10

        bg-gradient-to-r from-pink-600 to-amber-500
        
        h-full
        ${currentStep === 0 ? 'w-1/2' : 'w-full'}
      `}></div>
  </div>
  );
};
