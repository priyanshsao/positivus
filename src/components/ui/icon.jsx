export const PlusIcon = () => {
  return (
    <div className="flex size-14.5 rounded-full border border-[#191A23] bg-[#FAFAFA] items-center justify-center">
      <svg
        width="25"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.6 25.08V15.36H0V9.72H9.6V0H15.48V9.72H25.08V15.36H15.48V25.08H9.6Z"
          fill="#191A23"
        />
      </svg>
    </div>
  );
};

export const MinusIcon = () => {
  return (
    <div className="flex size-14.5 rounded-full border border-[#191A23] bg-[#FAFAFA] items-center justify-center">
      <svg width="18" height="6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 5.64V0H17.76V5.64H0Z" fill="black" />
      </svg>
    </div>
  );
};

export const SeperationLine = () => {
  return (
    <svg
      width="1"
      height="186"
      viewBox="0 0 1 186"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hidden lg:block"
    >
      <line x1="0.5" y1="1.89494e-08" x2="0.499991" y2="186" stroke="white" />
    </svg>
  );
};
