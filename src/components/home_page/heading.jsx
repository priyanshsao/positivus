import clsx from "clsx"

const headingVariants = {
    green:"bg-primary text-black",
    white:"bg-white text-black",
    black:"bg-tertiary text-white",
}

export const Heading = ({variant = "green", content = ["sample","data"], slots = 2}) => {
    
    if (slots > 0 && slots <= 3) {
        if (slots == 1) {
            return (
            <div className={clsx(
                "flex flex-col w-fit gap-2.5 px-1.75 rounded-[7px]",
                headingVariants[variant]
            )}>
                <h3>{content[0]}</h3>
            </div>
            )
        } else {
            return (
                <div className="flex flex-col">
                    {content.map((labelData, index) => {
                            if (content.length < slots) {
                                console.error("not enough contents");
                                return null;
                            } else if (content.length > slots) {
                                index < slots &&
                                 (
                                    <div className={clsx(
                                        "flex flex-col w-fit gap-2.5 px-1.75 rounded-[7px]",
                                        headingVariants[variant]
                                    )}
                                    key={index}
                                    >
                                        <h3 className="truncate text-">{labelData}</h3>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className={clsx(
                                        "flex flex-col w-fit gap-2.5 px-1.75 rounded-[7px]",
                                        headingVariants[variant]
                                    )}
                                    key={index}
                                    >
                                        <h3 className="truncate">{labelData}</h3>
                                    </div>
                                )
                            }
                        }
                    )}
                </div>
            )
        }
    } else {
        console.error("wrong slot value! [out of index]")
        return null
    }
                
}