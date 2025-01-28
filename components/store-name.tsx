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
        <a href="/" className={`items-center m-1 mr-4
            ${footer ? ('flex-col') : ('flex')}
            `}>
            <Image src={data.icon} alt="" className="w-auto h-14 mr-3 my-2 rounded-full"
                width={100}
                height={100} 
            />
            <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {data.name}
            </div>
        </a>
    );
}

export default StoreName;