import React, {FC, PropsWithChildren} from 'react';
import Image from 'next/image';

import {Wrapper} from "@/components/layout";
import {Text, Title} from '@/components/ui';

import styles from './MainBlock.module.css';
import {FadeOut} from "@/components/common";

interface MainBlockProps extends PropsWithChildren {
    image: string;
    title: string;
    text: string;
}

const MainBlock: FC<MainBlockProps> = ({image, title, text, children}) => {
    return <section className={styles.root}>
        <Wrapper>
            <FadeOut className={styles.inner}>
                <Image className={styles.image} src={image} width={'292'} height={'264'} alt={' '}/>
                <Title className={styles.title} size={'medium'} isNoShadow={true}>{title}</Title>
                <Text className={styles.text} size={'big'}>{text}</Text>
                {children && <div className={styles.children}>{children}</div>}
            </FadeOut>
        </Wrapper>
    </section>
};

export default MainBlock;
