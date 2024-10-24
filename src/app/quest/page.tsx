import React, {FC} from 'react';
import {MainBlock} from "@/components/quest";
import {BannerLinks} from "@/components/common";

const Quest: FC = () => {
    return <>
        <MainBlock image={'/images/kraken-on-whale.png'} title={'You\'re almost there!'} text={'Scan the following QR code at “BALCONY” location and get a chance to win a valuable prize from Kraken'}/>
        <BannerLinks/>
    </>
};

export default Quest;
