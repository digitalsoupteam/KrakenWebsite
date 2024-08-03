import React, {FC, useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import clsx from 'clsx';

import {Button, Input, Label, Title} from "@/components/ui";
import Radio from "@/components/ui/Radio/Radio";
import PointsIcon from '/public/kraken-small.svg';
import {CopyLink} from "@/components/common";

import styles from './Staking.module.css';

interface StakingProps {
    className?: string;
}

const Staking: FC<StakingProps> = ({className}) => {
    const durationItems = [3, 6, 12, 24];

    const [amountValue, setAmountValue] = useState<string | number>(0);
    const [durationValue, setDurationValue] = useState(durationItems[0]);

    const handlerAmount = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const value = evt.target.value;

        setAmountValue(value);
    };

    const handlerFocusAmount = (evt: React.FocusEvent<HTMLInputElement>) => {
        const value = Number(evt.target.value);

        if (value === 0) {
            setAmountValue('');
        }
    };

    const handlerBlurAmount = (evt: React.FocusEvent<HTMLInputElement>) => {
        const value = Number(evt.target.value);

        if (!value) {
            setAmountValue(0);
        }
    }

    const handleDurationChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(evt.target.value);
        setDurationValue(value);
    };


    return <div className={clsx(styles.root, className)}>
        <Title className={styles.title} size={'medium'}>Stake RTK</Title>
        <form>
            <div className={styles.amount}>
                <Label className={clsx(styles.label, styles.amountInput)}>
                    <div className={styles.labelText}>
                        <Image className={styles.labelIcon} src='/kraken.png' width='23' height='23' alt=''/>
                        <span>RTK</span>
                    </div>
                    <Input
                        value={amountValue}
                        onChange={handlerAmount}
                        onFocus={handlerFocusAmount}
                        onBlur={handlerBlurAmount}
                        type={'number'}
                        min={0}
                        step={'0.01'}
                    />
                </Label>
                <div className={styles.amountAdditional}>
                    <div className={styles.maxAmount}>
                        Available:
                        <button className={styles.maxAmountButton} type='button'
                                onClick={() => setAmountValue(23.42)}>23.42</button>
                    </div>
                    <Link className={styles.buyMore} href={'#'}>Get more</Link>
                </div>
            </div>

            <div className={styles.duration}>
                <h3 className={styles.itemTitle}>Duration</h3>
                <Label className={clsx(styles.label, styles.amount)}>
                    <div className={styles.labelText}>
                        <span>Month</span>
                    </div>
                    <Input
                        className={styles.durationInput}
                        value={durationValue}
                        type={'number'}
                        min={durationItems[0]}
                        readOnly={true}
                    />
                </Label>
                <div className={styles.durationControls}>
                    {
                        durationItems?.map((item, index) => (
                            <Radio value={item} name={'duration'} checked={durationValue === item}
                                   onChange={handleDurationChange} key={`${item}-${index}`}>{item} M</Radio>
                        ))
                    }
                </div>
            </div>

            <div className={styles.additional}>
                <div className={styles.additionalCard}>
                    <div className={clsx(styles.additionalText, styles.additionalTextLight)}>You&apos;ll get</div>
                    <div className={clsx(styles.additionalText, styles.points)}>
                        <PointsIcon className={styles.pointsIcon}/>
                        10 points
                    </div>
                    <div className={clsx(styles.additionalText, styles.additionalTextLight)}>for that time</div>
                </div>
                <div className={styles.additionalCard}>
                    <div className={styles.additionalText}>Get more points</div>
                    <div className={clsx(styles.additionalText, styles.additionalTextLight)}>0 referrals</div>
                    <CopyLink className={styles.referralLink} text={'Referral link'} copyText={'Referral link'} />
                </div>
            </div>

            <Button className={styles.submit} type={'submit'} disabled={!amountValue}>
                <Image className={styles.tentacleLeft} src='/stake-button-left.png' width='115' height='48' alt=''/>

                {!amountValue && 'Enter RTK amount'}
                {Boolean(amountValue) && 'Stake'}

                <Image className={styles.tentacleRight} src='/stake-button-right.png' width='115' height='48' alt=''/>
            </Button>
        </form>
    </div>
};

export default Staking;
