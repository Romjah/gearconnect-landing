import React from 'react';

interface QrCodeSectionProps {
  title: string;
  description: string;
}

export default function QrCodeSection({ title, description }: QrCodeSectionProps) {
  return (
    <div className="mt-20 bg-indigo-50 p-8 rounded-xl shadow-md">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2 text-black">{title}</h2>
        <p className="text-black">
          {description}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
        <div className="text-center">
          <div className="bg-white p-3 rounded-lg shadow-lg inline-block mb-3">
            <div className="h-36 w-36 bg-black-200 flex items-center justify-center">
              <span className="text-sm text-black">QR Code iOS</span>
            </div>
          </div>
          <p className="text-sm font-medium">iOS</p>
        </div>
        <div className="text-center">
          <div className="bg-white p-3 rounded-lg shadow-lg inline-block mb-3">
            <div className="h-36 w-36 bg-black-200 flex items-center justify-center">
              <span className="text-sm text-black">QR Code Android</span>
            </div>
          </div>
          <p className="text-sm font-medium">Android</p>
        </div>
      </div>
    </div>
  );
} 