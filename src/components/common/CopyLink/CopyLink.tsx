import React, {FC} from 'react';
import clsx from 'clsx';

import CopyIcon from '/public/copy.svg';

import styles from './CopyLink.module.css';

interface CopyLinkProps {
    text: string;
    copyText: string;
    className?: string;
    isLarge?: boolean;
}

const CopyLink: FC<CopyLinkProps> = ({className, text, copyText, isLarge}) => {
    const handlerClick = () => {
        navigator.clipboard.writeText(copyText)
            .then(function () { alert('copied: ' + copyText); })
            .catch(function (err) { console.error('Failed to copy:', err); });
    };

    return <button className={clsx(styles.root, className, isLarge && styles.large)} type={'button'} onClick={handlerClick}>
        {text} <CopyIcon className={styles.icon} />
    </button>
};

export default CopyLink;
