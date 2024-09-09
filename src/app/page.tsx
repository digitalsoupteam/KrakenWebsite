'use client';

import React, {FC} from 'react';

import {About, Ecosystem, EcosystemCta, Hero, Roadmap, Subscription, Tags} from "@/components/home";

const Home: FC = () => {
    return (
        <>
            <Hero/>

            <Tags/>

            <About/>

            <EcosystemCta/>

            <Ecosystem/>

            <Roadmap/>

            <Subscription/>
        </>
    );
}

export default Home;
