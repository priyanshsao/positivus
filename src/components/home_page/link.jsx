import clsx from "clsx";
import { Arrow } from "./icons/linkIcons";

const linkVariants = {
    primary: {
        outer: "flex-row",
        inner: "size-10.25 rounded-full inline-flex items-center justify-center"
    },
    secondary: {
        outer: "flex-row-reverse",
        inner: ""
    },
}

const subPrimaryVariants = {
    white: {
        outer: "text-white",
        inner: "bg-white"
    },
    whiteDark: {
        outer: "text-white",
        inner: "bg-white"
    },
    black: {
        outer: "text-black",
        inner: "bg-dark",
    },
    blackDark: {
        outer: "text-black",
        inner: "bg-dark",
    },
    green: {
        outer: "text-white",
        inner: "bg-primary",
    },
    greenDark: {
        outer: "text-black",
        inner: "bg-primary",
    },
}

const subSecondaryVariants = {
    green: "text-primary",
    white: "text-white",
    black: "text-black",
}

export const Link = ({
  variant = "primary",
  subVariant = "white",
  children,
}) => {
  const outerClass = clsx(
    "flex w-fit gap-3.75 items-center",
    linkVariants[variant].outer,
    variant === "primary" && subPrimaryVariants[subVariant].outer,
    variant === "secondary" && subSecondaryVariants[subVariant]
  );

  const innerClass = clsx(
    linkVariants[variant].inner,
    variant === "primary" && subPrimaryVariants[subVariant].inner
  );

  function ArrowVariant() {
       if ( variant == "primary" ) {
         if (subVariant === "whiteDark" || subVariant === "greenDark") {return "black"} 
         else if (subVariant === "white" || subVariant === "black") {return "green"}
         else if (subVariant === "green" || subVariant === "blackDark") {return "white"}
       } else {
        return null
       } 
  }

  return (
    <div className={outerClass}>
      <div className={innerClass}>
        <Arrow variant={variant == "secondary"? subVariant :ArrowVariant()} />
      </div>
      <p className="text-h4 leading-7">{children}</p>
    </div>
  );
};

