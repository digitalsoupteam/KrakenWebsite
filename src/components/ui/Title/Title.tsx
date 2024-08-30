import React, {FC, PropsWithChildren} from 'react';
import clsx from "clsx";

import styles from './Title.module.css';

interface TitleProps {
    className?: string;
    size?: 'large' | 'big' | 'medium' | 'small';
    as?: 'h1 | h2 | h3 | h4 | h5 | h6';
    isNoShadow?: boolean;
}

const Title: FC<PropsWithChildren<TitleProps>> = ({children, className, size = 'medium', as = 'h1', isNoShadow}) => {
    return <h1 className={clsx(styles.root, className, size && styles[size], isNoShadow && styles.noShadow)}
               data-text={children}>{children}</h1>
};

export default Title;
