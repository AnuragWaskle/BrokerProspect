import { motion } from 'framer-motion';

export default function AnimatedBlob({
    size = 200,
    color = 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
    top,
    left,
    right,
    bottom,
    delay = 0,
    opacity = 0.1,
    zIndex = -1
}) {
    return (
        <motion.div
            animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
            }}
            transition={{
                duration: 10,
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
                filter: 'blur(40px)',
                zIndex: zIndex,
                top: top,
                left: left,
                right: right,
                bottom: bottom,
                pointerEvents: 'none'
            }}
        />
    );
}

export function PulsingOrb({
    size = 60,
    color = '#FF6B35',
    top,
    left,
    right,
    bottom,
    delay = 0
}) {
    return (
        <motion.div
            animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }}
            style={{
                position: 'absolute',
                width: size,
                height: size,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
                zIndex: -1,
                top: top,
                left: left,
                right: right,
                bottom: bottom,
                pointerEvents: 'none'
            }}
        />
    );
}
