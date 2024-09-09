'use client';

import React, {FC} from 'react';

import {About, Ecosystem, EcosystemCta, Hero, Roadmap, Subscription, Tags, Tokenomics} from "@/components/home";
// import {Partners} from "@/components/common";

const Home: FC = () => {
    return (
        <>
            <Hero/>

            <Tags/>

            <About/>

            <EcosystemCta/>

            <Ecosystem/>

            {/*<Partners/>*/}

            <Roadmap/>

            <Subscription/>

            <Tokenomics/>
        </>
    );
}

export default Home;
