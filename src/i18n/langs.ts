interface Languages {
    [key: string]: {
        nativeName: string;
    };
}

const langs: Languages = {
    en: { nativeName: 'English' },
    ru: { nativeName: 'Russian' },
};

export default langs;
