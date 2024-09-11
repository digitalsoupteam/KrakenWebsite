import React, {FC} from 'react';
import {useTranslation} from "react-i18next";

import {Wrapper} from "@/components/layout";
import {Text, Title} from "@/components/ui";
import {Socials} from "@/components/common";

import styles from './Subscription.module.css';

const Subscription:FC = () => {
    const {t} = useTranslation();

    return <section className={styles.root}>
        <Wrapper>
            <div className={styles.inner}>
                <Title className={styles.title} size={'medium'} isNoShadow={true}>{t('subscription:title')}</Title>

                <Text className={styles.text} size={'medium'}>{t('subscription:text')}</Text>

                <div className={styles.buttons}>
                    <Socials/>
                </div>
            </div>
        </Wrapper>
    </section>
};

export default Subscription;
