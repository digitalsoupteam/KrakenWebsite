'use client';
import React, {FC, useState, useEffect} from 'react';
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

import {MainBlock} from "@/components/quest";
import {Button} from "@/components/ui";
import {UserVerification} from "@/components/quest";
import {BannerLinks} from "@/components/common";

import styles from './page.module.css';

type Result = {
    message: string;
    prize: null | string;
};

const QuestResult: FC = () => {
    const [isShowForm, setIsShowForm] = useState(false);
    const [prize, setPrize] = useState<null | 'T-Shirt' | 'Empty' | 'Treasure'>(null);
    const [verificationResult, setVerificationResult] = useState<Result | null>(null);
    const validResults = ['T-Shirt', 'Treasure', 'Empty'];
    const prizes = {
        'T-Shirt': {
            image: '/images/t-shirt.png',
            title: 'T-shirt',
            text: 'Today is your day! To claim your prize, \ntake a screenshot and go to a Kraken representative.',
        },
        'Treasure': {
            image: '/images/quest-chest.png',
            title: 'Precious chest',
            text: 'Today is your day! To claim your prize, \ntake a screenshot and go to a Kraken representative.',
        },
        'Empty': {
            image: '/images/quest-chest-empty.png',
            title: 'Empty :(',
            text: 'You\'re out of luck today, but your prize may be waiting for you in other products in our ecosystem!',
        },
    };

    const onSuccessVerification = (result: Result) => {
        setVerificationResult(result)
    };

    useEffect(() => {
        if (!verificationResult) return;

        const resultPrize = verificationResult.prize;

        if (resultPrize && validResults.includes(resultPrize)) {
            setPrize(resultPrize as 'T-Shirt' | 'Treasure' | 'Empty');
        }
    }, [verificationResult]);

    return <>
        {
            !prize &&
            <MainBlock image={'/images/kraken-baby.png'} title={isShowForm ? 'Who are you?' : 'try your luck!'}
                       text={isShowForm ? 'We have everything fair - one user, one prize. \nEnter your Telegram tag' : 'Click the button below and find out what \nprize you got from Kraken'}>
                {!isShowForm &&
                    <Button className={styles.button} isLight={true} onClick={() => setIsShowForm(true)}>Let&apos;s
                        roll</Button>}
                {isShowForm &&
                    <UserVerification className={styles.form} onSuccess={onSuccessVerification}/>}
            </MainBlock>
        }
        {prize && <MainBlock image={prizes[prize].image} title={prizes[prize].title} text={prizes[prize].text}/>}
        {prize && prize !== 'Empty' && <Fireworks className={styles.canvas} autorun={{ speed: 0.5 }}/>}
        <BannerLinks/>
    </>
};

export default QuestResult;
