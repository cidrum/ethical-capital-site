import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { SITE_CONFIG } from "@/config";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: '--font-playfair',
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
                    "min-h-screen bg-background text-foreground antialiased max-w-full overflow-x-hidden",
                    inter.variable,
                    playfair.variable
                )}
            >
                {children}
            </body>
        </html>
    );
};
