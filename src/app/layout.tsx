import React, {FC, PropsWithChildren} from "react";
import clsx from "clsx";
import type {Metadata} from "next";
import {Geologica} from 'next/font/google'
import localFont from 'next/font/local';

import AppWalletProvider from "@/providers/AppWalletProvider";
import {Footer, Header} from "@/components/layout";

import "./globals.css";

const GeologicaFont = Geologica({
    subsets: ['latin'],
    display: 'swap',
    variable: '--geologica'
});

const DarkHornetItalic = localFont({
    src: [
        {
            path: './fonts/DarkHornetItalic.woff2',
            weight: '400',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--dark-hornet-italic',
});

const BebasNeue = localFont({
    src: [
        {
            path: './fonts/BebasNeue.woff2',
            weight: '400',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--bebas-cyrillic',
});

export const metadata: Metadata = {
    title: "Kraken",
    description: "Kraken",
};


const RootLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <html lang="en">
        <body className={clsx(BebasNeue.className, GeologicaFont.variable, DarkHornetItalic.variable)}>
        <AppWalletProvider>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </AppWalletProvider>
        </body>
        </html>
    );
}

export default RootLayout;
