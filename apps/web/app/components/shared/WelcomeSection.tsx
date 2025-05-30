import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "../ui/button";

interface WelcomeSectionProps {
  isForgotPassword?: boolean;
  onBack?: () => void;
  title?: string;
}

export const WelcomeSection = ({ 
  isForgotPassword = false, 
  onBack,
  title = "Sign in to your account to access your personalized wealth management dashboard."
}: WelcomeSectionProps) => {
  const router = useRouter();
  
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (isForgotPassword) {
      router.push("/auth?mode=signin");
    } else {
      router.push("/");
    }
  };
  
  return (
    <div className="flex-1 max-w-lg mr-[100px]">
      <div className="mb-[120px]">
        <Button
          variant="ghost"
          onClick={handleBack}
          className="bg-white/80 hover:bg-white/90 rounded-full px-6 py-2 shadow-sm font-extrabold flex items-center justify-center"
        >
          <Image
            src="/assets/arrow.png"
            alt="Back arrow"
            width={16}
            height={16}
            className=""
          />
          <p className="mt-0.5">Back</p>
        </Button>
      </div>
      <div className="text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-light text-slate-700 mb-4">
          Welcome to
        </h1>
        <div className="flex justify-center lg:justify-start mb-6">
          <Image
            src="/assets/logo-valura.png"
            alt="Logo"
            width={306.53}
            height={102.9}
          />
        </div>
        <p className="text-slate-600 text-lg max-w-md mx-auto lg:mx-0">
          {title}
        </p>
      </div>
    </div>
  );
}; 