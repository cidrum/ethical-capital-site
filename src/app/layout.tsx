import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter, Playfair_Display, Source_Serif_4 } from "next/font/google";
import { SITE_CONFIG } from "@/config";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: '--font-playfair',
});

const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
    variable: '--font-source-serif',
});

export const metadata = SITE_CONFIG;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-blue-marine-05 text-dark-blue antialiased max-w-full overflow-x-hidden font-source-serif",
                    inter.variable,
                    playfair.variable,
                    sourceSerif.variable
                )}
            >
                {children}
            </body>
        </html>
    );
};
