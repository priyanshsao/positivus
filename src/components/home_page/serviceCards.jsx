import { Heading } from "./heading";
import { Link } from "./link";
import clsx from "clsx";

const color = {
    green: "bg-primary",
    grey: "bg-secondary",
    dark: "bg-tertiary"
}

export const ServiceCard = ({content, link, header, imgSrc, bgColor}) => {

  return (
    <div className={clsx(
        "flex max-w-175 justify-center w-full sm:justify-between items-center p-12.5 overflow-hidden rounded-[45px] border border-[#191A23] shadow-[0_5px_0_0_#191A23]",
        color[bgColor]
    )}>
      <div className="flex flex-col justify-center gap-10.5 md:gap-23.25">
        <Heading variant={header["variant"]} content={content} slots={link["slots"]} />
        <Link variant={link["variant"]} subVariant={link["subVariant"]}>Learn more</Link>
      </div>

      <img
        src={imgSrc}
        alt="Search engine optimization"
        className="hidden sm:block"
      />
    </div>
  );
};
