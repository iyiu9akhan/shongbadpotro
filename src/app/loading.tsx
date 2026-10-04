import React from "react";

const loading = () => {
  return (
    <div className="min-h-[calc(100vh-101px)] w-full flex flex-col items-center justify-center gap-4">
      <div className="w-10 h-10 border-4 border-brand border-t-white rounded-full animate-spin" />
      <p className="font-primaryEng text-[18px] font-semibold">
        Loading News...
      </p>
    </div>
  );
};

export default loading;
