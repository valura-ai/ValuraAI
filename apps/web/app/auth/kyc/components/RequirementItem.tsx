import * as React from "react";

interface RequirementItemProps {
  icon: string;
  text: string;
}

export function RequirementItem({ icon, text }: RequirementItemProps) {
  return (
    <div className="flex gap-5 px-9 py-7 bg-white rounded-[30px] max-md:px-5">
      <img
        src={icon}
        className="object-contain shrink-0 w-6 aspect-square"
        alt=""
      />
      <p className="flex-auto w-[324px]">{text}</p>
    </div>
  );
}
