import React, {FC, ButtonHTMLAttributes} from 'react';
import clsx from 'clsx';

import LockedIcon from '/public/images/locked.svg';

import styles from './Button.module.css';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    href?: string;
    target?: string;
    disabled?: boolean;
    onClick?: () => void;
    isLight?: boolean;
    locked?: boolean;
}


const Button: FC<IButtonProps> = ({className, onClick, children, href, target, type, disabled, isLight, locked}) => {
    const Tag = href ? 'a' : 'button';

    return <Tag
        className={clsx(className, styles.root, isLight && styles.light)}
        onClick={onClick}
        {...(href && {href})}
        {...(target && {target})}
        {...(type && {type})}
        {...(disabled && {disabled})}
    >
        {children}
        {locked && <LockedIcon className={styles.locked}/>}
    </Tag>
};

export default Button;
