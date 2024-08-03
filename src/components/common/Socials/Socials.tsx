import React, {FC} from 'react';
import Link from "next/link";

import TelegramIcon from '/public/telegram.svg';
import TwitterIcon from '/public/twitter.svg';

import styles from './Socials.module.css';

const Socials: FC = () => {
    const socialItems = [
        {
            link: '#',
            icon: <TelegramIcon className={styles.icon}/>
        },
        {
            link: '#',
            icon: <TwitterIcon className={styles.icon}/>
        }
    ];

    return <ul className={styles.root}>
        {
            socialItems && socialItems.length && socialItems.map(item => (
                <li key={item.link}>
                    <Link className={styles.link} href={item.link}>
                        {item.icon}
                    </Link>
                </li>
            ))
        }
    </ul>
};

export default Socials;
