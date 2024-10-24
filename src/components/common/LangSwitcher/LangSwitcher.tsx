'use client';

import React, {FC, useEffect, useState} from 'react';
import clsx from 'clsx';
import {useTranslation} from 'react-i18next';

import {Button} from "@/components/ui";

import styles from './LangSwitcher.module.css';

interface LangSwitcherProps {
    className: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
    const {i18n} = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState<string>(i18n.language);
    const supportedLanguages = i18n.options.supportedLngs ? i18n.options.supportedLngs.filter(item => item !== 'cimode') : []
    const [filteredLanguages, setFilteredLanguages] = useState<string[]>(supportedLanguages);

    const switchToNextLanguage = () => {
        const currentLangIndex = filteredLanguages.indexOf(currentLanguage);
        const nextItemIndex = currentLangIndex + 1;
        const selectedLanguage = filteredLanguages[nextItemIndex] || filteredLanguages[0];

        setCurrentLanguage(selectedLanguage);
        i18n.changeLanguage(selectedLanguage);
    };

    return <Button className={clsx(styles.root, className)} onClick={switchToNextLanguage}>
        {filteredLanguages.length > 0 && filteredLanguages.map((lang, index) => (
            <React.Fragment key={lang}>
                <span className={clsx(styles.item, currentLanguage === lang && styles.activeItem)}>{lang}</span>
                {index !== currentLanguage.length - 1 && <span>/</span>}
            </React.Fragment>
        ))}
    </Button>
};

export default LangSwitcher;
