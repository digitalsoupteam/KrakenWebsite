'use client';

import React, {FC, useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import {Wrapper} from "@/components/layout";
import {Button} from "@/components/ui";
import {CustomWalletConnectButton, LangSwitcher} from "@/components/common";

import styles from './Header.module.css';


const Header: FC = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
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

    return <header className={styles.root}>
        <Wrapper>
            <div className={styles.inner}>
                <Link className={styles.logo} href={"/"}>
                    <Image className={styles.logoImage} src="/images/logo.png" width="246" height="40" alt={""}/>
                </Link>

                <LangSwitcher className={styles.langSwitcher}/>

                <Button className={clsx(styles.burgerButton, isMenuOpened && styles.burgerButtonActive)}
                        onClick={() => setIsMenuOpened(!isMenuOpened)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Button>

                <ul className={clsx(styles.menu, isMenuOpened && styles.menuOpened)}>
                    {menuItems && menuItems.length && menuItems.map(menuItem => (
                        <li key={menuItem.name}>
                            <Link className={styles.menuLink} href={menuItem.link}>
                                {menuItem.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <CustomWalletConnectButton className={styles.loginMobile} isSmall={true}/>
                    </li>
                </ul>

                <CustomWalletConnectButton className={styles.login}/>
            </div>
        </Wrapper>
    </header>
};

export default Header;
