import React, {FC, PropsWithChildren} from 'react';
import clsx from 'clsx';

import styles from './Text.module.css';

interface TextProps extends PropsWithChildren {
    className?: string;
}

const Text: FC<TextProps> = ({className, children}) => {
    return <div className={clsx(className, styles.root)}>
        {children}
    </div>
};

export default Text;
