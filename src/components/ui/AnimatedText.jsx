import { motion } from 'framer-motion';

export const GradientText = ({ children, className = '', style = {} }) => {
    return (
        <span
            className={className}
            style={{
                background: 'linear-gradient(to right, #4f46e5, #9333ea, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% auto',
                animation: 'textGradient 4s linear infinite',
                ...style
            }}
        >
            {children}
            <style>{`
        @keyframes textGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
        </span>
    );
};

export const RevealText = ({ text, delay = 0 }) => {
    return (
        <span style={{ overflow: 'hidden', display: 'inline-block' }}>
            <motion.span
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay, ease: 'easeOut' }}
                style={{ display: 'inline-block' }}
            >
                {text}
            </motion.span>
        </span>
    );
};
