import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
});

const RobotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Rodrigo Cabral",
    description: "Software Developer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${RobotoMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
