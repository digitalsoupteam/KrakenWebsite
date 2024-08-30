import React, {FC} from 'react';

import {Title} from "@/components/ui";

import styles from './Rewards.module.css';

const Rewards: FC = () => {
    return <div className={styles.root}>
        <Title className={styles.title} size={'medium'}>Rewards</Title>
    </div>
};

export default Rewards;
