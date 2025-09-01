import React from 'react';

export const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="glass p-6 rounded-xl">
          <div className="h-6 bg-zinc-700 rounded w-3/4 mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-zinc-700 rounded w-full"></div>
            <div className="h-4 bg-zinc-700 rounded w-5/6"></div>
            <div className="h-4 bg-zinc-700 rounded w-4/6"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const SectionSkeleton = () => {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-8 bg-zinc-700 rounded w-1/3"></div>
      <div className="h-1 bg-zinc-700 rounded w-12"></div>
      <div className="space-y-4">
        <div className="h-6 bg-zinc-700 rounded w-5/6"></div>
        <div className="h-6 bg-zinc-700 rounded w-4/6"></div>
        <div className="h-6 bg-zinc-700 rounded w-3/4"></div>
      </div>
    </div>
  );
};
