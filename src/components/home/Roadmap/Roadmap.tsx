import React, {FC} from 'react';
import Image from "next/image";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

import {Title} from "@/components/ui";
import {FadeOut} from "@/components/common";

import styles from './Roadmap.module.css';

const Roadmap: FC = () => {
    const {t} = useTranslation();

    const items = [
        {
            name: 'listing DEX',
            content: t('roadmap:dex'),
        },
        {
            name: 'Nft minting',
            content: t('roadmap:nft'),
        },
        {
            name: 'Geocaching',
            content: t('roadmap:geocaching'),
        },
        {
            name: 'listing CEX',
            content: t('roadmap:cex'),
        }
    ];

    return <section className={styles.root} id="roadmap">
        <FadeOut>
            <Title className={styles.title} size={'medium'} isNoShadow={true} as={'h2'}>KRAKEN Roadmap</Title>
        </FadeOut>

        <div className={styles.content}>
            <picture>
                <source media="(min-width: 768px)" srcSet="/images/roadmap-desktop.png"/>
                <Image className={styles.roadmap} src={'/images/roadmap-mobile.png'} width="300" height="100"
                       alt="roadmap"/>
            </picture>

            <picture>
                <source media="(min-width: 768px)" srcSet="/images/asteroids-big-desktop.png"/>
                <Image className={styles.asteroids} src={'/images/asteroids-big-mobile.png'} width="300" height="100"
                       alt="asteroids"/>
            </picture>

            <ol className={styles.list}>
                {items && items.length && items.map((item, index) => (
                    <motion.li
                        className={styles.item}
                        initial="hidden"
                        whileInView="visible"
                        transition={{
                            duration: 0.8,
                            ease: 'easeInOut',
                            delay: 0.1 * index
                        }}
                        variants={{
                            hidden: {y: 100, opacity: 0},
                            visible: {y: 0, opacity: 1},
                        }}
                        key={item.name}
                    >
                        {item.content}
                    </motion.li>
                ))}
            </ol>
        </div>
    </section>
};

export default Roadmap;
