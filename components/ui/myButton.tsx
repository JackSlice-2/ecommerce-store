import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    ...props
}, ref) => {
    return (
        <button
        className={cn(
            `
            w-auto
            rounded-full
            bg-black
            border-transparent
            px-5
            py-3
            disabled: cursor-not-allowed
            disabled: opacity-50
            text-white
            font-semibold
            hovor:opacity-75
            transition
            `,
            className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
        >
            {children}
        </button>
    )
});

Button.displayName = "Button";

export default Button;