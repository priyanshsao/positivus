import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


export const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex lg:hidden flex-col items-center rounded-sm bg-white
                   hover:shadow-sm focus:outline focus:outline-2
                   outline-offset-2 outline-primary transition-all p-0.5
                   w-[30px] h-[24px] gap-1 sm:w-[46px] sm:h-[34px] sm:gap-1.5"
      >
        {[1, 2, 3].map((i) => (
          <svg key={i} className="w-full h-1 sm:h-1.5 rounded-[1px]">
            <rect width="100%" height="100%" fill="black" />
          </svg>
        ))}
      </button>

      <Menu open={open} />
    </>
  );
};


const MenuItems = ({ children }) => {
  return (
    <button className="flex flex-1 justify-center items-center py-1 rounded-[4px]
                       bg-secondary border border-secondary hover:bg-white focus:bg-primary transition-all">
      <p className="font-medium text-h4">{children}</p>
    </button>
  );
};

export const Menu = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            layout: { duration: 0.35, ease: "easeInOut" },
            opacity: { duration: 0.2 },
          }}
          className="overflow-hidden absolute
                     top-[56px] sm:top-[82px] z-[1] left-0 w-full shadow-[0px_14px_15.2px_-3px_rgba(0,0,0,0.25)]"
        >
          <div
            className="flex flex-col gap-2 p-3 bg-white rounded-[6px]
                       "
          >
            <MenuItems>Home</MenuItems>
            <MenuItems>About</MenuItems>
            <MenuItems>Services</MenuItems>
            <MenuItems>Use cases</MenuItems>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
