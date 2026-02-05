export default function Marquee({ children, speed = 15, direction = 'left', ...props }) {
    return (
        <div style={{ overflow: 'hidden', width: '100%', display: 'flex' }} {...props}>
            <div
                className="animate-marquee"
                style={{
                    display: 'flex',
                    gap: '40px',
                    animationDuration: `${speed}s`,
                    animationDirection: direction === 'right' ? 'reverse' : 'normal',
                    minWidth: '100%'
                }}
            >
                {children}
                {/* Duplicate content for seamless loop */}
                {children}
            </div>
        </div>
    );
}
