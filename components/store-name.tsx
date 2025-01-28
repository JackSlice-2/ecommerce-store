'use client'

import { Info as InfoType } from "@/types";
import Image from "next/image";

interface StoreNameProps {
    data: InfoType
};

const StoreName: React.FC<StoreNameProps> = ({
    data
}) => {
    return (
        <a href="/" className="flex items-center">
            <Image width={55} height={55} alt="" src={data.icon} className=" mr-4 rounded-full"/>
                {data.name}
            <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            </div>
        </a>
    );
}

export default StoreName;