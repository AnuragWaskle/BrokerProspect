import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, FileText, Search, Zap, Shield, Check, Lock, PenTool, Award } from 'lucide-react';

// 1. Rotating 3D Globe
export const ThreeDGlobe = ({ size = 200, color = "#4F46E5" }) => (
    <motion.div
        animate={{ rotateY: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
            width: size,
            height: size,
            borderRadius: '50%',
            background: `radial-gradient(circle at 30% 30%, ${color}, #000)`,
            boxShadow: `inset -20px -20px 50px rgba(0,0,0,0.5), 0 0 50px ${color}44`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1000px',
            transformStyle: 'preserve-3d'
        }}
    >
        <Globe size={size * 0.6} color="white" style={{ opacity: 0.3 }} />
    </motion.div>
);

// 2. 3D Document Scanner (Holographic Laser)
export const DocumentScanner = () => (
    <div style={{ position: 'relative', perspective: '1000px' }}>
        <motion.div
            style={{
                width: 240,
                height: 320,
                background: 'white',
                borderRadius: '8px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                rotateX: 20,
                transformStyle: 'preserve-3d',
                padding: '24px',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div style={{ height: 20, width: '80%', background: '#F3F4F6', marginBottom: 12 }} />
            <div style={{ height: 10, width: '100%', background: '#F3F4F6', marginBottom: 8 }} />
            <div style={{ height: 10, width: '90%', background: '#F3F4F6', marginBottom: 8 }} />
            <div style={{ height: 10, width: '40%', background: '#F3F4F6', marginBottom: 24 }} />
            <div style={{ height: 120, width: '100%', background: '#F3F4F6', borderRadius: 4 }} />

            {/* Laser Line */}
            <motion.div
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: '#10B981',
                    boxShadow: '0 0 15px #10B981, 0 0 5px #10B981',
                    zIndex: 10
                }}
            />
            {/* Glow beneath laser */}
            <motion.div
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '40px',
                    background: 'linear-gradient(to bottom, transparent, rgba(16, 185, 129, 0.1))',
                    zIndex: 5,
                    transform: 'translateY(-100%)'
                }}
            />
        </motion.div>
    </div>
);

// 3. 3D Digital Wax Seal
export const WaxSeal = ({ active }) => (
    <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={active ? { scale: 1, rotate: 0 } : {}}
        transition={{ type: 'spring', damping: 12, stiffness: 100 }}
        style={{
            width: 120,
            height: 120,
            background: 'radial-gradient(circle at 30% 30%, #EF4444, #991B1B)',
            borderRadius: '50%',
            boxShadow: '0 10px 20px rgba(0,0,0,0.2), inset -4px -4px 10px rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '4px solid #B91C1C',
            position: 'relative',
            transformStyle: 'preserve-3d'
        }}
    >
        <div style={{
            width: 80, height: 80, borderRadius: '50%', border: '2px dashed rgba(255,255,255,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transform: 'translateZ(10px)'
        }}>
            <Shield size={40} color="white" />
        </div>
    </motion.div>
);

// 4. Floating 3D Lead Blocks
export const LeadBlock = ({ delay = 0, color = "#4F46E5" }) => (
    <motion.div
        animate={{ y: [0, -20, 0], rotateY: [0, 360] }}
        transition={{ duration: 6, delay, repeat: Infinity, ease: "easeInOut" }}
        style={{
            width: 60,
            height: 60,
            background: color,
            borderRadius: '12px',
            boxShadow: `0 10px 30px ${color}44`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transformStyle: 'preserve-3d'
        }}
    >
        <Search size={24} color="white" style={{ transform: 'translateZ(20px)' }} />
    </motion.div>
);

// 5. Success Trophy
export const SuccessTrophy = () => (
    <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
        <motion.div
            animate={{ rotateY: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            <Award size={120} color="#F59E0B" strokeWidth={1.5} />
        </motion.div>
    </motion.div>
);

// 6. Neural Node (Holographic LLM Center)
export const NeuralNode = ({ size = 300 }) => (
    <div style={{ position: 'relative', width: size, height: size, perspective: '1000px' }}>
        {[...Array(3)].map((_, i) => (
            <motion.div
                key={i}
                animate={{
                    rotateX: [i * 30, i * 60, i * 30],
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    inset: i * 20,
                    border: `2px solid ${['#10B981', '#4F46E5', '#3B82F6'][i]}`,
                    borderRadius: '50%',
                    opacity: 0.3,
                    transformStyle: 'preserve-3d'
                }}
            />
        ))}
        <div style={{ position: 'absolute', inset: '25%', background: 'radial-gradient(circle, #10B981 0%, transparent 70%)', filter: 'blur(20px)', opacity: 0.5 }} />
        <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: 'absolute', inset: '40%', background: '#10B981', borderRadius: '50%', boxShadow: '0 0 50px #10B981' }}
        />
    </div>
);

// 7. Glass Blade (Premium Informational Panel)
export const GlassBlade = ({ children, title, description, badge, color = "#10B981" }) => (
    <motion.div
        whileHover={{ translateZ: 20, rotateY: -5 }}
        style={{
            background: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            borderRadius: 32,
            padding: 40,
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)',
            transformStyle: 'preserve-3d',
            maxWidth: 500,
            position: 'relative'
        }}
    >
        <div style={{ transform: 'translateZ(30px)' }}>
            <span style={{ color, fontWeight: 900, fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{badge}</span>
            <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#111827', margin: '8px 0 16px', lineHeight: 1.1 }}>{title}</h3>
            <p style={{ color: '#4B5563', fontSize: '1.125rem', lineHeight: 1.6 }}>{description}</p>
            <div style={{ marginTop: 32 }}>{children}</div>
        </div>
    </motion.div>
);

// 8. Isometric Node (For Place: Market Mesh)
export const IsometricNode = ({ color = "#4F46E5", active = false }) => (
    <div style={{ transform: 'rotateX(60deg) rotateZ(45deg)', transformStyle: 'preserve-3d' }}>
        <motion.div
            animate={active ? { translateZ: [0, 20, 0], scale: [1, 1.2, 1] } : {}}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{
                width: 60, height: 60,
                background: active ? color : 'rgba(255,255,255,0.8)',
                border: `2px solid ${color}`,
                boxShadow: active ? `0 0 30px ${color}88` : 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
        >
            <Globe size={24} color={active ? "white" : color} style={{ transform: 'rotateZ(-45deg) rotateX(-60deg)' }} />
        </motion.div>
    </div>
);

// 9. Document Piece (For Execute: Puzzle)
export const DocumentPiece = ({ delay = 0, targetReached = false }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5, rotateX: 45, rotateY: 45 }}
        animate={targetReached ? { opacity: 1, scale: 1, rotateX: 0, rotateY: 0 } : { opacity: 0.6 }}
        transition={{ duration: 0.8, delay }}
        style={{
            width: 120, height: 160, background: 'white', borderRadius: 8,
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '1px solid #E5E7EB',
            padding: 16, transformStyle: 'preserve-3d'
        }}
    >
        <div style={{ height: 10, width: '80%', background: '#F3F4F6', marginBottom: 8 }} />
        <div style={{ height: 10, width: '100%', background: '#F3F4F6', marginBottom: 8 }} />
        <div style={{ height: 60, width: '100%', background: '#F3F4F6', borderRadius: 4 }} />
    </motion.div>
);

// 10. Security Ring (For Security: Vault Descent)
export const SecurityRing = ({ size = 300, color = "#10B981", delay = 0 }) => (
    <motion.div
        animate={{ rotateZ: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", delay }}
        style={{
            width: size, height: size,
            border: `4px dashed ${color}`,
            borderRadius: '50%',
            opacity: 0.3,
            position: 'relative',
            transformStyle: 'preserve-3d'
        }}
    >
        <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ position: 'absolute', top: -10, left: '50%', width: 20, height: 20, background: color, borderRadius: '50%', boxShadow: `0 0 20px ${color}` }}
        />
    </motion.div>
);
// 11. Floating Node (For Solo Brokers: The Powerhouse)
export const FloatingNode = ({ color = "#4F46E5" }) => (
    <div style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
        <motion.div
            animate={{
                rotateY: [0, 360],
                y: [0, -20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{
                width: 120, height: 120,
                background: `radial-gradient(circle at 30% 30%, ${color}, #000)`,
                borderRadius: '50%',
                boxShadow: `0 0 50px ${color}44`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transformStyle: 'preserve-3d',
                position: 'relative'
            }}
        >
            <Zap size={48} color="white" style={{ transform: 'translateZ(30px)' }} />
            <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                    position: 'absolute', inset: -20, border: `2px solid ${color}`,
                    borderRadius: '50%', transform: 'translateZ(-10px)'
                }}
            />
        </motion.div>
    </div>
);

// 12. Growth Lattice (For Growing Agencies: Scaling)
export const GrowthLattice = ({ color = "#10B981" }) => (
    <div style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
        <motion.div
            animate={{ rotateX: [45, 55, 45], rotateZ: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ width: 300, height: 300, position: 'relative', transformStyle: 'preserve-3d' }}
        >
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        left: '50%', top: '50%',
                        width: 10, height: 10,
                        background: color,
                        borderRadius: '50%',
                        boxShadow: `0 0 15px ${color}`,
                        transform: `rotate(${(i * 360) / 8}deg) translate(100px) translateZ(${i * 20}px)`
                    }}
                />
            ))}
            <div style={{ position: 'absolute', inset: '20%', border: `1px solid ${color}44`, borderRadius: '50%' }} />
            <div style={{ position: 'absolute', inset: '40%', border: `1px solid ${color}44`, borderRadius: '50%' }} />
        </motion.div>
    </div>
);

// 13. Architectural Stack (For Enterprise: The Unifier)
export const ArchitecturalStack = ({ color = "#3B82F6" }) => (
    <div style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
        {[...Array(4)].map((_, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, y: 100 * i }}
                animate={{
                    opacity: 1,
                    y: i * 40,
                    rotateX: 60,
                    rotateZ: 45,
                    translateZ: i * 20
                }}
                transition={{ duration: 1, delay: i * 0.2 }}
                style={{
                    width: 200, height: 200,
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${color}88`,
                    borderRadius: '12px',
                    position: 'absolute',
                    top: 0, left: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
            >
                {i === 3 && <Shield size={64} color={color} style={{ transform: 'rotateZ(-45deg) rotateX(-60deg)' }} />}
            </motion.div>
        ))}
    </div>
);

// 14. Precision Scanner (For Specialty: Details)
export const PrecisionScanner = ({ color = "#F59E0B" }) => (
    <div style={{ perspective: '1000px', transformStyle: 'preserve-3d', display: 'flex', alignItems: 'center', justifyContent: 'center', height: 400 }}>
        <motion.div
            animate={{ rotateY: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ position: 'relative', width: 240, height: 320, transformStyle: 'preserve-3d' }}
        >
            <DocumentPiece targetReached={true} />
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        translateZ: [i * 20 - 20, i * 20 + 20, i * 20 - 20],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                    style={{
                        position: 'absolute', inset: -20 - i * 10,
                        border: `2px solid ${color}`,
                        borderRadius: '12px',
                        transform: 'translateZ(40px)'
                    }}
                />
            ))}
        </motion.div>
    </div>
);
