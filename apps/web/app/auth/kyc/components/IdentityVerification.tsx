"use client";
import * as React from "react";
import { BackButton } from "./BackButton";
import { RequirementItem } from "./RequirementItem";
import { ProceedButton } from "./ProceedButton";

interface IdentityVerificationProps {
  onBack?: () => void;
  onProceed?: () => void;
}

export default function IdentityVerification({ onBack, onProceed }: IdentityVerificationProps) {
  // TODO: Replace with actual user sub taken from the session of AuthServer and add API Call to save ..
  const _id = '';
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleBackClick = () => {
    if (onBack) onBack();
  };

  const handleProceedClick = () => {
    setError(false);
    setLoading(true);
    const personaLoader = new Function('_id', 'onProceed', 'setLoading', 'setError', `
      var existingScript = document.getElementById('persona-script');
      if (existingScript) {
        existingScript.remove();
      }
      var script = document.createElement('script');
      script.id = 'persona-script';
      script.src = 'https://cdn.withpersona.com/dist/persona-v5.1.2.js';
      script.integrity = 'sha384-nuMfOsYXMwp5L13VJicJkSs8tObai/UtHEOg3f7tQuFWU5j6LAewJbjbF5ZkfoDo';
      script.crossOrigin = 'anonymous';
      script.async = true;
      var errorHandled = false;
      script.onload = function() {
        try {
          var client = new window.Persona.Client({
            templateId: 'itmpl_wybw7bfSRfMXZpMSp8hh1S26rKkb',
            environmentId: 'env_42bWr5qjVJ2966iJCLCWE2a7UykZ',
            metadata: { _id: _id || '' },
            onReady: function() { client.open(); },
            onComplete: function({ inquiryId, status }) {
              if (!errorHandled) {
                errorHandled = true;
                setLoading(false);
                console.log('✅ Completed inquiry ' + inquiryId + ' with status ' + status);
                if (onProceed) onProceed();
              }
            },
            onError: function(error) {
              if (!errorHandled) {
                errorHandled = true;
                setLoading(false);
                setError(true);
                console.error('❌ Persona error:', error);
              }
            },
            onCancel: function() {
              if (!errorHandled) {
                errorHandled = true;
                setLoading(false);
                setError(true);
                console.error('❌ Persona overlay was closed by the user.');
              }
            }
          });
        } catch (err) {
          if (!errorHandled) {
            errorHandled = true;
            setLoading(false);
            setError(true);
          }
        }
      };
      script.onerror = function() {
        if (!errorHandled) {
          errorHandled = true;
          setLoading(false);
          setError(true);
        }
      };
      document.body.appendChild(script);
    `);
    personaLoader(_id, onProceed, setLoading, setError);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      {loading && (
        <div className="bg-[#FFFFFC] fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/10">
          <div className="bg-white rounded-xl p-8 shadow-lg flex flex-col items-center">
            {error ? (
              <React.Fragment>
                <svg className="h-8 w-8 text-red-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-lg font-semibold text-red-700 mb-4">Error while verifying. Please try again later.</span>
                <button
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  onClick={() => { setError(false); setLoading(false); }}
                >
                  OK
                </button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <svg className="animate-spin h-8 w-8 text-blue-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                <span className="text-lg font-semibold text-slate-800">Opening secure identity verification...</span>
              </React.Fragment>
            )}
          </div>
        </div>
      )}
        <main className="bg-[#FFFFFC] shadow-xl rounded-[40px] px-14 py-12 w-full max-w-6xl backdrop-blur-[17.247573852539062px] max-md:px-6">
        <div className="flex flex-col items-start px-10 pt-9 pb-36 max-w-full backdrop-blur-[17.247573852539062px] rounded-[40px] w-[1112px] max-md:px-5 max-md:pb-24">
            <header className="flex flex-col max-w-full font-bold text-slate-950 w-[797px]">
            <BackButton onClick={handleBackClick} />
            <h2 className="self-end mt-11 text-2xl leading-none max-md:mt-10">
                What you'll need
            </h2>
            </header>

            <section className="mt-6 -mb-7 ml-3.5 max-md:mb-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
                <div className="w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-2 text-slate-950 max-md:mt-10 max-md:max-w-full">
                    <h1 className="text-5xl font-bold max-md:max-w-full max-md:text-4xl">
                    Verify your identity with Persona
                    </h1>
                    <p className="self-start mt-5 text-base leading-6 max-md:max-w-full">
                    Persona powers identity verification for many of the world's
                    largest companies, and is Valura.AI's trusted third party KYC
                    provider who will help verify your identity.
                    </p>
                </div>
                </div>

                <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="w-full text-base text-slate-950 max-md:mt-10 max-md:max-w-full">
                    <RequirementItem
                    icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7ae6106247efc9b27ecfdcf4eba58389e1cabc11?placeholderIfAbsent=true&apiKey=aace016833d24cbfb6423439ab3bd23b"
                    text="Passport/other government ID"
                    />
                    <div className="mt-3">
                    <RequirementItem
                        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5d9ae0bf2cbe2b5262bd94ec0bf41a548eecd9b5?placeholderIfAbsent=true&apiKey=aace016833d24cbfb6423439ab3bd23b"
                        text="Selfie"
                    />
                    </div>
                    <ProceedButton onClick={handleProceedClick} />
                </div>
                </div>
            </div>
            </section>
        </div>
        </main>
    </div>
  );
}
