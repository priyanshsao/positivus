export const Section = ({children, title}) => {
    return (
      <div className="mt-20 flex flex-col col-span-full gap-5 lg:flex-row lg:gap-10">

        <div className="flex h-fit w-fit gap-2.5 px-1.75 rounded-[7px] bg-primary text-black ">
          <h2 className="text-h3-mob lg:text-h3">{title}</h2>
        </div>

        <p className="text-p-mob max-w-200 h-fit">{children}</p>
      </div>
    )
}