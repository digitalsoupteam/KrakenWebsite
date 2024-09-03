import React, {FC} from 'react';
import Marquee from "react-fast-marquee";

import {Wrapper} from "@/components/layout";

import styles from './Tags.module.css';

const Tags: FC = () => {
    const items = [
        'Kraken token',
        'Web3 geocaching',
        'staking',
        'Nft',
        'Gamefi',
        'Tap-to-earn',
        'Rewards',
        'Launchpad',
        'Charity'
    ];

    return <section className={styles.root}>
        <Wrapper>
            <div className={styles.inner}>
                <Marquee className={styles.marquee} autoFill={true} speed={50}>
                    {items && items.length > 0 && items.map(item => (
                        <span className={styles.item} key={item}>{item}</span>
                    ))}
                </Marquee>
            </div>
        </Wrapper>
    </section>
};

export default Tags;