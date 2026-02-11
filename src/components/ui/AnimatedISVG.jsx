import { motion } from 'framer-motion';

export default function AnimatedISVG({ color = 'white', size = 40 }) {
    const dotColor = '#FF6B35'; // Brand orange for contrast

    return (
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', height: size, justifyContent: 'flex-end', verticalAlign: 'bottom', margin: '0 4px', position: 'relative' }}>

            {/* Pulsing Aura */}
            <motion.div
                animate={{
                    scale: [1, 2.5],
                    opacity: [0.6, 0]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut"
                }}
                style={{
                    position: 'absolute',
                    top: 0,
                    width: size * 0.25,
                    height: size * 0.25,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${dotColor} 0%, transparent 70%)`
                }}
            />

            {/* Floating Dot */}
            <motion.div
                animate={{
                    y: [0, -4, 0],
                    scale: [1, 1.1, 1],
                    boxShadow: [
                        `0 0 10px ${dotColor}`,
                        `0 0 20px ${dotColor}`,
                        `0 0 10px ${dotColor}`
                    ]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    width: size * 0.25,
                    height: size * 0.25,
                    background: dotColor,
                    borderRadius: '50%',
                    marginBottom: size * 0.15,
                    zIndex: 2
                }}
            />

            {/* Energetic Body */}
            <motion.div
                initial={{ height: 0 }}
                animate={{
                    height: [size * 0.5, size * 0.6, size * 0.5],
                    background: [
                        `linear-gradient(to bottom, ${color}, rgba(255,255,255,0.3))`,
                        `linear-gradient(to bottom, ${color}, rgba(255,255,255,0.6))`,
                        `linear-gradient(to bottom, ${color}, rgba(255,255,255,0.3))`
                    ]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    width: size * 0.22,
                    borderRadius: size * 0.1,
                    zIndex: 1
                }}
            />

            {/* Base "Data Flow" particles */}
            <motion.div
                animate={{
                    y: [10, -size * 0.8],
                    opacity: [0, 1, 0]
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 0.2
                }}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width: 2,
                    height: 4,
                    background: dotColor,
                    borderRadius: 2
                }}
            />
        </div>
    );
}
