import { useSubmit } from "../../hooks/useSubmit";

export const Steps = () => {
  const { step: currentStep } = useSubmit();
  const steps = [1, 2];

  return (
    <div className="w-full max-w-96 h-10 mx-auto flex items-center relative shadow mb-3">
      {steps.map((step, i) => {
        return (
          <div key={i} className="z-20 flex-1 flex items-center justify-center h-full text-center">
            <span
              className={`
                transition-all
                ease
                duration-500
                flex-1
                ${(i + 1) <= currentStep ? 'text-white' : null}
              `}>
              {`Passo ${step}`}
            </span>
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
        transition-all
        ease
        duration-500
        rounded-t
        ${currentStep === 1 ? 'w-1/2' : 'w-full'}
      `}></div>
  </div>
  );
};
