import React, {FC} from 'react';
import Image from 'next/image';

import {Wrapper} from "@/components/layout";
import {Text, Title} from '@/components/ui';

import styles from './MainBlock.module.css';

interface MainBlockProps {
    image: string;
    title: string;
    text: string;
}

const MainBlock: FC<MainBlockProps> = ({image, title, text}) => {
    return <section className={styles.root}>
        <Wrapper>
            <div className={styles.inner}>
                <Image className={styles.image} src={image} width={'292'} height={'264'} alt={' '}/>
                <Title className={styles.title} size={'medium'} isNoShadow={true}>{title}</Title>
                <Text className={styles.text} size={'big'}>{text}</Text>
            </div>
        </Wrapper>
    </section>
};

export default MainBlock;
