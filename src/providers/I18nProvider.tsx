'use client';

import React, {FC, PropsWithChildren} from 'react';
import "../i18n/index";

const I18nProvider: FC<PropsWithChildren> = ({children}) => {
    return <>{children}</>
};

export default I18nProvider;
