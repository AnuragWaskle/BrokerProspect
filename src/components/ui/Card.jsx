import { motion } from 'framer-motion';

export default function Card({ children, className = '', hoverEffect = true, glass = false, ...props }) {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5, boxShadow: 'var(--shadow-lg)' } : {}}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{
                background: glass ? 'rgba(255, 255, 255, 0.7)' : 'white',
                backdropFilter: glass ? 'blur(10px)' : 'none',
                borderRadius: '16px',
                border: '1px solid rgba(0,0,0,0.05)',
                boxShadow: 'var(--shadow-md)',
                padding: '32px',
                overflow: 'hidden',
                ...props.style
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
