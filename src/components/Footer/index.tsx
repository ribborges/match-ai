export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="
                flex items-center justify-center gap-4
                p-12
                bg-zinc-100 dark:bg-zinc-950
                border-t border-zinc-200 dark:border-zinc-900
            "
        >
            match.ai &copy; | {currentYear}
        </footer>
    );
}