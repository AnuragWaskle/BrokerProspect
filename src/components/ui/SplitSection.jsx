import { motion } from 'framer-motion';

export default function SplitSection({
    children,
    reverse = false,
    image,
    imageAlt = "Feature image",
    ...props
}) {
    return (
        <div className={`container split-section ${reverse ? 'reverse' : ''}`} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ order: reverse ? 2 : 1 }}
            >
                {children}
            </motion.div>

            {/* Media */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ order: reverse ? 1 : 2 }}
            >
                <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '1px solid rgba(0,0,0,0.05)' }}>
                    {typeof image === 'string' ? (
                        <img src={image} alt={imageAlt} style={{ width: '100%', height: 'auto', display: 'block' }} />
                    ) : (
                        image
                    )}
                </div>
            </motion.div>

            <style>{`
        @media (max-width: 968px) {
          .split-section {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .split-section > div {
            order: unset !important;
          }
        }
      `}</style>
        </div>
    );
}
