import { motion } from 'framer-motion';

export default function Section({
    children,
    className = '',
    background = 'white', // white, gray, dark
    padding = 'lg', // none, sm, md, lg, xl
    id = '',
    ...props
}) {
    const backgrounds = {
        white: 'var(--color-bg-white)',
        gray: 'var(--color-bg-gray)',
        dark: '#111827',
        primary: 'var(--color-primary)'
    };

    const paddings = {
        none: '0',
        sm: '40px 0',
        md: '80px 0',
        lg: '120px 0',
        xl: '160px 0'
    };

    return (
        <section
            id={id}
            className={className}
            style={{
                backgroundColor: backgrounds[background],
                padding: paddings[padding],
                position: 'relative',
                overflow: 'hidden',
                color: background === 'dark' || background === 'primary' ? 'white' : 'inherit'
            }}
            {...props}
        >
            {children}
        </section>
    );
}
