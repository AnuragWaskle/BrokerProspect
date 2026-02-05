import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Timeline({ steps }) {
    return (
        <div style={{ position: 'relative', padding: '40px 0' }}>
            {/* Vertical Line */}
            <div style={{ position: 'absolute', left: '26px', top: 0, bottom: 0, width: '4px', background: '#E5E7EB', zIndex: 0 }}></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                {steps.map((step, index) => (
                    <TimelineItem key={index} step={step} index={index} />
                ))}
            </div>
        </div>
    );
}

function TimelineItem({ step, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            style={{ display: 'flex', gap: '32px', position: 'relative', zIndex: 1 }}
        >
            {/* Number/Icon */}
            <div style={{
                flexShrink: 0,
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'var(--color-primary)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '1.25rem',
                border: '4px solid white',
                boxShadow: '0 0 0 4px #E0E7FF'
            }}>
                {index + 1}
            </div>

            {/* Content */}
            <div style={{ paddingTop: '8px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ fontSize: '1.125rem', color: 'var(--color-text-body)', marginBottom: '24px' }}>{step.description}</p>

                {step.image && (
                    <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.1)', boxShadow: 'var(--shadow-md)' }}>
                        {/* Image Placeholder if string not provided */}
                        {typeof step.image === 'string' ? <img src={step.image} alt={step.title} /> : step.image}
                    </div>
                )}
            </div>
        </motion.div>
    );
}
