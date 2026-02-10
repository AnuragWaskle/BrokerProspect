import { motion } from 'framer-motion';

export default function FloatingCard({ children, delay = 0, className = '', style = {} }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: [0, -10, 0],
            }}
            transition={{
                opacity: { duration: 0.6, delay },
                y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay
                }
            }}
            whileHover={{
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
            }}
            className={className}
            style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                ...style
            }}
        >
            {children}
        </motion.div>
    );
}
