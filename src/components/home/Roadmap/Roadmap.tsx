import React, {FC} from 'react';
import {motion} from "framer-motion";
import Image from "next/image";

import styles from './Roadmap.module.css';

const Roadmap: FC = () => {
    const items = [
        {
            name: 'listing DEX',
            content: <>
                Listing on DEX <br/>
                The first stage of $KRAKEN. Listing on Solana ecosystem DEX (Raydium, Jupiter).
            </>,
        },
        {
            name: 'Nft minting',
            content: <>
                NFT minting <br/>
                Building 444 unique NFTs. Minting RELEASE THE KRAKEN collection. Listing collection on Magic Eden.
            </>,
        },
        {
            name: 'Geocaching',
            content: <>
                Geocaching platform and $KRAKEN fund.
                Building $KRAKEN Geocaching WEB3 platform. Launch the platform and start geocaching all over the
                world.
                Launch $KRAKEN charity fund for the protection of World’s Ocean.
            </>,
        },
        {
            name: 'listing CEX',
            content: <>
                Listing on CEX <br/>
                Listing RELEASE KRAKEN on CEX
            </>
        }
    ];

    return <section className={styles.root}>
        <picture>
            <source media="(min-width: 768px)" srcSet="/images/roadmap-desktop.png"/>
            <Image className={styles.roadmap} src={'/images/roadmap-mobile.png'} width="300" height="100" alt="roadmap"/>
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
    </section>
};

export default Roadmap;
