import { motion } from 'framer-motion';

// 1. Animated Rocket/Launch (Growth)
export const AnimatedRocket = ({ size = 60, color = "#4F46E5" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
            d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
            animate={{ y: [0, -2, 0], x: [0, -1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path
            d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
            animate={{ y: [0, -5, 0], x: [0, 2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
            d="M9 9c1.76-1.42 6.13-2 8.78-1.11"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
            d="M15 15c-1.14 2-2.3 5-5 7 1.2-1.6 3.5-2.2 5-2.2"
            animate={{ opacity: [0, 1, 0], y: [0, 2, 4] }}
            transition={{ duration: 1, repeat: Infinity }}
            strokeOpacity="0.5"
        />
    </svg>
);

// 2. Animated Shield (Security)
export const AnimatedShield = ({ size = 60, color = "#10B981" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            initial={{ strokeDasharray: 60, strokeDashoffset: 60 }}
            whileInView={{ strokeDashoffset: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.path
            d="M9 12l2 2 4-4"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
        />
        <motion.circle
            cx="12" cy="12" r="9"
            stroke={color}
            strokeWidth="0.5"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
        />
    </svg>
);

// 3. Animated Globe/Network (Global Reach)
export const AnimatedGlobe = ({ size = 60, color = "#3B82F6" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <motion.circle
            cx="12" cy="12" r="10"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
            d="M2 12h20"
            animate={{ scaleX: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.path
            d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
            animate={{ scaleX: [1, 0.8, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating Satellite */}
        <motion.circle
            cx="20" cy="4" r="1.5"
            fill={color}
            animate={{
                x: [0, -15, 0],
                y: [0, 15, 0],
                opacity: [0, 1, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
        />
    </svg>
);

// 4. Animated Data Flow/Chart (Analytics)
export const AnimatedChart = ({ size = 60, color = "#F59E0B" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />

        {/* Animated Bars */}
        <motion.rect x="5" y="14" width="2" height="6" fill={color} opacity="0.2" animate={{ height: [6, 12, 6], y: [14, 8, 14] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.rect x="11" y="4" width="2" height="16" fill={color} opacity="0.2" animate={{ height: [16, 10, 16], y: [4, 10, 4] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} />
        <motion.rect x="17" y="10" width="2" height="10" fill={color} opacity="0.2" animate={{ height: [10, 15, 10], y: [10, 5, 10] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }} />

        {/* Trend Line */}
        <motion.path
            d="M4 12l6-8 6 4 4-6"
            stroke={color}
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        />
    </svg>
);

// 5. Animated Server/Database (Infrastructure)
export const AnimatedServer = ({ size = 60, color = "#8B5CF6" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
        <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />

        {/* Activity Lights */}
        <motion.circle cx="10" cy="6" r="1" fill={color} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 0.5, repeat: Infinity }} />
        <motion.circle cx="14" cy="6" r="1" fill={color} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 0.7, repeat: Infinity, delay: 0.2 }} />
        <motion.circle cx="18" cy="6" r="1" fill={color} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 0.3, repeat: Infinity, delay: 0.4 }} />

        <motion.path
            d="M22 10v4"
            stroke={color}
            animate={{ strokeDasharray: ["0,10", "10,0"] }}
            transition={{ duration: 2, repeat: Infinity }}
        />
    </svg>
);
