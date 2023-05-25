import React from 'react';

const BackButton = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <button
      className="flex items-center justify-center m-4 z w-12 h-12 rounded-full bg-[#0c0c0c50] hover:opacity-100 text-white focus:outline-none"
      onClick={goBack}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#D1F0B1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>
  );
};

export default BackButton;
