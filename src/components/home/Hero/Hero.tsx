import React, {FC} from 'react';
import Image from "next/image";
import {motion} from 'framer-motion';

import {Wrapper} from "@/components/layout";
import {Button, Text, Title} from "@/components/ui";
import {Socials} from "@/components/common";

import styles from './Hero.module.css';

const Hero: FC = () => {
    return <section className={styles.root}>
        <Wrapper>
            <div className={styles.inner}>
                <div className={styles.heroImage}>
                    <motion.div className={styles.krakenImage}>
                        <Image src={'/images/kraken.png'} width="297" height="231" alt="kraken"/>
                    </motion.div>
                    <motion.div className={styles.krakenLogo}>
                        <Image src={'/images/logo.png'} width="326" height="72" alt="kraken logo"/>
                    </motion.div>
                </div>

                <div className={styles.content}>
                    <Title className={styles.title} size={'large'} isNoShadow={true}>Мы – Kraken ecosystem</Title>
                    <Text className={styles.text} size={'big'}>
                        Ваш мост между реальным миром и Web3. Выполняйте геокэшинг задания в реальном мире, стейкайте
                        токен,
                        холдите NFT, тапайте в игре и зарабатывайте
                    </Text>
                    <div className={styles.buttons}>
                        <Button className={styles.buy} isLight={true} disabled={true} locked={true}>
                            Buy kraken
                        </Button>
                        <Socials/>
                    </div>
                </div>
            </div>
        </Wrapper>
    </section>
};

export default Hero;
