'use client';

import React, {FC} from 'react';
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

import {Wrapper} from "@/components/layout";
import {Socials} from "@/components/common";

import styles from './Footre.module.css';

const Footer: FC = () => {
    const {t} = useTranslation();

    const primaryNav = [
        {
            name: t('footer:about'),
            link: '/#about',
        },
        // {
        //     name: t('footer:buy'),
        //     link: '/#',
        // },
        // {
        //     name: t('footer:white-paper'),
        //     link: '/#',
        // },
        // {
        //     name: t('footer:referrals'),
        //     link: '/#',
        // },
    ];

    const secondaryNav = [
        {
            name: t('footer:media-kit'),
            link: '/#',
        },
        {
            name: t('footer:privacy'),
            link: '/#',
        },
        {
            name: t('footer:tos'),
            link: '/#',
        },
    ];

    return <footer className={styles.root}>
        <section className={styles.topImage}>
            {/*<motion.div*/}
            {/*    className={styles.krakenInner}*/}
            {/*    initial="hidden"*/}
            {/*    whileInView="visible"*/}
            {/*    viewport={{once: true}}*/}
            {/*    transition={{*/}
            {/*        delay: 0.5,*/}
            {/*        duration: 0.8,*/}
            {/*        ease: 'easeInOut',*/}
            {/*    }}*/}
            {/*    variants={{*/}
            {/*        hidden: {y: '100%'},*/}
            {/*        visible: {y: 0},*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <div className={styles.krakenImage}>*/}
            {/*        <Image src={'/images/kraken.png'} width='251' height='245' alt=''/>*/}
            {/*    </div>*/}
            {/*    <h2 className={styles.title}>*/}
            {/*        Kraken on solana*/}
            {/*    </h2>*/}
            {/*</motion.div>*/}
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
                            primaryNav && primaryNav.length > 0 && primaryNav.map(menuItem => (
                                <li key={menuItem.name}>
                                    <Link className={styles.navLink} href={menuItem.link}>{menuItem.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <div className={styles.branding}>
                    <Link className={styles.logo} href={"/"}>
                        <Image className={styles.logoImage} src="/images/logo.png" width="246" height="40" alt={""}/>
                    </Link>
                    <Socials/>
                </div>

                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        {/*{*/}
                        {/*    secondaryNav && secondaryNav.length > 0 && secondaryNav.map(menuItem => (*/}
                        {/*        <li key={menuItem.name}>*/}
                        {/*            <Link className={styles.navLink} href={menuItem.link}>{menuItem.name}</Link>*/}
                        {/*        </li>*/}
                        {/*    ))*/}
                        {/*}*/}
                    </ul>
                </nav>
            </div>
        </Wrapper>
    </footer>
};

export default Footer;
