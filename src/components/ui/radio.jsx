export const  RadioBtn = ({}) => {
    return (
        <label className="size-7 inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-black bg-white">
            <input type="radio" name="radio" className="hidden peer"/>
            <div className="size-4 rounded-full bg-[#B9FF66] scale-0 opacity-0 transition-all duration-200 ease-out peer-checked:scale-100 peer-checked:opacity-100"></div>
        </label>
    )
}

export const RadioBtnWl = ({children}) => {
    return (
        <div className="flex col-span-3 gap-3.5 items-center">
            <RadioBtn/>
            <p>{children}</p>
        </div>
    )
}