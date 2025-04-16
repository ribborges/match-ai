import Logo from "@/components/Logo";

export default function Header() {
    return (
        <header
            className="
                fixed top-0 left-0 right-0 m-2
                flex items-center justify-center gap-6
                p-4
                bg-zinc-200/20 dark:bg-zinc-900/20 backdrop-blur-xl
                border border-b-2 border-solid border-zinc-200/20 dark:border-zinc-800/20
                rounded-full
                shadow-md
            "
        >
            <div className="h-12 w-12">
                <Logo />
            </div>
            <h1 className="text-4xl font-black">match.ai</h1>
        </header>
    );
}