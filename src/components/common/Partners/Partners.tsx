import React, {FC} from 'react';
import {motion} from "framer-motion";

import {Wrapper} from "@/components/layout";

import styles from './Partners.module.css';
import Link from "next/link";
import Image from "next/image";

const Partners: FC = () => {
    const partners = [
        {
            name: 'coinmarketcap',
            link: 'https://coinmarketcap.com/',
            logo: '/coimarketcap.png',
        },
        {
            name: 'dextools',
            link: 'https://www.dextools.io/',
            logo: '/dextools.png',
        },
        {
            name: 'solana',
            link: 'https://solana.com/',
            logo: '/solana-logo.png',
        },
        {
            name: 'dexscreener',
            link: 'https://dexscreener.com/',
            logo: '/dexscreener.png',
        },
        {
            name: 'raydium',
            link: 'https://raydium.io/',
            logo: '/raydium.png',
        },
    ];

    return <section className={styles.root}>
        <Wrapper>
            <ul className={styles.list}>
                {
                    partners && partners.length && partners.map((partner, index) => (
                        <motion.li
                            key={partner.name}
                            initial="hidden"
                            whileInView="visible"
                            transition={{
                                duration: 0.8,
                                ease: 'easeInOut',
                                delay: 0.1 * index
                            }}
                            variants={{
                                hidden: { y: 100, opacity: 0 },
                                visible: { y: 0, opacity: 1 },
                            }}
                        >
                            <Link href={partner.link} target={'_blank'}>
                                <Image className={styles.logo} src={partner.logo} width="300" height="100" alt={partner.name}/>
                            </Link>
                        </motion.li>
                    ))
                }
            </ul>
        </Wrapper>
    </section>
};

export default Partners;
