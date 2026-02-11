import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Floating3DShape({
    shape = 'circle',
    size = 100,
    color = 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
    top,
    left,
    right,
    bottom,
    delay = 0,
    duration = 8,
    opacity = 0.15,
    blur = 2,
    zIndex = -1
}) {
    const shapeStyles = {
        circle: { borderRadius: '50%' },
        square: { borderRadius: '20%' },
        rounded: { borderRadius: '24px' },
        triangle: {
            borderRadius: '0',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }
    };

    return (
        <motion.div
            animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                rotate: [0, 360],
                scale: [1, 1.1, 1]
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }}
            style={{
                position: 'absolute',
                width: size,
                height: size,
                background: color,
                opacity: opacity,
                filter: `blur(${blur}px)`,
                zIndex: zIndex,
                top: top,
                left: left,
                right: right,
                bottom: bottom,
                pointerEvents: 'none',
                ...shapeStyles[shape]
            }}
        />
    );
}

export function Parallax3DElement({ children, speed = 0.5, className = '', style = {} }) {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);

    return (
        <motion.div
            className={className}
            style={{ y, transformStyle: 'preserve-3d', ...style }}
        >
            {children}
        </motion.div>
    );
}

export function MouseParallax({ children, strength = 0.05, className = '', style = {} }) {
    const { scrollY } = useScroll();
    // Simple mouse parallax effect using event listener approach would be better for performance
    // but sticking to framer-motion for consistency if possible.
    // However, simple mouse move is often easier with state or direct ref manipulation.
    // Let's use a simple mouse move listener on the window for now.

    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 2,
                y: (e.clientY / window.innerHeight - 0.5) * 2
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <motion.div
            animate={{
                x: mousePosition.x * 100 * strength,
                y: mousePosition.y * 100 * strength
            }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
}

export function ScrollReveal3D({ children, delay = 0, direction = 'up' }) {
    const directions = {
        up: { y: 60, rotateX: -15 },
        down: { y: -60, rotateX: 15 },
        left: { x: -60, rotateY: -15 },
        right: { x: 60, rotateY: 15 }
    };

    const initial = directions[direction];

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...initial,
                scale: 0.9
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
                rotateX: 0,
                rotateY: 0,
                scale: 1
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
            }}
        >
            {children}
        </motion.div>
    );
}

export function Rotating3DCard({ children, className = '', style = {} }) {
    return (
        <motion.div
            whileHover={{
                rotateY: 10,
                rotateX: -5,
                scale: 1.05,
                transition: { duration: 0.3 }
            }}
            style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                ...style
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
