import React, {FC} from 'react';
import Image from "next/image";

import {Wrapper} from "@/components/layout";
import {CopyLink, Socials} from "@/components/common";

import styles from './Hero.module.css';

const Hero: FC = () => {
    return <section className={styles.root}>
        <Wrapper>
            <div className={styles.inner}>
                <Image className={styles.logo} src={'/kraken.png'} width="300" height="100" alt={'kraken logo'} />

                <CopyLink text={'This will be the address of the token'} copyText={'This will be the address of the token'} isLarge={true} />

                <Socials />
            </div>
        </Wrapper>
    </section>
};

export default Hero;
