import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function MatchLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen">
            <AnimatedBackground topLayerClassName="backdrop-blur-3xl" />
            <Header />
            <main className="flex-1 flex flex-col items-strech justify-center gap-6 md:p-4 min-h-screen overflow-hidden">
                <div
                    className="
                        flex-1
                        mt-26 mb-4 md:m-18 lg:m-28 p-4
                        flex
                        bg-zinc-100 dark:bg-zinc-950
                        border-t border-b md:border border-zinc-200 dark:border-zinc-900 md:rounded-2xl
                    "
                >
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}