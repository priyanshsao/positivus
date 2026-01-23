export const Field1 = ({children}) => {
    return (
        <div className="flex flex-col gap-1.25">
            <p className="text-[16px] leading-7">{children}</p>
            <div className="inilne-flex  w-139 px-7.5 py-4.5 rounded-[14px] border-2 border-black bg-white">
                <input type="text" name="" id="" placeholder={children} className="w-full outline-none placeholder:font-space placeholder:text-[18px] placeholder:text-[#898989]" />
            </div>
        </div>
    )
}

export const FieldL = ({children}) => {
    return (
        <div className="flex flex-col gap-1.25">
            <p className="text-[16px] leading-7">{children}</p>
            <div className="flex w-139 h-47.5 px-7.5 py-4.5 rounded-[14px] border-2 border-black bg-white">
                <textarea type="text" name="" id="" placeholder={children} className="w-full h-fit flex resize-none overflow-hidden outline-none placeholder:font-space placeholder:text-[18px] placeholder:text-[#898989]"></textarea>
            </div>
        </div>
    )
}