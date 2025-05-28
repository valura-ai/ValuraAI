import React from 'react';

interface AcceptButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export const AcceptButton: React.FC<AcceptButtonProps> = ({
  onClick,
  disabled = false
}) => {
  return (
    <button
      className="px-16 py-5 mt-7 text-base text-center text-white bg-green-600 border border-black rounded-3xl max-md:px-5 w-full transition-all duration-300 ease-in-out hover:opacity-90 disabled:opacity-50 font-bold"

      onClick={onClick}
      disabled={disabled}
    >
      Accept
    </button>
  );
};

export default AcceptButton;
