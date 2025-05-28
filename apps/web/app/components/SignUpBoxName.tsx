"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface SignUpBoxNameProps {
  onNameSubmit: (firstName: string, lastName: string) => void;
  firstName: string;
  lastName: string;
}

export const SignUpBoxName = ({ onNameSubmit, firstName: initialFirstName, lastName: initialLastName }: SignUpBoxNameProps) => {
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);

  const handleSubmit = () => {
    if (!firstName || !lastName) {
      return;
    }
    onNameSubmit(firstName, lastName);
  };

  return (
    <div className="grid grid-cols-1 space-y-6">
      <div>
        <label className="block text-slate-700 text-sm font-medium mb-2">
          Enter your First name
        </label>
        <Input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={`w-full h-12 px-4 rounded-full border transition-all duration-200 ${
            firstName ? 'border-green-600' : 'border-slate-200'
          } focus:border-green-600 focus:ring-0 focus:outline-none focus:shadow-none`}
          required
        />
      </div>

      <div>
        <label className="block text-slate-700 text-sm font-medium mb-2">
          Enter your Last name
        </label>
        <Input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={`w-full h-12 px-4 rounded-full border transition-all duration-200 ${
            lastName ? 'border-green-600' : 'border-slate-200'
          } focus:border-green-600 focus:ring-0 focus:outline-none focus:shadow-none`}
          required
        />
      </div>
      <Button
        onClick={handleSubmit}
        className="w-full h-12 bg-green-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        Proceed
      </Button>
    </div>
  );
};
