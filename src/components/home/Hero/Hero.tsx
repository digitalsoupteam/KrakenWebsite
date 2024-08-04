import React, {FC, useRef} from 'react';
import Image from "next/image";
import {motion, useScroll, useTransform, MotionValue} from 'framer-motion';

import {Wrapper} from "@/components/layout";
import {CopyLink, Socials} from "@/components/common";

import styles from './Hero.module.css';

const Hero: FC = () => {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({target: targetRef});

    const distanceDivider = 0.5;
    const useParallax = (value: MotionValue, distance: number) => {
        return useTransform(value, [0, 1], [0, distance / distanceDivider]);
    };

    return <section className={styles.root}>
        <Wrapper>
            <motion.div className={styles.inner} style={{y: useParallax(scrollYProgress, 100)}}>
                <Image className={styles.logo} src={'/kraken.png'} width="300" height="100" alt={'kraken logo'}/>

                <CopyLink text={'This will be the address of the token'}
                          copyText={'This will be the address of the token'} isLarge={true}/>

                <Socials/>
            </motion.div>
        </Wrapper>
    </section>
};

export default Hero;
