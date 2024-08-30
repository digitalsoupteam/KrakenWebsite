'use client';

import React, {FC, useRef, useState, useEffect} from 'react';
import {motion, useInView, useScroll, useTransform, MotionValue} from "framer-motion";
import Image from "next/image";

import styles from './Background.module.css';

const Background: FC = () => {
    const loadAnimationDuration: number = 1.8;
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {once: true});
    const [isWideWindow, setIsWideWindow] = useState<boolean>(false);

    const distanceDivider: number = 2;
    const {scrollYProgress} = useScroll({target: sectionRef});
    const useParallax = (value: MotionValue, distance: number, isEnabled: boolean) => {
        return useTransform(
            value,
            [0, 1],
            [0, isEnabled ? distance / distanceDivider : 0]
        );
    };

    useEffect(() => {
        setIsWideWindow(window.matchMedia('(min-width: 768px)').matches);
    }, []);

    return <section className={styles.root} ref={sectionRef}>
        <motion.div
            className={styles.asteroids}
            style={{y: useParallax(scrollYProgress, 100, true)}}
        >
            <Image src={'/asteroids.png'} width="134" height="116" alt={''}/>
        </motion.div>

        <motion.div
            className={styles.chest}
            style={{y: useParallax(scrollYProgress, 200, true)}}
        >
            <picture>
                <source media={`(min-width: 1024px)`} srcSet={'/chest.png'}/>
                <Image src={'/chest-mobile.png'} width="182" height="212" alt={''}/>
            </picture>
        </motion.div>

        <motion.div
            className={styles.planets}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{
                duration: loadAnimationDuration,
                ease: 'easeInOut',
            }}
            variants={{
                hidden: {x: '100px', y: '100px', rotate: '-35deg'},
                visible: {x: 0, y: '0', rotate: '0'},
            }}
        >
            <Image src={'/planets.png'} width="134" height="116" alt={''}/>
        </motion.div>

        <motion.div
            className={styles.rocket}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            viewport={{once: true}}
            transition={{
                duration: loadAnimationDuration,
                ease: 'easeInOut',
            }}
            variants={{
                hidden: {x: '100vw', y: isWideWindow ? '100vh' : '70vh'},
                visible: {x: 0, y: '0'},
            }}
        >
            <Image src={'/rocket.png'} width="134" height="116" alt={''}/>
        </motion.div>
    </section>
};

export default Background;
