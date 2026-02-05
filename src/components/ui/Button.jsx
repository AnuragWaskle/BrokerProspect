import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React from 'react';

export default function Button({
    children,
    variant = 'primary', // primary, secondary, outline, ghost
    size = 'md', // sm, md, lg
    icon = null,
    iconPosition = 'right',
    className = '',
    onClick,
    style = {},
    ...props
}) {
    const baseStyles = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        borderRadius: '8px', // Slightly rounded
        fontWeight: 600,
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        border: '1px solid transparent',
        textDecoration: 'none', // Ensure links don't have underline
    };

    const variants = {
        primary: {
            background: 'var(--color-primary)',
            color: 'white',
            border: '1px solid var(--color-primary)',
            boxShadow: '0 4px 6px -1px rgba(99, 102, 241, 0.4), 0 2px 4px -1px rgba(99, 102, 241, 0.2)',
        },
        secondary: {
            background: 'var(--color-bg-white)',
            color: 'var(--color-text-heading)',
            border: '1px solid #E5E7EB',
            boxShadow: 'var(--shadow-sm)',
        },
        outline: {
            background: 'transparent',
            color: 'var(--color-text-heading)',
            border: '1px solid #E5E7EB',
        },
        ghost: {
            background: 'transparent',
            color: 'var(--color-primary)',
        }
    };

    const sizes = {
        sm: { padding: '6px 12px', fontSize: '0.875rem' },
        md: { padding: '10px 20px', fontSize: '1rem' },
        lg: { padding: '14px 28px', fontSize: '1.125rem' },
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02, translateY: -1 }}
            whileTap={{ scale: 0.98 }}
            style={{ ...baseStyles, ...variants[variant], ...sizes[size], ...style }}
            className={className}
            onClick={onClick}
            {...props}
        >
            {icon && iconPosition === 'left' && icon}
            {children}
            {icon && iconPosition === 'right' && icon}
            {variant === 'text' && <ArrowRight size={16} />}
        </motion.button>
    );
}

