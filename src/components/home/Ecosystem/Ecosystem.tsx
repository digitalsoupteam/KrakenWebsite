import React, {FC} from 'react';

import {Wrapper} from "@/components/layout";
import {Button, Text, Title} from "@/components/ui";

import styles from './Ecosystem.module.css';
import {Socials} from "@/components/common";

const Ecosystem:FC = () => {
    return <section className={styles.root}>
        <Wrapper>
            <div className={styles.inner}>
                <Title className={styles.title} size={'medium'} isNoShadow={true}>Цель экосистемы</Title>

                <Text className={styles.text} size={'medium'}>Мы создаем единый хаб, “мост” между Web2 и Web3, где каждый некриптан сможет войти в мир крипты через понятные простые квесты, а криптаны – заработать на росте экосистемы.</Text>

                <div className={styles.buttons}>
                    <Button className={styles.button} locked={true} disabled={true}>Buy kraken</Button>
                    <Socials/>
                </div>
            </div>
        </Wrapper>
    </section>
};

export default Ecosystem;