import React from 'react';

export const DoubleDivider = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`w-full flex flex-col gap-[2px] ${className}`}>
      <div className="w-full h-px bg-white/10" />
      <div className="w-full h-px bg-white/10" />
    </div>
  );
};
