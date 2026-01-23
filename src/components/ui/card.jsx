export const TeamCard = ({data}) => {
    return (
        // card
        <div className="flex-1 flex-col  h-87.5 gap-2.5 px-8.75 py-10 overflow-hidden rounded-[45px] ring ring-[#191A23] shadow-[0_5px_0_0_#191A23]">
            {/* content */}
            <div className="flex flex-col gap-7">
                {/* person */}
                <div className="flex  relative">
                    {/* picture & name */}
                    <div className="flex gap-5 items-end">
                        <img src={data.profile} alt="" />
                        <div className="flex flex-col">
                            <h4>{data.name}</h4>
                            <p>{data.role}</p>
                        </div>
                    </div>
                    {/* social icon */}
                    <div className="flex absolute top-0 right-0 size-9.5 rounded-full bg-black items-center justify-center ">
                        <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.317757 17H3.81308V5.68438H0.317757V17Z" fill="#B9FF66"/>
                        <path d="M0 2.07188C0 3.1875 0.900311 4.09062 2.06542 4.09062C3.17757 4.09062 4.07788 3.1875 4.07788 2.07188C4.07788 0.95625 3.17757 0 2.06542 0C0.900311 0 0 0.95625 0 2.07188Z" fill="#B9FF66"/>
                        <path d="M13.4517 17H17V10.7844C17 7.75625 16.3115 5.36562 12.7632 5.36562C11.0685 5.36562 9.90343 6.32188 9.42679 7.225H9.37383V5.68438H6.03738V17H9.53271V11.4219C9.53271 9.93437 9.79751 8.5 11.6511 8.5C13.4517 8.5 13.4517 10.2 13.4517 11.475V17Z" fill="#B9FF66"/>
                        </svg>
                    </div>
                </div>

                {/* line */}
                <svg height="1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="-4.37114e-08" y1="0.5" x2="100%" y2="0.499903" stroke="black"/>
                </svg>

                <p>{data.info}</p>
            </div>
        </div>
    );
}