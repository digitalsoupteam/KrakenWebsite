'use client';

import React, {FC, useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import {Wrapper} from "@/components/layout";
import {Button} from "@/components/ui";
import LoginIcon from '/public/login.svg';

import styles from './Header.module.css';

const Header: FC = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const menuItems = [
        {
            name: 'About',
            link: '#',
        },
        {
            name: 'Tokenomics',
            link: '#',
        },
        {
            name: 'Nft',
            link: '#',
        },
        {
            name: 'Stake',
            link: '#',
        },
    ];

    return <header className={styles.root}>
        <Wrapper>
            <div className={styles.inner}>
                <div className={styles.logo}>
                    <Image className={styles.logoImage} src="/logo.png" width="246" height="40" alt={""}/>
                </div>

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
                </ul>

                <Button className={styles.login}>
                    <LoginIcon /> Log In
                </Button>
            </div>
        </Wrapper>
    </header>
};

export default Header;
