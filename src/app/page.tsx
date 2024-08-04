'use client';

import React, {FC} from 'react';

import {About, Hero, Roadmap, Tokenomics} from "@/components/home";
import {Partners} from "@/components/common";

const Home: FC = () => {
    return (
        <>
            <Hero/>

            <Partners/>

            <About/>

            <Roadmap/>

            <Tokenomics/>
        </>
    );
}

export default Home;
