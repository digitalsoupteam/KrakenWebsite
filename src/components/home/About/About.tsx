import React, {FC} from 'react';
import Image from "next/image";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

import {Wrapper} from "@/components/layout";
import {FadeOut, SlideIn} from "@/components/common";
import {Button, Text, Title} from "@/components/ui";
import ArrowIcon from '/public/images/arrow.svg';

import styles from './About.module.css';

const About: FC = () => {
    const {t} = useTranslation();

    const itemsLeft = [
        {
            name: t('about:launchpad'),
        },
        {
            name: t('about:game-v2'),
        },
        {
            name: t('about:tap-to-earn'),
            link: 'https://t.me/kraken_tap_to_earn_bot/kraken_tap_to_earn'
        },
        {
            name: t('about:staking'),
            link: '/staking/'
        }
    ];

    const itemsRight = [
        {
            name: t('about:token'),
            link: '#'
        },
        {
            name: t('about:geocaching'),
        },
        {
            name: t('about:nft'),
        },
        {
            name: t('about:сharity'),
        }
    ];

    return <section className={styles.root} id="about">
        <SlideIn className={styles.textContainer}>
            <Wrapper>
                <Title className={styles.title} size={'big'} isNoShadow={true} as={'h2'}>{t('about:title')}</Title>
                <Text className={styles.text} size={'medium'}>{t('about:text')}</Text>
            </Wrapper>
        </SlideIn>

        <div className={styles.projects}>
            <Wrapper>
                <div className={styles.projectsLeft}>
                    {itemsLeft && itemsLeft.map((item, index) => (
                        <FadeOut
                            delay={0.5 * index}
                            key={item.name}
                        >
                            <Button className={styles.button} href={item.link} target={"_blank"} isLight={true}
                                    locked={!item.link} disabled={!item.link} key={item.name}>
                                {item.name} {item.link && <ArrowIcon/>}
                            </Button>
                        </FadeOut>
                    ))}
                </div>
                <motion.div
                    className={styles.kraken}
                    initial="hidden"
                    whileInView="visible"
                    transition={{
                        duration: 1.5,
                        ease: 'easeInOut',
                    }}
                    variants={{
                        hidden: {x: '40%', y: '-100%', scale: 0},
                        visible: {x: 0, y: '-50%', scale: 1},
                    }}
                >
                    <Image src="/images/kraken-on-whale.png" width="363" height="340" alt=""/>
                </motion.div>
                <div className={styles.projectsRight}>
                    {itemsRight && itemsRight.map((item, index) => (
                        <FadeOut
                            delay={0.5 * index}
                            key={item.name}
                        >
                            <Button className={styles.button} href={item.link} target={"_blank"} isLight={true}
                                    locked={!item.link} disabled={!item.link}>
                                {item.name} {item.link && <ArrowIcon/>}
                            </Button>
                        </FadeOut>
                    ))}
                </div>
            </Wrapper>
        </div>
    </section>
};

export default About;
