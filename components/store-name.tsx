'use client'

import { Info as InfoType } from "@/types";
import Image from "next/image";

interface StoreNameProps {
    data: InfoType
    footer?: boolean
};

const StoreName: React.FC<StoreNameProps> = ({
    data,
    footer
}) => {
    return (
        <a href="/" className={`items-center
            ${footer ? ('flex-col') : ('flex')}
            `}>
            <Image src={data.icon} alt="" className="mr-4 my-1 rounded-full"
                width={120}  
                height={120} 
            />
            <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {data.name}
            </div>
        </a>
    );
}

export default StoreName;