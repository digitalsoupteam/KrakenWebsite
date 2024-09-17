import React, {FC} from 'react';
import {useTranslation} from "react-i18next";

import {Wrapper} from "@/components/layout";
import {Button, Text, Title} from "@/components/ui";
import {FadeOut, Socials} from "@/components/common";

import styles from './EcosystemCta.module.css';

const EcosystemCta: FC = () => {
    const {t} = useTranslation();

    return <section className={styles.root}>
        <Wrapper>
            <div className={styles.inner}>
                <FadeOut>
                    <Title className={styles.title} size={'medium'} isNoShadow={true}>{t("ecosystem:titleCta")}</Title>

                    <Text className={styles.text} size={'medium'}>{t('ecosystem:textCta')}</Text>

                    <div className={styles.buttons}>
                        <Button className={styles.button} locked={true} disabled={true}>{t('common:buy')}</Button>
                        <Socials/>
                    </div>
                </FadeOut>
            </div>
        </Wrapper>
    </section>
};

export default EcosystemCta;
