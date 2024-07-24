import React, {FC, ButtonHTMLAttributes} from 'react';

import clsx from 'clsx';

import styles from './Button.module.css';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    href?: string;
    target?: string;
    disabled?: boolean;
    onClick?: () => void;
}


const Button: FC<IButtonProps> = ({className, children, href, onClick}) => {
    const Tag = href ? 'a' : 'button';

    return <Tag className={clsx(className, styles.root)} onClick={onClick}>
        {children}
    </Tag>
};

export default Button;
