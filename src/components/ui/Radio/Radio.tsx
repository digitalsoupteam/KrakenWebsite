import React, {FC, InputHTMLAttributes} from 'react';
import clsx from "clsx";

import styles from './Radio.module.css';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const Radio: FC<RadioProps> = ({className, children, ...props}) => {
    return <label className={clsx(styles.root, className)}>
        {children}
        <input type='radio' className={styles.radio} {...props} />
    </label>
};

export default Radio;
