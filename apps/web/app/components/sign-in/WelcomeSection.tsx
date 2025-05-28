import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "../ui/button";

interface WelcomeSectionProps {
  isForgotPassword?: boolean;
}

export const WelcomeSection = ({ isForgotPassword = false }: WelcomeSectionProps) => {
  const router = useRouter();
  
  const handleBack = () => {
    if (isForgotPassword) {
      window.location.reload();
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
          className="bg-white/80 hover:bg-white/90 rounded-full px-6 py-2 shadow-sm"
        >
          Back
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
          Sign in to your account to access your personalized wealth
          management dashboard.
        </p>
      </div>
    </div>
  );
}; 