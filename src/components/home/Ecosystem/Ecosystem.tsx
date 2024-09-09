'use client';

import React, {FC, useState, useEffect, useRef} from 'react';
import { Swiper as SwiperType } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';

import {Wrapper} from "@/components/layout";
import {Title, Text} from "@/components/ui";
import {SwiperNavigation, TextCard} from "@/components/common";

import styles from './Ecosystem.module.css';
import Image from "next/image";

const Ecosystem:FC = () => {
    const [isWide, setIsWide] = useState(false);
    const swiperRef = useRef<SwiperType | null>(null);
    const items = [
        {
            title: '$KRAKEN token',
            text: 'Основной utility-токен всей экосистемы на Solana. Вся работа экосистемы построена вокруг него. Покупайте NFT, играйте в геокэшинг, стейкайте токен, участвуйте в лаунчпаде и благотворите с помощью токена $KRAKEN.',
        },
        {
            title: 'KRAKEN tap-to-earn game',
            text: 'Наша флагманская игра, mini-app в Telegram. Лучшая реферальная программа на рынке. Приглашайте друзей, играйте, зарабатывайте поинты. Скоро мы анонсируем кое-что большое, поэтому не упускайте шанс, как с другими тапалками.',
        },
        {
            title: 'KRAKEN Geocaching',
            text: 'Наша платформа для геокэшинга, мост между Web2 и Web3. Pokemon Go – прошлый век, поэтому мы объединили реальный мир и технологии Web3, чтобы вы могли выполнять реальные задания, искать тайники и зарабатывать на этом.',
        },
        {
            title: 'игра release the kraken',
            text: 'Описание описание описание  описание описание описание описание описание  описание описание описание описание описание  описание описание описание ',
        },
        {
            title: '$KRAKEN NFT',
            text: 'Коллекция из 444 редких NFT, которые позволят вам зарабатывать токены KRAKEN и играть в наши игры.',
        },
        {
            title: '$KRAKEN Staking',
            text: 'Платформа для стейкинга токенов $KRAKEN, где вы можете увеличивать свой % токенов с APY до …. %',
        },
        {
            title: 'KRAKEN Launchpad',
            text: 'В разработке. Наша собственная площадка для запуска крипто–проектов, где каждый проект может выйти с помощью нашего большого комьюнити, а вы – заработать на ранней инвестиции.',
        },
        {
            title: 'KRAKEN Charity',
            text: 'Вмире сейчас огромная проблема загрязнения воды и мирового океана. Наша глобальная миссия –  благотворительность и очищение мирового океана. Часть средств от сбора комьюнити направлены на благотворительность. Люди, которые покупают токен, приносят реальную пользу миру, элементы RWA.',
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
                <Title className={styles.title} size={'medium'} as={'h2'} isNoShadow={true}>Kraken ecosystem</Title>
                <Text className={styles.text} size={'medium'}>Наша экосистема – щупальца кракена, которая захватывает
                    мир Web3. Не важно, новичок вы или криптан, прошедший 3 медвежих цикла, вы найдете для себя
                    интересное занятие в экосистеме. KRAKEN стирает границы между Web2 и Web3 – почему бы не стать
                    частью большой экосистемы и расти вместе?</Text>

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
                                    <TextCard title={item.title} text={item.text} key={item.title}/>
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