'use client';

import React, {FC} from 'react';

import {About, Hero, Tokenomics} from "@/components/home";
import {Partners} from "@/components/common";

const Home: FC = () => {
    return (
        <>
            <Hero />

            <Partners />

            <About />

            <Tokenomics />
        </>
    );
}

export default Home;
