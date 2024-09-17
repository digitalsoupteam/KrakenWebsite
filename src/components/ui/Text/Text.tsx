import React, {FC, PropsWithChildren} from 'react';
import clsx from 'clsx';

import styles from './Text.module.css';

interface TextProps extends PropsWithChildren {
    className?: string;
    size: 'big' | 'medium' | 'small';
}

const Text: FC<TextProps> = ({className, children, size}) => {
    return <div className={clsx(className, styles.root, styles[size])}>
        {children}
    </div>
};

export default Text;
