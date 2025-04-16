import clsx from "clsx";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export default function Input({ label, ...props }: InputProps) {
    return (
        <div className="flex flex-col gap-1">
            {label &&
                <label htmlFor={props.id} className="font-bold">
                    {label}
                </label>
            }
            <input
                {...props}
                type={props.type || "text"}
                className={clsx(
                    "p-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",
                    props.className
                )}
            />
        </div>
    );
}