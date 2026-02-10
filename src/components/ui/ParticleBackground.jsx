import { motion } from 'framer-motion';

export default function ParticleBackground({ count = 20 }) {
    const particles = Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 40 + 20,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.3 + 0.1
    }));

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0
        }}>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, particle.id % 2 === 0 ? 20 : -20, 0],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: particle.delay
                    }}
                    style={{
                        position: 'absolute',
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                        borderRadius: particle.id % 3 === 0 ? '50%' : particle.id % 3 === 1 ? '8px' : '0',
                        background: particle.id % 2 === 0
                            ? 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)'
                            : 'linear-gradient(135deg, #FF8C42 0%, #FF4D6D 100%)',
                        opacity: particle.opacity,
                        filter: 'blur(2px)'
                    }}
                />
            ))}
        </div>
    );
}
