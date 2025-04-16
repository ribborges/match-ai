interface ButtonProps {
    id?: string;
    name?: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
}

export default function AnimatedButton(props: ButtonProps) {
    return (
        <button 
            id={props.id}
            name={props.name}
            onClick={props.onClick}
            disabled={props.disabled}
            type={props.type}
            className="
                flex
                bg-gradient-to-tr from-indigo-500 to-yellow-500 hover:from-yellow-500 hover:to-indigo-500
                text-white font-bold p-4 rounded-full
                shadow-lg hover:shadow-black/40 dark:hover:shadow-zinc-100/20
                hover:scale-105
                cursor-pointer
                transition duration-300 ease-in-out
            "
        >
            {props.children}
        </button>
    );
}