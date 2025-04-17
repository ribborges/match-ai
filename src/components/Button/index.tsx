interface ButtonProps {
    id?: string;
    name?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
    return (
        <button 
            id={props.id}
            name={props.name}
            onClick={props.onClick}
            disabled={props.disabled}
            type={props.type}
            className="
                flex
                bg-indigo-500 hover:bg-yellow-500
                text-white font-bold p-4 rounded-full
                shadow-lg hover:shadow-black/40 dark:hover:shadow-zinc-100/20
                disabled:bg-neutral-500 disabled:cursor-not-allowed
                cursor-pointer
                transition duration-300 ease-in-out
            "
        >
            {props.children}
        </button>
    );
}