import React from 'react';

interface CenteredTextProps {
  title: string;
  text: string;
}

const CenteredText: React.FC<CenteredTextProps> = ({ title, text }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-12">
      <h1 className="text-4xl text-start font-playfair  font-medium md:text-3xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h1>
      <p className="hidden md:inline-block md:sm lg:sm  text-white font-inter font-normal text-base md:text-md mx-auto max-w-2xl">
        {text}
      </p>
    </div>
  );
};

export default CenteredText;
