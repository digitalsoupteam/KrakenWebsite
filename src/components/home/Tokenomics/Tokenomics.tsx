import React, {FC} from 'react';

import {Wrapper} from "@/components/layout";
import {Title} from "@/components/ui";

import styles from './Tokenomics.module.css';

const Tokenomics: FC = () => {

    return <section id={'tokenomics'}>
        <Wrapper>
            <div className={styles.inner}>
                <Title className={styles.title} size={'big'}>Tokenomics</Title>
                <ul className={styles.list}>
                    <li className={styles.item}>Taxes<br/>0/0</li>
                    <li className={styles.item}>Mint&Freeze<br/>revoked</li>
                    <li className={styles.item}>Liquidity<br/>burned</li>
                    <li className={styles.item}>Total supply<br/>10 billion</li>
                </ul>
            </div>
        </Wrapper>
    </section>
};

export default Tokenomics;
