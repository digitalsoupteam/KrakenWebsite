'use client';

import React, {FC, useState, useEffect, useRef} from 'react';
import Image from "next/image";
import { Swiper as SwiperType } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import {useTranslation} from "react-i18next";

import {Wrapper} from "@/components/layout";
import {Title, Text} from "@/components/ui";
import {SwiperNavigation, TextCard} from "@/components/common";

import styles from './Ecosystem.module.css';

const Ecosystem:FC = () => {
    const {t} = useTranslation();

    const [isWide, setIsWide] = useState(false);
    const swiperRef = useRef<SwiperType | null>(null);
    const items = [
        {
            title: t('ecosystem:itemsDescription:token:title'),
            text: t('ecosystem:itemsDescription:token:text'),
        },
        {
            title: t('ecosystem:itemsDescription:tte-game:title'),
            text: t('ecosystem:itemsDescription:tte-game:text'),
        },
        {
            title: t('ecosystem:itemsDescription:geocaching:title'),
            text: t('ecosystem:itemsDescription:geocaching:text'),
        },
        {
            title: t('ecosystem:itemsDescription:game-v2:title'),
            text: t('ecosystem:itemsDescription:game-v2:text'),
        },
        {
            title: t('ecosystem:itemsDescription:nft:title'),
            text: t('ecosystem:itemsDescription:nft:text'),
        },
        {
            title: t('ecosystem:itemsDescription:staking:title'),
            text: t('ecosystem:itemsDescription:staking:text'),
        },
        {
            title: t('ecosystem:itemsDescription:launchpad:title'),
            text: t('ecosystem:itemsDescription:launchpad:text'),
        },
        {
            title: t('ecosystem:itemsDescription:charity:title'),
            text: t('ecosystem:itemsDescription:charity:text'),
        }
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
                <Title className={styles.title} size={'medium'} as={'h2'} isNoShadow={true}>{t('ecosystem:titleDescription')}</Title>
                <Text className={styles.text} size={'medium'}>{t('ecosystem:textDescription')}</Text>

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

            <div className={styles.background}>
                <div className={styles.tentacleTopLeft}>
                    <Image src={'/images/about-tentacle-1.png'} width={'454'} height={'549'} alt=""/>
                </div>

                <div className={styles.tentacleTopRight}>
                    <Image src={'/images/about-tentacle-2.png'} width={'208'} height={'445'} alt=""/>
                </div>

                <div className={styles.ship}>
                    <Image src={'/images/ship-map.png'} width={'360'} height={'250'} alt=""/>
                </div>
            </div>
        </Wrapper>
    </section>
};

export default Ecosystem;
