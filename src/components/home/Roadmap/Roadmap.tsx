import React, {FC} from 'react';
import {motion} from "framer-motion";
import Image from "next/image";

import styles from './Roadmap.module.css';

const Roadmap: FC = () => {
    const items = [
        <>
            Listing on CEX <br/>
            Listing RELEASE KRAKEN on CEX
        </>,
        <>
            NFT minting <br/>
            Building 444 unique NFTs. Minting RELEASE THE KRAKEN collection. Listing collection on Magic Eden.
        </>,
        <>
            Geocaching platform and $KRAKEN fund.
            Building $KRAKEN Geocaching WEB3 platform. Launch the platform and start geocaching all over the
            world.
            Launch $KRAKEN charity fund for the protection of World’s Ocean.
        </>,
        <>
            Listing on CEX <br/>
            Listing RELEASE KRAKEN on CEX
        </>
    ];
    return <section className={styles.root}>
        <picture>
            <source media="(min-width: 768px)" srcSet="/roadmap-desktop.png"/>
            <Image className={styles.roadmap} src={'/roadmap-mobile.png'} width="300" height="100" alt="roadmap"/>
        </picture>

        <picture>
            <source media="(min-width: 768px)" srcSet="/asteroids-big-desktop.png"/>
            <Image className={styles.asteroids} src={'/asteroids-big-mobile.png'} width="300" height="100"
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
                >
                    Listing on CEX <br/>
                    Listing RELEASE KRAKEN on CEX
                </motion.li>
            ))}
        </ol>
    </section>
};

export default Roadmap;
