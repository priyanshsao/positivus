export const Section = ({children, title}) => {
    return (
      <div className="mt-32 flex flex-col col-span-full gap-5 lg:flex-row lg:gap-10">

        <div className="flex h-fit w-fit gap-2.5 px-1.75 rounded-[7px] bg-primary text-black ">
          <h2 className="text-h2-mob lg:text-h2">{title}</h2>
        </div>

        <p className="max-w-200 h-fit">{children}</p>
      </div>
    )
}