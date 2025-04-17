import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="
                flex flex-col items-center justify-center gap-4
                p-12
                bg-zinc-100 dark:bg-zinc-950
                border-t border-zinc-200 dark:border-zinc-900
            "
        >
            <Image
                src="/logoLegal.svg"
                alt="Match.AI Logo"
                width={64}
                height={64}
            />
            <span>match.ai &copy; | {currentYear}</span>
        </footer>
    );
}