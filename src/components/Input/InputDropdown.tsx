import { HTMLAttributes, ReactNode } from "react";

function InputDropdown({ children, ...props }: Omit<HTMLAttributes<HTMLDivElement>, 'className'>) {
    return (
        <div
            {...props}
            className="
                z-10 absolute top-18
                bg-zinc-200 dark:bg-zinc-800
                border border-zinc-300 dark:border-zinc-700 rounded-lg
                max-h-52
                overflow-scroll
            "
        >
            <ul className="flex flex-col gap-1 p-2">
                {children}
            </ul>
        </div>
    );
}

function InputDropdownItem({
    children,
    onClick,
}: {
    children: ReactNode;
    onClick: () => void;
}) {
    return (
        <li
            className="hover:bg-zinc-300 dark:hover:bg-zinc-700 p-2 rounded-lg cursor-pointer"
            onClick={onClick}
        >
            {children}
        </li>
    );
}

export { InputDropdown, InputDropdownItem };