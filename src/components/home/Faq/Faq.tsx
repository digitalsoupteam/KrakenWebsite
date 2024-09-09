import React, {FC, useEffect, useRef, useState} from 'react';
import {Swiper as SwiperType} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';

import {Wrapper} from "@/components/layout";
import {Title} from "@/components/ui";


import styles from './Faq.module.css';
import {SwiperNavigation, TextCard} from "@/components/common";

const Faq: FC = () => {
    const [isWide, setIsWide] = useState(false);
    const swiperRef = useRef<SwiperType | null>(null);
    const items = [
        {
            title: 'What is KRAKEN Ecosystem?',
            text: 'RELEASE KRAKEN is an innovative crypto project that combines elements of GameFi, staking, geocaching, and donations to wildlife charity funds to create an engaging and rewarding experience for its users. RELEASE KRAKEN aims to empower SOLANA community and attract users from Web2 to Web3.',
        },
        {
            title: 'How does geocaching work?',
            text: 'RELEASE KRAKEN is an innovative crypto project that combines elements of GameFi, staking, geocaching, and donations to wildlife charity funds to create an engaging and rewarding experience for its users. RELEASE KRAKEN aims to empower SOLANA community and attract users from Web2 to Web3.',
        },
        {
            title: 'Is Kraken safe?',
            text: 'RELEASE KRAKEN is an innovative crypto project that combines elements of GameFi, staking, geocaching, and donations to wildlife charity funds to create an engaging and rewarding experience for its users. RELEASE KRAKEN aims to empower SOLANA community and attract users from Web2 to Web3.',
        },
        {
            title: 'How to stake Kraken?',
            text: 'RELEASE KRAKEN is an innovative crypto project that combines elements of GameFi, staking, geocaching, and donations to wildlife charity funds to create an engaging and rewarding experience for its users. RELEASE KRAKEN aims to empower SOLANA community and attract users from Web2 to Web3.',
        },
    ];

    const handleResize = () => {
        setIsWide(window.matchMedia('screen and (min-width: 768px)').matches);
    };

    useEffect(() => {
        if (typeof window === 'undefined') return;

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <section className={styles.root}>
        <Wrapper>
            <div className={styles.inner}>
                <Title className={styles.title} size={'medium'} isNoShadow={true}>Частые вопросы</Title>

                {
                    isWide &&
                    <div className={styles.items}>
                        {items && items.length > 0 && items.map((item) => (
                            <TextCard title={item.title} text={item.text} key={item.title}/>
                        ))}
                    </div>
                }

                {
                    !isWide &&
                    <Swiper
                        className={styles.itemsSwiper}
                        onBeforeInit={(swiper) => swiperRef.current = swiper}
                        spaceBetween={20}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                        }}
                        modules={[Autoplay]}
                        loop={true}
                    >
                        {items && items.length > 0 && items.map((item) => (
                            <SwiperSlide className={styles.slide} key={item.title}>
                                <TextCard title={item.title} text={item.text}/>
                            </SwiperSlide>
                        ))}
                        <SwiperNavigation swiperRef={swiperRef}/>
                    </Swiper>
                }
            </div>
        </Wrapper>
    </section>
};

export default Faq;
