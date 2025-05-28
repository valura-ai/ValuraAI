import React from 'react';

interface BackButtonProps {
  onClick?: () => void;
}

export const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <button
      className="flex gap-2 justify-center self-start px-7 py-5 text-xl leading-none text-center whitespace-nowrap border border-solid bg-white bg-opacity-0 border-[color:var(--Correct-text,rgba(0,17,27,0.80))] rounded-[40px] max-md:px-5 text-slate-950 font-bold"
      onClick={onClick}
    >
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fa23ed4abcc8019fa5a985481068a96916be2eb?placeholderIfAbsent=true&apiKey=aace016833d24cbfb6423439ab3bd23b"
        className="object-contain shrink-0 my-auto w-4 aspect-square"
        alt="Back arrow"
      />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
