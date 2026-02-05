import { motion } from 'framer-motion';

export default function BentoGrid({ children, className = '' }) {
    return (
        <div
            className={`bento-grid ${className}`}
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridAutoRows: 'minmax(200px, auto)',
                gap: '24px'
            }}
        >
            {children}
            <style>{`
        @media (max-width: 1024px) {
          .bento-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .bento-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </div>
    );
}

export function BentoItem({ children, span = 1, className = '', background = 'white' }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={className}
            style={{
                gridColumn: `span ${span}`,
                background: background === 'primary' ? 'var(--color-primary)' : 'white',
                color: background === 'primary' ? 'white' : 'inherit',
                borderRadius: '20px',
                padding: '32px',
                border: '1px solid rgba(0,0,0,0.05)',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {children}
        </motion.div>
    );
}
