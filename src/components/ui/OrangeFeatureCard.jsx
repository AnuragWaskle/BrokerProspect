import { motion } from 'framer-motion';

export default function OrangeFeatureCard({ icon, title, description, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(255, 107, 53, 0.2)',
                transition: { duration: 0.3 }
            }}
            style={{
                background: 'white',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(255, 107, 53, 0.1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Gradient overlay on hover */}
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #FF6B35 0%, #FF4D6D 100%)',
                }}
            />

            {/* Icon */}
            <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    color: 'white'
                }}
            >
                {icon}
            </motion.div>

            {/* Title */}
            <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#1A1A1A',
                marginBottom: '16px',
                lineHeight: 1.3
            }}>
                {title}
            </h3>

            {/* Description */}
            <p style={{
                fontSize: '1rem',
                color: '#6B7280',
                lineHeight: 1.6,
                margin: 0
            }}>
                {description}
            </p>
        </motion.div>
    );
}
