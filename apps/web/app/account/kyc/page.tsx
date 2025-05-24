'use client';

import { useEffect, useState, useCallback } from 'react';

export default function Home() {
  const [workosId, setWorkosId] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => setWorkosId(data?.data?.workosId));
  }, []);

  const handleStartVerification = useCallback(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.withpersona.com/dist/persona-v5.1.2.js';
    script.integrity = 'sha384-nuMfOsYXMwp5L13VJicJkSs8tObai/UtHEOg3f7tQuFWU5j6LAewJbjbF5ZkfoDo';
    script.crossOrigin = 'anonymous';
    script.async = true;

    script.onload = () => {
      // @ts-ignore
      const client = new window.Persona.Client({
        templateId: 'itmpl_wybw7bfSRfMXZpMSp8hh1S26rKkb',
        environmentId: 'env_42bWr5qjVJ2966iJCLCWE2a7UykZ',
        metadata: {
          workosId: workosId || '',
        },
        onReady: () => client.open(),
        onComplete: async ({ inquiryId, status }: any) => {
          console.log(`✅ Completed inquiry ${inquiryId} with status ${status}`);

          try {
            const res = await fetch('/api/persona', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ inquiryId, workosId }),
            });

            if (!res.ok) {
              console.error('Failed to update KYC status in backend');
            }
          } catch (err) {
            console.error('Error notifying backend:', err);
          }
        },
      });
    };

    document.body.appendChild(script);
  }, [workosId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f19] via-[#1a2233] to-[#0a0f19] text-white flex items-center justify-center px-4">
      <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-10 max-w-md w-full text-center shadow-xl">
        <h1 className="text-3xl font-semibold mb-4">Identity Verification</h1>
        <p className="text-gray-300 mb-8">
          Please verify your identity with Persona. Click the button below to begin the process.
        </p>
        <button
          onClick={handleStartVerification}
          disabled={!workosId}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all text-white font-medium py-3 px-6 rounded-xl disabled:opacity-50 w-full"
        >
          Start Verification
        </button>
      </div>
    </div>
  );
}
