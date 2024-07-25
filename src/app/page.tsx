'use client';

import React, {FC, useState} from 'react';
import clsx from "clsx";

import {Wrapper} from "@/components/layout";
import {Button} from "@/components/ui";

import styles from './Home.module.css';
import {Staking} from "@/components/common";

const Home: FC = () => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const tabItems = [
        {
            button: 'New stake',
            content: <Staking className={styles.staking} />
        },
        {
            button: 'My stakes',
            content: <div>Stakes</div>
        },
        {
            button: 'My points',
            content: <div>Points</div>
        }
    ];

    return (
        <>
            <section className={styles.tabs}>
                <Wrapper>
                    <div className={styles.tabsButtons}>
                        {
                            tabItems && tabItems.length && tabItems.map((item, index) => (
                                <Button
                                    className={clsx(styles.tabButton, currentTabIndex === index && styles.tabButtonActive)}
                                    onClick={() => setCurrentTabIndex(index)}
                                    key={item.button}>{item.button}</Button>
                            ))
                        }
                    </div>
                    <div className={styles.tabContent}>
                        {tabItems[currentTabIndex].content}
                    </div>
                </Wrapper>
            </section>
        </>
    );
}

export default Home;
