'use client';

import React, {FC} from 'react';

import Hero from "@/components/home/Hero/Hero";
import Partners from "@/components/common/Partners/Partners";

import styles from './Home.module.css';

const Home: FC = () => {
    return (
        <>
            <Hero />

            <Partners />
        </>
    );
}

export default Home;
