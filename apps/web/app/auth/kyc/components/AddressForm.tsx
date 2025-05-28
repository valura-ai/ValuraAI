"use client";
import * as React from "react";
import { InputField } from "./InputField";

interface AddressFormData {
  address: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
}

interface AddressFormProps {
  onSubmit?: (data: AddressFormData) => void;
}

export function AddressForm({ onSubmit }: AddressFormProps) {
  const [formData, setFormData] = React.useState<AddressFormData>({
    address: "",
    city: "",
    state: "",
    zipcode: "",
    country: ""
  });

  const handleInputChange = (field: keyof AddressFormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSubmit?.(formData);
  };
  const inputClass = "p-2 h-10 rounded-3xl border border-gray-300 w-full text-sm";
  return (
     <form className="flex flex-col space-y-5 text-sm text-neutral-600 max-w-md mx-auto">
      <fieldset className="border-0 p-0 m-0">
        <legend className="text-base text-slate-950 mb-2">
          Type your address
        </legend>

        <InputField
          placeholder="Address (Area and Street)"
          value={formData.address}
          onChange={handleInputChange("address")}
          className={inputClass}
        />
        <InputField
          placeholder="City / District / Town"
          value={formData.city}
          onChange={handleInputChange("city")}
          className={inputClass + " mt-2"}
        />
        <InputField
          placeholder="State"
          value={formData.state}
          onChange={handleInputChange("state")}
          className={inputClass + " mt-2"}
        />
      </fieldset>

      <fieldset className="border-0 p-0 m-0">
        <legend className="text-base text-slate-950 mb-2">Zipcode</legend>
        <InputField
          placeholder="Zipcode"
          value={formData.zipcode}
          onChange={handleInputChange("zipcode")}
          className={inputClass}
        />
      </fieldset>

      <fieldset className="border-0 p-0 m-0">
        <legend className="text-base text-slate-950 mb-2">Country</legend>
        <InputField
          placeholder="Country"
          value={formData.country}
          onChange={handleInputChange("country")}
          className={inputClass}
        />
      </fieldset>

      <button
        type="button"
        onClick={handleSubmit}
        className="px-6 py-2 mt-4 text-white bg-green-600 rounded-xl text-sm hover:bg-green-700 transition"
      >
        Proceed
      </button>
    </form>
  );
}