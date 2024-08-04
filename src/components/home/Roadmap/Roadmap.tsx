import React, {FC} from 'react';
import Image from "next/image";

import styles from './Roadmap.module.css';

const Roadmap: FC = () => {
    return <section className={styles.root}>
        <picture>
            <source media="(min-width: 768px)" srcSet="/roadmap-desktop.png"/>
            <Image className={styles.roadmap} src={'/roadmap-mobile.png'} width="300" height="100" alt="roadmap"/>
        </picture>

        <picture>
            <source media="(min-width: 768px)" srcSet="/asteroids-big-desktop.png"/>
            <Image className={styles.asteroids} src={'/asteroids-big-mobile.png'} width="300" height="100" alt="asteroids"/>
        </picture>

        <ol className={styles.list}>
            <li className={styles.item}>
                Listing on CEX <br/>
                Listing RELEASE KRAKEN on CEX
            </li>

            <li className={styles.item}>
                NFT minting <br/>
                Building 444 unique NFTs. Minting RELEASE THE KRAKEN collection. Listing collection on Magic Eden.
            </li>

            <li className={styles.item}>
                Geocaching platform and $KRAKEN fund.
                Building $KRAKEN Geocaching WEB3 platform. Launch the platform and start geocaching all over the
                world.
                Launch $KRAKEN charity fund for the protection of World’s Ocean.
            </li>

            <li className={styles.item}>
                Listing on CEX <br/>
                Listing RELEASE KRAKEN on CEX
            </li>
        </ol>
    </section>
};

export default Roadmap;
