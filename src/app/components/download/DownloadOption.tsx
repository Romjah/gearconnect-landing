import React from 'react';

interface DownloadOptionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  buttonIcon: React.ReactNode;
  buttonClass: string;
  iconContainerClass: string;
}

export default function DownloadOption({
  title,
  description,
  icon,
  buttonText,
  buttonIcon,
  buttonClass,
  iconContainerClass
}: DownloadOptionProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg text-center border border-black-100">
      <div className={`${iconContainerClass} rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6`}>
        {icon}
      </div>
      <h2 className="text-2xl font-bold mb-4 text-black">{title}</h2>
      <p className="text-black mb-8">
        {description}
      </p>
      <a 
        href="#" 
        className={`${buttonClass} py-3 px-8 rounded-lg font-medium inline-flex items-center justify-center shadow-md`}
      >
        {buttonIcon}
        {buttonText}
      </a>
    </div>
  );
} 