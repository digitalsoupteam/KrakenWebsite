import React, {FC, PropsWithChildren} from 'react';

import {motion} from 'framer-motion';

interface SlideInProps extends PropsWithChildren {
    className?: string;
    delay?: number;
}

const FadeOut: FC<SlideInProps> = ({className, children, delay}) => {
    return <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        transition={{
            duration: 0.6,
            delay: delay || 0,
            ease: 'easeInOut',
        }}
        variants={{
            hidden: {opacity: 0},
            visible: {opacity: 1},
        }}
    >
        {children}
    </motion.div>
};

export default FadeOut;
