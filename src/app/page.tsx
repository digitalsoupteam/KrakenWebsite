'use client';

import React, {FC} from 'react';

import {About, Hero, Roadmap, Tags, Tokenomics} from "@/components/home";
import {Partners} from "@/components/common";

const Home: FC = () => {
    return (
        <>
            <Hero/>

            <Tags/>

            <Partners/>

            <About/>

            <Roadmap/>

            <Tokenomics/>
        </>
    );
}

export default Home;
