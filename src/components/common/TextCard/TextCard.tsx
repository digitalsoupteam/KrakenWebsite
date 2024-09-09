import React, {FC} from "react";

import styles from './TextCard.module.css';
import {Text, Title} from "@/components/ui";

interface TextCardProps {
    title: string;
    text: string;
}

const TextCard:FC<TextCardProps> = ({title, text}) => {
    return <div className={styles.root}>
        <Title className={styles.title} size={'extra-small'} isNoShadow={true}>{title}</Title>
        <Text className={styles.text} size={'small'}>{text}</Text>
    </div>
};

export default TextCard;