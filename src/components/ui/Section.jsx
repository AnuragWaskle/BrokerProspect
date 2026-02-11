import styles from '../../styles/responsive.module.css';

export default function Section({
    children,
    className = '',
    background = 'white', // white, gray, dark
    padding = 'lg', // none, sm, md, lg, xl
    id = '',
    style = {},
    ...props
}) {
    const backgrounds = {
        white: 'var(--color-bg-white)',
        gray: 'var(--color-bg-gray)',
        dark: '#111827',
        primary: 'var(--color-primary)'
    };

    const paddingClasses = {
        none: '',
        sm: styles.responsivePaddingSM,
        md: styles.responsivePaddingMD,
        lg: styles.responsivePaddingLG,
        xl: styles.responsivePaddingXL
    };

    return (
        <section
            id={id}
            className={`${className} ${paddingClasses[padding] || ''}`}
            style={{
                backgroundColor: backgrounds[background],
                position: 'relative',
                overflow: 'hidden',
                color: background === 'dark' || background === 'primary' ? 'white' : 'inherit',
                ...style
            }}
            {...props}
        >
            {children}
        </section>
    );
}
