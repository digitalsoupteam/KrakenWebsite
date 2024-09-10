import React, {FC} from 'react';
import clsx from 'clsx';

import {Button} from "@/components/ui";

import styles from './LangSwitcher.module.css';

interface LangSwitcherProps {
    className: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
    return <Button className={clsx(styles.root, className)}>
        Ru / Eng
    </Button>
};

export default LangSwitcher;
