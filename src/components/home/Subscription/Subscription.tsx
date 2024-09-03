import React, {FC} from 'react';

import {Wrapper} from "@/components/layout";
import {Button, Text, Title} from "@/components/ui";
import {Socials} from "@/components/common";

import styles from './Subscription.module.css';

const Subscription:FC = () => {
    return <section className={styles.root}>
        <Wrapper>
            <div className={styles.inner}>
                <Title className={styles.title} size={'medium'} isNoShadow={true}>Узнавай новости первым</Title>

                <Text className={styles.text} size={'medium'}>Подписывайся на наши соц. сети <br/>и не пропусти выход нашей экосистемы</Text>

                <div className={styles.buttons}>
                    <Socials/>
                </div>
            </div>
        </Wrapper>
    </section>
};

export default Subscription;