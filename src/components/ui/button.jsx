export const Button2 = ({children, className}) => {
    return (
        <div className="flex items-center justify-center px-8.75 py-5 rounded-[14px] w-full lg:w-fit bg-[#191A23] text-white">
            <p className="text-[20px] leading-5">{children}</p>
        </div>
    );
}

export const ButtonOutline = ({children}) => {
    return (
        <div className="flex gap-2.5 items-center justify-center xl:px-8.75 xl:py-5 lg:p-3 rounded-[14px] w-fit border border-[#191A23] text-black">
            <p className="lg:text-[18px] xl:text-[20px] leading-5 whitespace-nowrap">{children}</p>
        </div>
    );
}

export const ButtonPrimary = ({children}) => {
    return (
        <div className="flex gap-2.5 items-center justify-center px-8.75 py-5 rounded-[14px] w-fit bg-[#B9FF66] text-black">
            <p className="text-[20px] leading-5">{children}</p>
        </div>
    );
}