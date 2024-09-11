import React, {FC, useEffect, useRef, useState} from 'react';
import {Swiper as SwiperType} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import {useTranslation} from "react-i18next";

import {Wrapper} from "@/components/layout";
import {Title} from "@/components/ui";
import {SwiperNavigation, TextCard} from "@/components/common";

import styles from './Faq.module.css';

const Faq: FC = () => {
    const {t} = useTranslation();

    const [isWide, setIsWide] = useState(false);
    const swiperRef = useRef<SwiperType | null>(null);
    const items = [
        {
            title: t('faq:items:about:title'),
            text: t('faq:items:about:text'),
        },
        {
            title: t('faq:items:how-geocaching:title'),
            text: t('faq:items:how-geocaching:text'),
        },
        {
            title: t('faq:items:how-stake:title'),
            text: t('faq:items:how-stake:text'),
        },
        {
            title: t('faq:items:safety:title'),
            text: t('faq:items:safety:text'),
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
                <Title className={styles.title} size={'medium'} isNoShadow={true}>{t('faq:title')}</Title>

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
