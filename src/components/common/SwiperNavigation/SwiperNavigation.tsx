import React, {FC} from 'react';
import clsx from 'clsx';
import { Swiper } from 'swiper';

import TickIcon from '/public/images/tick.svg';

import styles from './SwiperNavigation.module.css';

interface SwiperNavigationProps {
    swiperRef: React.MutableRefObject<Swiper | null>;
}

const SwiperNavigation: FC<SwiperNavigationProps> = ({swiperRef}) => {
    const handlePrevClick = () => {
        if (!swiperRef.current) return;

        swiperRef.current.slidePrev();
    };

    const handleNextClick = () => {
        if (!swiperRef.current) return;

        swiperRef.current.slideNext();
    };

    return <div className={styles.root}>
        <button className={clsx(styles.button, styles.buttonPrev)} onClick={handlePrevClick}>
            <TickIcon/>
        </button>

        <button className={clsx(styles.button, styles.buttonNext)} onClick={handleNextClick}>
            <TickIcon/>
        </button>
    </div>
};

export default SwiperNavigation;