import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import Button from './Button';
import Badge from './Badge';

export default function PricingCard({
    name,
    price,
    interval = 'month',
    description,
    features,
    isPopular = false,
    ctaText = 'Start Trial',
    ctaLink = '/signup',
    variant = 'default'
}) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            style={{
                background: isPopular ? 'white' : '#F9FAFB',
                padding: '32px',
                borderRadius: '24px',
                border: isPopular ? '2px solid var(--color-primary)' : '1px solid rgba(0,0,0,0.05)',
                boxShadow: isPopular ? '0 20px 40px -4px rgba(99, 102, 241, 0.2)' : 'none',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            {isPopular && (
                <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)' }}>
                    <Badge style={{ background: 'var(--color-primary)', color: 'white', border: 'none' }}>Most Popular</Badge>
                </div>
            )}

            <div style={{ marginBottom: '32px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px' }}>{name}</h3>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '4px', marginBottom: '16px' }}>
                    {price === 'Custom' ? (
                        <span style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>Let's Talk</span>
                    ) : (
                        <>
                            <span style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>${price}</span>
                            <span style={{ color: 'var(--color-text-body)', fontWeight: 500 }}>/{interval}</span>
                        </>
                    )}
                </div>
                <p style={{ color: 'var(--color-text-body)', fontSize: '0.95rem' }}>{description}</p>
            </div>

            <div style={{ marginBottom: '40px', flex: 1 }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#9CA3AF', marginBottom: '16px' }}>Includes</div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {features.map((feature, i) => (
                        <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '0.95rem' }}>
                            <div style={{ marginTop: '2px', background: isPopular ? '#EEF2FF' : '#E5E7EB', borderRadius: '50%', padding: '2px' }}>
                                <Check size={14} color={isPopular ? 'var(--color-primary)' : '#4B5563'} />
                            </div>
                            <span style={{ opacity: feature.includes('Custom') ? 1 : 0.9, fontWeight: feature.includes('Custom') ? 600 : 400 }}>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <Link to={ctaLink} style={{ width: '100%' }}>
                <Button
                    variant={isPopular ? 'primary' : 'outline'}
                    style={{ width: '100%' }}
                    size="lg"
                >
                    {ctaText}
                </Button>
            </Link>
        </motion.div>
    );
}
