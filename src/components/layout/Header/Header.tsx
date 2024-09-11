'use client';

import React, {FC, useState} from 'react';
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

import {Wrapper} from "@/components/layout";
import {Button} from "@/components/ui";
import {CustomWalletConnectButton, LangSwitcher} from "@/components/common";

import styles from './Header.module.css';

const Header: FC = () => {
    const { t } = useTranslation();
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const menuItems = [
        {
            name: t('menu:about'),
            link: '/#about',
        },
        {
            name: t('menu:ecosystem'),
            link: '/#ecosystem',
        },
        {
            name: t('menu:roadmap'),
            link: '/#roadmap',
        },
        {
            name: t('menu:staking'),
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
