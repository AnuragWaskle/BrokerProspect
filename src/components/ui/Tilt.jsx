import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Tilt = ({ children, intensity = 20, style = {}, className = "" }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const rotateX = useTransform(y, [0, 1], [intensity, -intensity]);
    const rotateY = useTransform(x, [0, 1], [-intensity, intensity]);

    const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
    const springRotateX = useSpring(rotateX, springConfig);
    const springRotateY = useSpring(rotateY, springConfig);

    const handleMouseMove = (event) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const mouseX = (event.clientX - rect.left) / rect.width;
        const mouseY = (event.clientY - rect.top) / rect.height;
        x.set(mouseX);
        y.set(mouseY);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0.5);
        y.set(0.5);
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: '1000px',
                display: 'inline-block',
                ...style
            }}
            className={className}
        >
            <motion.div
                style={{
                    rotateX: springRotateX,
                    rotateY: springRotateY,
                    transformStyle: 'preserve-3d',
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Tilt;
