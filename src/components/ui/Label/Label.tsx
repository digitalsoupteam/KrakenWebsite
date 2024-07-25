import React, {FC, LabelHTMLAttributes} from 'react';
import clsx from 'clsx';

import styles from './Label.module.css';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>  {
    className?: string;
}

const Label: FC<LabelProps> = ({className, children}) => {
    return <label className={clsx(styles.root, className)}>
        {children}
    </label>
};

export default Label;
