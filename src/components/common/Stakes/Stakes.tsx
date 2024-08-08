import React, {FC} from 'react';

import styles from './Stakes.module.css';
import {StakesItem} from "@/components/common";

const Stakes: FC = () => {
    const stakesMock = [
        {
            stakedFrom: '07.07.2024',
            unstakingDate: '08.07.2024',
            points: 21.1232,
            tokens: 21.1232,
            tokenSymbol: 'RTK',
        },
        {
            stakedFrom: '07.07.2024',
            unstakingDate: '08.15.2024',
            points: 21.1232,
            tokens: 21.1232,
            tokenSymbol: 'RTK',
        },
        {
            stakedFrom: '07.07.2024',
            unstakingDate: '08.10.2024',
            points: 21.1232,
            tokens: 21.1232,
            tokenSymbol: 'RTK',
        },
    ];

    return <div className={styles.root}>
        {
            stakesMock && stakesMock.length && stakesMock.map((item, index) => (
                <StakesItem
                    unstakingDate={item.unstakingDate}
                    stakedFrom={item.stakedFrom}
                    points={item.points}
                    tokens={item.tokens}
                    tokenSymbol={item.tokenSymbol}
                    key={item.unstakingDate + index}
                />
            ))
        }
    </div>
};

export default Stakes;
