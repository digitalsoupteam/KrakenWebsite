import React, {FC, PropsWithChildren} from 'react';
import clsx from "clsx";

import styles from './Title.module.css';

interface TitleProps {
    className?: string;
    size?: 'medium' | 'small';
    as?: 'h1 | h2 | h3 | h4 | h5 | h6';
}

const Title: FC<PropsWithChildren<TitleProps>> = ({children, className, size = 'medium', as = 'h1'}) => {
    return <h1 className={clsx(styles.root, className, size && styles[size])} data-text={children}>{children}</h1>
};

export default Title;
