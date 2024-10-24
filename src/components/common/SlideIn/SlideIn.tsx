'use client';

import React, {FC, PropsWithChildren} from 'react';

import {motion} from 'framer-motion';

interface SlideInProps extends PropsWithChildren {
    className?: string;
}

const SlideIn: FC<SlideInProps> = ({className, children}) => {
    return <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        transition={{
            duration: 0.6,
            ease: 'easeInOut',
        }}
        variants={{
            hidden: {y: 100, opacity: 0},
            visible: {y: 0, opacity: 1},
        }}
    >
        {children}
    </motion.div>
};

export default SlideIn;
