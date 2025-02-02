"use client";

import { ShoppingBag } from "lucide-react";
import Button from "./ui/myButton";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import { ModeToggle } from "./theme-toggle";

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const router = useRouter();
    const cart = useCart();

    if (!isMounted) {
        return null;
    }

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button 
            onClick={() => router.push("/cart")} 
            className="flex items-center rounded-full bg-black px-4 py-2 cursor-pointer dark:text-white">
                <ShoppingBag  
                size={25}
                color="white"
                />
                <span className="ml-2 text-md font-medium text-white">
                    {cart.items.length}
                </span>
            </Button>
            <ModeToggle />
        </div>
    );
}

export default NavbarActions;