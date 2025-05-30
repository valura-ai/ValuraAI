import { useState } from "react";
import { useRouter } from "next/navigation";
import { SignUpBoxName } from "./SignUpBoxName";
import { SignUpBox } from "./SignUpBox";
import { EmailVerification } from "./EmailVerification";
import { WelcomeSection } from "./shared/WelcomeSection";

type SignUpStep = "name" | "credentials" | "verification";

interface SignUpFlowProps {
  onSignInClick: () => void;
}

export const SignUpFlow = ({ onSignInClick }: SignUpFlowProps) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<SignUpStep>("name");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");      

  const handleNameSubmit = (firstName: string, lastName: string) => {
    setFirstName(firstName);
    setLastName(lastName);
    setCurrentStep("credentials");
  };

  const handleCredentialsSubmit = (email: string) => {
    setEmail(email);
    setCurrentStep("verification");
  };

  const handleBack = () => {
    if (currentStep === "name") {
      router.push("/");
    } else if (currentStep === "verification") {
      setCurrentStep("credentials");
    } else if (currentStep === "credentials") {
      setCurrentStep("name");
    }
  };

  const handleSignIn = () => {
    router.push("/auth?mode=signin");
    onSignInClick();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-2">
        <WelcomeSection 
          onBack={handleBack}
          title="Create your account to access your personalized wealth management dashboard."
        />
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-slate-600 text-sm">Welcome to </span>
                  <span className="text-green-600 font-semibold">
                    Valura.AI
                  </span>
                </div>
                <div className="text-right mt-6">
                  <div className="text-slate-500 text-sm">
                    Have an Account ?
                  </div>
                  <button 
                    onClick={handleSignIn}
                    className="text-green-600 text-sm font-semibold hover:underline"
                  >
                    Log in
                  </button>
                </div>
              </div>
              <h2 className="text-[54.21px] font-extrabold text-gray-800 text-left text-opacity-80">
                Sign Up
              </h2>
            </div>

            {/* Form Content */}
            {currentStep === "name" && (
              <SignUpBoxName
                onNameSubmit={handleNameSubmit}
                firstName={firstName}
                lastName={lastName}
              />
            )}
            {currentStep === "credentials" && (
              <SignUpBox
                onCredentialsSubmit={handleCredentialsSubmit}
                firstName={firstName}
                lastName={lastName}
              />
            )}
            {currentStep === "verification" && (
              <EmailVerification
                email={email}
                onBack={handleBack}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}; 