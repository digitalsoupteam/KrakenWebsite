import React, {FC} from 'react';
import clsx from "clsx";
import {motion} from "framer-motion";

import {Wrapper} from "@/components/layout";

import styles from './About.module.css';
import Image from "next/image";

const About: FC = () => {
    const animationDuration = 0.8;

    return <section className={styles.root} id="about">
        <Wrapper>
            <motion.div
                className={styles.inner}
                initial="hidden"
                whileInView="visible"
                transition={{
                    duration: animationDuration,
                    ease: 'easeInOut',
                }}
                variants={{
                    hidden: { y: 100, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                }}
            >
                <Image className={styles.logo} src='/logo.png' width="300" height="100" alt={'kraken logo'}/>
                <div className={styles.text}>
                    Kraken is a coin symbolizing the strength and power of the oceanic monster.<br/>
                    Its coins are virtual artifacts capable of navigation financial waves with impeccable
                    efficiency.<br/>
                    Use Kraken coin to dive into the world of digital finance and dominate the cryptocurrency market.
                </div>
            </motion.div>
        </Wrapper>

        <motion.div
            className={clsx(styles.tentacle, styles.tentacleTopLeft)}
            initial="hidden"
            whileInView="visible"
            transition={{
                type: 'spring',
                duration: animationDuration,
                mass: 20,
                stiffness: 25
            }}
            variants={{
                hidden: { y: '0%', x: '-50%', rotate: -15 },
                visible: { y: '0%', x: '0%', rotate: 0 },
            }}
        >
            <Image src="/about-bg-tentacle-tl.png" width="300" height="100" alt={'Kraken tentacle'}/>
        </motion.div>

        <motion.div
            className={clsx(styles.tentacle, styles.tentacleTopRight)}
            initial="hidden"
            whileInView="visible"
            transition={{
                type: 'spring',
                duration: animationDuration,
                mass: 20,
                stiffness: 25,
                delay: 0.1
            }}
            variants={{
                hidden: { y: '0%', x: '50%', rotate: 15 },
                visible: { y: '0%', x: '0%', rotate: 0 },
            }}
        >
            <Image src="/about-bg-tentacle-tr.png" width="300" height="100" alt={'Kraken tentacle'}/>
        </motion.div>

        <motion.div
            className={clsx(styles.tentacle, styles.tentacleBottomRight)}
            initial="hidden"
            whileInView="visible"
            transition={{
                type: 'spring',
                duration: animationDuration,
                mass: 20,
                stiffness: 25,
                delay: 0.2
            }}
            variants={{
                hidden: { y: '0%', x: '50%', rotate: 15 },
                visible: { y: '0%', x: '0%', rotate: 0 },
            }}
        >
            <Image src="/about-bg-tentacle-br.png" width="300" height="100" alt={'Kraken tentacle'}/>
        </motion.div>

        <motion.div
            className={clsx(styles.tentacle, styles.tentacleBottomLeft)}
            initial="hidden"
            whileInView="visible"
            transition={{
                type: 'spring',
                duration: animationDuration,
                mass: 20,
                stiffness: 25,
                delay: 0.3
            }}
            variants={{
                hidden: { y: '0%', x: '-50%', rotate: -15 },
                visible: { y: '0%', x: '0%', rotate: 0 },
            }}
        >
            <Image src="/about-bg-tentacle-bl.png" width="300" height="100" alt={'Kraken tentacle'}/>
        </motion.div>
    </section>
};

export default About;
