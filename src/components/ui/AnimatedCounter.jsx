import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

export default function AnimatedCounter({ value, duration = 2, prefix = '', suffix = '' }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [displayValue, setDisplayValue] = useState(0);

    const spring = useSpring(0, { duration: duration * 1000 });
    const display = useTransform(spring, (latest) => Math.floor(latest));

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    useEffect(() => {
        const unsubscribe = display.onChange((latest) => {
            setDisplayValue(latest);
        });
        return unsubscribe;
    }, [display]);

    return (
        <motion.span ref={ref}>
            {prefix}{displayValue}{suffix}
        </motion.span>
    );
}
