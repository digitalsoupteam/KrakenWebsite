'use client';
import React, {FC} from 'react';

import {About, Ecosystem, EcosystemCta, Faq, Hero, Roadmap, Subscription, Tags, BannerLinks} from "@/components/home";

const Home: FC = () => {
    return (
        <>
            <Hero/>

            <BannerLinks/>

            <Tags/>

            <About/>

            <EcosystemCta/>

            <Ecosystem/>

            <Roadmap/>

            <Subscription/>

            <Faq/>
        </>
    );
}

export default Home;
