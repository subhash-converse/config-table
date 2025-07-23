import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const DynamicTabs = ({ options, onClick }: { options: string[], onClick: (value: string) => void }) => {

    const [selectedTab, setSelectedTab] = useState<string | null>()

    const handleClick = (item: string) => {
        const newValue = (item.toLocaleLowerCase()).replaceAll(" ", "_")
        setSelectedTab((prev) => prev === newValue ? prev : newValue)
        onClick(newValue)
    };

    return (
        <>
            {options.map((item, index) => (
                <Button
                    key={index}
                    onClick={() => handleClick(item)}
                    className={cn('text-white cursor-pointer h-10 p-[10px] text-[16px] rounded-none border-1 border-[#898C81] duration-500', selectedTab === (item.toLocaleLowerCase()).replaceAll(" ", "_") ? "bg-[#FB4E0B] hover:bg-[#FB4E0B] border-[#FB4E0B]" : "bg-[#F7AB79] hover:bg-[#F7AB79]")}
                >
                    {item}
                </Button>
            ))}
        </>
    )
}

export default DynamicTabs
