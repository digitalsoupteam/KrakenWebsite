'use client';

import React, {FC} from 'react';

import {About, Hero} from "@/components/home";
import {Partners} from "@/components/common";

import styles from './Home.module.css';

const Home: FC = () => {
    return (
        <>
            <Hero />

            <Partners />

            <About />
        </>
    );
}

export default Home;
