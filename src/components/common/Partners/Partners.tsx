import React, {FC} from 'react';
import Link from 'next/link';

import {Wrapper} from '@/components/layout';
import {Title} from '@/components/ui';

import styles from './Partners.module.css';
import Image from "next/image";
import {FadeOut} from "@/components/common";

const Partners: FC = () => {
    const items = [
        {
            logo: '/images/blockchainlife-logo.png',
            link: 'https://blockchain-life.com/?utm_source=google&utm_medium=organic',
            image: '/images/blockchainlife-pic.png',
            title: <>2024 <span>UAE, DUBAI</span></>,
            text: <>We were among the sponsors at the biggest crypto conference in Dubai. Everything related to water
                was on Kraken&apos;s shoulders!</>
        }
    ];

    return <section>
        <Wrapper>
            <div className={styles.inner}>
                <Title className={styles.title} size={'big'} isNoShadow={true} as={'h2'}>Partners</Title>
                <ul className={styles.list}>
                    {items && items.length > 0 && items.map((item, index) => (
                        <li key={item.link + index}>
                            <FadeOut className={styles.item} delay={0.5 * index}>
                                <div className={styles.logo}>
                                    <Link className={styles.link} href={item.link} target={'_blank'}>
                                        <Image src={item.logo} width={'300'} height={'100'} alt={''}/>
                                    </Link>
                                </div>
                                <div className={styles.image}>
                                    <Image src={item.image} width={'300'} height={'100'} alt={''}/>
                                </div>
                                <div className={styles.textContainer}>
                                    <div className={styles.contentTitle}>{item.title}</div>
                                    <div className={styles.text}>{item.text}</div>
                                </div>
                            </FadeOut>
                        </li>
                    ))}
                </ul>
            </div>
        </Wrapper>
    </section>
};

export default Partners;
