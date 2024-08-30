'use client';

import React, {FC} from 'react';
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";

import {Wrapper} from "@/components/layout";
import {Button} from "@/components/ui";
import TelegramIcon from '/public/images/telegram.svg';

import styles from './Footre.module.css';

const Footer: FC = () => {
    const menuItems = [
        {
            name: 'About',
            link: '/#about',
        },
        {
            name: 'Tokenomics',
            link: '/#tokenomics',
        },
        {
            name: 'Nft',
            link: '#',
        },
        {
            name: 'Stake',
            link: '/staking/',
        },
    ];

    return <footer className={styles.root}>
        <section className={styles.kraken}>
            <motion.div
                className={styles.krakenInner}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                transition={{
                    delay: 0.5,
                    duration: 0.8,
                    ease: 'easeInOut',
                }}
                variants={{
                    hidden: {y: '100%'},
                    visible: {y: 0},
                }}
            >
                <div className={styles.krakenImage}>
                    <Image src={'/images/kraken.png'} width='251' height='245' alt=''/>
                </div>
                <h2 className={styles.title}>
                    Kraken on solana
                </h2>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                transition={{
                    duration: 0.8,
                    ease: 'easeInOut',
                }}
                variants={{
                    hidden: {y: '100%', rotate: '15deg'},
                    visible: {y: 0, rotate: '0'},
                }}
            >
                <Image className={styles.tokenImg} src={'/images/tokens.png'} width='300' height='100' alt={''}/>
            </motion.div>
        </section>
        <Wrapper>
            <div className={styles.inner}>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        {
                            menuItems && menuItems.length && menuItems.map(menuItem => (
                                <li key={menuItem.name}>
                                    <Link className={styles.navLink} href={menuItem.link}>{menuItem.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <Button href={'https://t.me/thekrakencoin'} target="_blank">
                    <TelegramIcon/>
                    Telegram
                </Button>
            </div>
        </Wrapper>
    </footer>
};

export default Footer;
