import React, {FC} from 'react';

import {Wrapper} from "@/components/layout";
import {Button, Title} from "@/components/ui";
import ArrowIcon from '/public/images/arrow.svg';

import styles from './BannerLinks.module.css';
import Image from "next/image";

const BannerLinks: FC = () => {
    const items = [
        {
            title: {
                text: 'Tap to earn',
                icon: '/images/diamond.png'
            },
            button: {
                text: "Play now",
                link: 'https://t.me/kraken_tap_to_earn_bot'
            },
            background: '/images/banner-tap-tap-to-earn.png',
        },
        {
            title: {
                text: 'Our Telegram',
                icon: '/images/telegram.png'
            },
            button: {
                text: "Join us",
                link: 'https://t.me/releasethekraken'
            },
            background: '/images/banner-our-tg.png',
        }
    ];
    return <section>
        <Wrapper>
            <div className={styles.inner}>
                {items && items.length > 0 && items.map(item => (

                <div className={styles.item} key={item.title.text} style={{backgroundImage: `url(${item.background})`}}>
                    <Title className={styles.title} size={'big'} isNoShadow={true} as={'h3'}>
                        {item.title.text}
                        <Image className={styles.icon} src={item.title.icon} width={'38'} height={'38'} alt={''}/>
                    </Title>
                    <Button className={styles.button} href={item.button.link} isLight={true} target={'_blank'}>{item.button.text} <ArrowIcon/></Button>
                </div>
                ))}
            </div>
        </Wrapper>
    </section>
};

export default BannerLinks;
