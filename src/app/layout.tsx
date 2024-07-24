import React, {FC, PropsWithChildren} from "react";
import type {Metadata} from "next";
import {Bebas_Neue} from "next/font/google";
import "./globals.css";

const BebasNeue = Bebas_Neue({
    weight: '400',
    display: 'swap',
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: "Kraken staking",
    description: "Kraken staking",
};


const RootLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <html lang="en">
        <body className={BebasNeue.className}>
        <header>Header</header>
        <main>
            {children}
        </main>
        <footer>Footer</footer>
        </body>
        </html>
    );
}

export default RootLayout;
