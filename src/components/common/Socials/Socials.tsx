import React, {FC} from 'react';
import Link from "next/link";

import TelegramIcon from '/public/images/telegram.svg';
import TwitterIcon from '/public/images/twitter.svg';

import styles from './Socials.module.css';

const Socials: FC = () => {
    const socialItems = [
        {
            link: 'https://t.me/releasethekraken',
            icon: <TelegramIcon className={styles.icon}/>
        },
        {
            link: 'https://twitter.com/TheKrakenCoin',
            icon: <TwitterIcon className={styles.icon}/>
        }
    ];

    return <ul className={styles.root}>
        {
            socialItems && socialItems.length && socialItems.map(item => (
                <li key={item.link}>
                    <Link className={styles.link} href={item.link} target={'_blank'}>
                        {item.icon}
                    </Link>
                </li>
            ))
        }
    </ul>
};

export default Socials;
