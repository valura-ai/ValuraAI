"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { QuestionSection } from './QuestionSection';
import { OptionsSection } from './OptionSection';

interface PEPFormData {
  pepStatus: string;
}

export const PEPQuestionnaire: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  
  const { handleSubmit, setValue, watch } = useForm<PEPFormData>({
    defaultValues: {
      pepStatus: ''
    }
  });

  const watchedValue = watch('pepStatus');

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    setValue('pepStatus', value);
  };

  const handleBackClick = () => {
    // Handle navigation back
    console.log('Back button clicked');
  };

  const onSubmit = (data: PEPFormData) => {
    console.log('Form submitted:', data);
    // Handle form submission
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
    <main className="bg-[#FFFFFC]/90 shadow-xl rounded-[40px] px-14 py-12 w-full max-w-6xl backdrop-blur-[17.247573852539062px] max-md:px-6">
      <div className="backdrop-blur-[17.247573852539062px] w-[1112px] max-w-full pt-[34px] pb-[172px] px-10 rounded-[40px] max-md:pb-[100px] max-md:px-5">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="gap-5 flex items-start max-md:flex-col max-md:items-stretch">
            <div className="w-6/12 max-md:w-full max-md:ml-0">
              <QuestionSection onBackClick={handleBackClick} />
            </div>
            
            <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0 flex justify-center">
              <div className="w-full" style={{ marginTop: '98px' }}>
                <OptionsSection
                  selectedValue={selectedValue}
                  onValueChange={handleValueChange}
                />
              </div>
            </div>
          </div>
          
          {selectedValue && (
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Continue
              </button>
            </div>
          )}
        </form>
      </div>
    </main>
    </div>
  );
};