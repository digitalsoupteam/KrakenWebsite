import React, {FC} from 'react';
import Image from "next/image";
import clsx from "clsx";
import {motion} from "framer-motion";

import {Wrapper} from "@/components/layout";
import {Button, Text, Title} from "@/components/ui";
import ArrowIcon from '/public/images/arrow.svg';

import styles from './About.module.css';

const About: FC = () => {
    const itemsLeft = [
        {
            name: 'Лаунчпад для запуска проектов',
        },
        {
            name: 'Игра Release the kraken',
        },
        {
            name: 'Игра TAP–TO–EARN',
            link: 'https://t.me/kraken_tap_to_earn_bot/kraken_tap_to_earn'
        },
        {
            name: 'Стейкинг',
            link: '/staking/'
        }
    ];

    const itemsRight = [
        {
            name: 'Utility – токен',
            link: '#'
        },
        {
            name: 'Квесты и геокэшинг ',
        },
        {
            name: 'Редкие NFT',
        },
        {
            name: 'Благотворительность',
        }
    ];

    return <section className={styles.root} id="about">
            <div className={styles.textContainer}>
                <Wrapper>
                    <Title className={styles.title} size={'big'} isNoShadow={true} as={'h2'}>What is kraken?</Title>
                    <Text className={styles.text} size={'medium'}>KRAKEN – это большая экосистема на SOL, цель которой – привлечь как можно больше криптанов/людей/проектов из Web2, показать им как пользоваться экосистемой. Каждый сможет найти для себя utility на платформе:</Text>
                </Wrapper>
            </div>

            <div className={styles.projects}>
                <Wrapper>
                    <div className={styles.projectsLeft}>
                        {itemsLeft && itemsLeft.map((item) => (
                            <Button className={styles.button} href={item.link} target={"_blank"} isLight={true} locked={!item.link} disabled={!item.link} key={item.name}>
                                {item.name} {item.link && <ArrowIcon/>}
                            </Button>
                        ))}
                    </div>
                    <motion.div className={styles.kraken}>
                        <Image src="/images/kraken-on-whale.png" width="363" height="340" alt=""/>
                    </motion.div>
                    <div className={styles.projectsRight}>
                        {itemsRight && itemsRight.map((item) => (
                            <Button className={styles.button} href={item.link} target={"_blank"} isLight={true} locked={!item.link} disabled={!item.link} key={item.name}>
                                {item.name} {item.link && <ArrowIcon/>}
                            </Button>
                        ))}
                    </div>
                </Wrapper>
            </div>
    </section>
};

export default About;
