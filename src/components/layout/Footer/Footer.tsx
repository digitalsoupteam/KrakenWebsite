import React, {FC} from 'react';

import {Wrapper} from "@/components/layout";
import {Button} from "@/components/ui";
import TelegramIcon from '/public/telegram.svg';

import styles from './Footre.module.css';
import Link from "next/link";

const Footer: FC = () => {
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

    return <footer>
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

                <Button href={'https://t.me/krkn'} target="_blank">
                    <TelegramIcon/>
                    Telegram
                </Button>
            </div>
        </Wrapper>
    </footer>
};

export default Footer;
