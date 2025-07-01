interface StepIndicatorProps {
  currentStep: number;
}

const steps = ["Akun", "Hotel", "Kamar", "Dokumen"];

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((label, index) => {
        const stepNum = index + 1;
        const isActive = currentStep === stepNum;
        return (
          <div key={index} className="flex flex-col items-center flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {stepNum}
            </div>
            <span className="text-sm mt-2">{label}</span>
          </div>
        );
      })}
    </div>
  );
}
