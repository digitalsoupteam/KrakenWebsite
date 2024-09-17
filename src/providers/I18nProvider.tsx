'use client';

import React, {FC, PropsWithChildren} from 'react';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from '../i18n/locales';

const I18nProvider: FC<PropsWithChildren> = ({children}) => {
    const detectionOptions = {
        order: [
            'querystring',
            'cookie',
            'localStorage',
            'sessionStorage',
            'navigator',
            'htmlTag',
            'path',
            'subdomain',
        ],
        lookupQuerystring: 'lng',
        lookupCookie: 'lng',
        lookupLocalStorage: 'lng',
        caches: ['localStorage'],
    };

    i18next
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            resources,
            defaultNS: 'main',
            fallbackLng: 'en',
            supportedLngs: ['en', 'ru'],
            ns: ['menu'],
            detection: detectionOptions,
            interpolation: {
                escapeValue: false,
            },
        });

    if (typeof window !== 'undefined') {
        document.documentElement.lang = i18next.language;
    }

    return <>{children}</>
};

export default I18nProvider;
