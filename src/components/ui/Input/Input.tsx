import React, {FC, InputHTMLAttributes} from 'react';
import clsx from 'clsx';

import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isValid?: boolean;
    value?: string | number;
}

const Input: FC<InputProps> = ({
                                   className,
                                   isValid,
                                   value,
                                   ...props
                               }) => {

    return <input
        className={clsx(className, styles.root, !isValid && styles.invalid)}
        value={value}
        {...props}
    />
};

export default Input;
