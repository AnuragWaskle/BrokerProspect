import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxSection({ children, image, overlayColor = 'rgba(0,0,0,0.5)', height = '80vh' }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <div
            ref={ref}
            style={{
                height,
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                perspective: '1000px'
            }}
        >
            <motion.div
                style={{
                    position: 'absolute',
                    top: -100, // Extra bleed for parallax
                    left: 0,
                    right: 0,
                    bottom: -100,
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    y,
                    zIndex: 0
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: overlayColor,
                    zIndex: 1
                }}
            />

            <div style={{ position: 'relative', zIndex: 10, width: '100%' }}>
                {children}
            </div>
        </div>
    );
}
