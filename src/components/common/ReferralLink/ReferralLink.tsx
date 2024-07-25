import React, {FC} from 'react';

import CopyIcon from '/public/copy.svg';

import styles from './ReferralLink.module.css';

interface ReferralLinkProps {
    className?: string;
}

const ReferralLink: FC<ReferralLinkProps> = ({className}) => {
    return <button className={styles.root} type={'button'}>
        Referral link <CopyIcon className={styles.icon} />
    </button>
};

export default ReferralLink;
