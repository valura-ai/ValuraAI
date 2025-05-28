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
      className=" px-50 py-3 mt-7 text-base text-center text-white whitespace-nowrap bg-green-600 rounded-3xl shadow-[0px_4px_19px_rgba(119,147,65,0.3)] max-md:px-5 max-md:max-w-full text-base"

      onClick={onClick}
      disabled={disabled}
    >
      Accept
    </button>
  );
};

export default AcceptButton;
