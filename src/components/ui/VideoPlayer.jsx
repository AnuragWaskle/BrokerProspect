import { useRef, useEffect } from 'react';

export default function VideoPlayer({ src, poster, autoPlay = true, loop = true, muted = true, controls = false, className = '', ...props }) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (autoPlay && videoRef.current) {
            // Ensure muted for autoplay policy
            videoRef.current.muted = true;
            videoRef.current.play().catch(e => console.log('Autoplay blocked', e));
        }
    }, [autoPlay]);

    return (
        <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', background: '#000', ...props.style }} className={className}>
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                loop={loop}
                muted={muted}
                playsInline
                controls={controls}
                style={{ width: '100%', height: 'auto', display: 'block' }}
            />
        </div>
    );
}
