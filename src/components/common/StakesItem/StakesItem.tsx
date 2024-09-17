import React, {FC} from "react";
import Image from "next/image";
import clsx from "clsx";

import {Button} from "@/components/ui";
import LockedIcon from '/public/images/locked.svg';

import styles from './StakesItem.module.css';

interface StakesItemProps {
    unstakingDate: string;
    stakedFrom: string;
    points: number;
    tokens: number;
    tokenSymbol: string;
}

const StakesItem: FC<StakesItemProps> = ({unstakingDate, stakedFrom, points, tokens, tokenSymbol}) => {
    const currentDateObject = new Date();
    const unstakingDateObject = new Date(unstakingDate);
    const unstakeAvailability = unstakingDateObject >= currentDateObject;
    const stakedFromDateObject = new Date(stakedFrom);

    return <div className={styles.root}>
        <div className={styles.heading}>
            <Image className={styles.logo} src={'/images/kraken.png'} width="60" height="60" alt={'kraken logo'}/>
            <div className={styles.title}>Unstake availability</div>
            <div className={styles.date}>
                {unstakingDateObject.toLocaleString('en-US', {month: 'long'})} {unstakingDateObject.getDate()}, {unstakingDateObject.getFullYear()}
            </div>
        </div>

        <div className={styles.info}>
            <div className={clsx(styles.infoItem, styles.points)}>
                Points
                <span className={styles.value}>
                    <span>{points}</span>
                    <Image className={styles.krakenIcon} src={'/images/kraken-small.svg'} width="16" height="16"
                           alt={'kraken icon'}/>
                </span>
            </div>
            <div className={clsx(styles.infoItem, styles.staked)}>
                Staked
                <span className={styles.value}>
                    <span>{tokens}</span>
                    <span>{tokenSymbol}</span>
                </span>
            </div>
        </div>

        <div className={styles.unstake}>
            <Button className={styles.button} disabled={unstakeAvailability}>
                <LockedIcon className={styles.lockedIcon}/>
                Unstake {unstakeAvailability && 'in 4 month 15 days'}
            </Button>
            <div className={styles.stakedFrom}>
                <span>Staked</span>
                <span>
                    {stakedFromDateObject.toLocaleString('en-US', {month: 'long'})} {stakedFromDateObject.getDate()}, {stakedFromDateObject.getFullYear()}
                </span>
            </div>
        </div>
    </div>
};

export default StakesItem;
