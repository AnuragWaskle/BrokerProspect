export default function Badge({ children, color = 'blue', ...props }) {
    const colors = {
        blue: { bg: '#EFF6FF', text: '#3B82F6' },
        green: { bg: '#ECFDF5', text: '#10B981' },
        purple: { bg: '#F5F3FF', text: '#8B5CF6' },
        yellow: { bg: '#FFFBEB', text: '#F59E0B' },
        gray: { bg: '#F3F4F6', text: '#4B5563' },
    };

    const style = colors[color] || colors.blue;

    return (
        <span style={{
            display: 'inline-block',
            padding: '4px 12px',
            borderRadius: '999px',
            fontSize: '0.75rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            backgroundColor: style.bg,
            color: style.text,
            ...props.style
        }}>
            {children}
        </span>
    );
}
