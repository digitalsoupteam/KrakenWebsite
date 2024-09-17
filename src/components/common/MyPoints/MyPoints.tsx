import React, {FC} from 'react';
import Image from "next/image";

import {Title} from "@/components/ui";
import {CopyLink, Rewards} from "@/components/common";

import styles from './MyPoints.module.css';

const MyPoints: FC = () => {
    return <div className={styles.root}>
        <div className={styles.yourPoints}>
            <Title className={styles.yourPointsTitle} size={'small'}>Your points</Title>

            <Image className={styles.tentacles} src={'/images/your-points-bg.png'} width="300" height="100" alt="" />

            <div className={styles.yourPointsItem}>
                <div className={styles.stakingPoints}>
                    <span>From staking</span>
                    <span>{21.12}</span>
                </div>
                <div className={styles.referralPoints}>
                    <span>From referrals</span>
                    <span>{21.12}</span>
                </div>
            </div>

            <div className={styles.yourPointsItem}>
                <div className={styles.totalPoints}>
                    <span>Total points</span>
                    <span>{21.12} <Image className={styles.krakenIcon} src={'/images/kraken-small.svg'} width="16" height="16"
                                         alt={'kraken icon'}/>
                    </span>
                </div>
            </div>

            <div className={styles.yourPointsItem}>
                <div className={styles.referralCta}>
                    <span className={styles.referralCtaText}>Get 10% from your referrals points</span>
                    <CopyLink text={'Copy link'} copyText={'#'}/>
                </div>
            </div>
        </div>

        <Rewards/>
    </div>
};

export default MyPoints;
