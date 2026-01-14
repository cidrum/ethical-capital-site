import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "Ethical Capital - Serial Entrepreneur Acquiring Small Businesses & Distressed Real Estate",
        template: `%s | Ethical Capital`
    },
    description: "Serial entrepreneur actively seeking to acquire multiple small businesses and distressed commercial real estate properties, particularly flex warehouses. Strategic mindset with expertise in healthcare and commercial properties.",
    icons: {
        icon: [
            {
                url: "/images/favicon.jpg",
                href: "/images/favicon.jpg",
            }
        ]
    },
    openGraph: {
        title: "Ethical Capital - Serial Entrepreneur Acquiring Small Businesses & Distressed Real Estate",
        description: "Serial entrepreneur actively seeking to acquire multiple small businesses and distressed commercial real estate properties, particularly flex warehouses.",
        images: [
            {
                url: "/images/webclip.jpg",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Ethical Capital - Serial Entrepreneur Acquiring Small Businesses & Distressed Real Estate",
        description: "Serial entrepreneur actively seeking to acquire multiple small businesses and distressed commercial real estate properties, particularly flex warehouses.",
        images: [
            {
                url: "/images/webclip.jpg",
            }
        ]
    },
    metadataBase: new URL("https://ethicalcapital.com"),
};