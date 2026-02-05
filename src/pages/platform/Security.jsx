import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Shield, Lock, ShieldCheck, Eye, Key, FileText, ArrowRight, Zap, Award } from 'lucide-react';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import { SecurityRing, GlassBlade } from '../../components/ui/ThreeDComponents';

export default function Security() {
    const containerRef = useRef(null);
    const { scrollYProgress: rawScrollY } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scrollYProgress = useSpring(rawScrollY, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Vault Descent Camera (Vertical Elevator)
    const vaultY = useTransform(scrollYProgress, [0, 1], ['0%', '-300%']);
    const vaultRotateZ = useTransform(scrollYProgress, [0, 1], [0, 720]);
    const vaultPerspective = useTransform(scrollYProgress, [0, 0.5, 1], ['1000px', '2000px', '1000px']);

    return (
        <div ref={containerRef} style={{ background: '#020617', color: 'white', minHeight: '500vh', position: 'relative', overflow: 'hidden' }}>

            {/* 1. THE VAULT DESCENDER STAGE */}
            <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', perspective: vaultPerspective, overflow: 'hidden' }}>

                {/* Visual Elevator Shaft */}
                <motion.div
                    style={{
                        position: 'absolute', inset: 0,
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        y: vaultY,
                        transformStyle: 'preserve-3d'
                    }}
                >
                    <VaultLayers scrollYProgress={scrollYProgress} />
                </motion.div>

                {/* Content Layers */}
                <div className="container" style={{ position: 'relative', height: '100%', zIndex: 10, pointerEvents: 'none' }}>

                    {/* Stage 0: Hero */}
                    <Stage scrollYProgress={scrollYProgress} range={[0, 0.12]}>
                        <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto', pointerEvents: 'auto' }}>
                            <Badge style={{ background: '#10B981', color: 'black', border: 'none', marginBottom: 24 }}>Enterprise Grade</Badge>
                            <h1 style={{ fontSize: 'clamp(4rem, 10vw, 7rem)', fontWeight: 900, lineHeight: 0.85, marginBottom: 32 }}>
                                THE <span style={{ color: '#10B981' }}>VAULT</span> <br /> DESCENT.
                            </h1>
                            <p style={{ fontSize: '1.5rem', opacity: 0.7, maxWidth: 600, margin: '0 auto 48px' }}>
                                A multi-layered architecture designed to protect the world's most sensitive insurance data.
                            </p>
                            <Button size="xl" style={{ background: '#10B981', color: 'black', border: 'none' }}>View Trust Center</Button>
                        </div>
                    </Stage>

                    {/* Stage 1: Encryption */}
                    <Stage scrollYProgress={scrollYProgress} range={[0.2, 0.35]} side="right">
                        <GlassBlade
                            badge="Layer 01: Encryption"
                            title="AES-256 GCM"
                            description="All data is encrypted at rest and in transit. Wilson uses hardware-level security modules for key management."
                            color="#10B981"
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <Key size={24} color="#10B981" />
                                <span style={{ fontWeight: 700, color: '#10B981' }}>ZERO-KNOWLEDGE BINDING</span>
                            </div>
                        </GlassBlade>
                    </Stage>

                    {/* Stage 2: Compliance */}
                    <Stage scrollYProgress={scrollYProgress} range={[0.45, 0.6]} side="left">
                        <GlassBlade
                            badge="Layer 02: Compliance"
                            title="SOC2 Type II"
                            description="Independently audited and certified. We adhere to the strictest industry standards for data privacy and availability."
                            color="#3B82F6"
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <ShieldCheck size={24} color="#3B82F6" />
                                <span style={{ fontWeight: 700, color: '#3B82F6' }}>AUDITED ANNUALLY</span>
                            </div>
                        </GlassBlade>
                    </Stage>

                    {/* Stage 3: Infrastructure */}
                    <Stage scrollYProgress={scrollYProgress} range={[0.7, 0.85]} side="right">
                        <GlassBlade
                            badge="Layer 03: Infrastructure"
                            title="Distributed Nodes"
                            description="Fail-safe architecture across multiple global regions. 99.99% uptime guaranteed by design."
                            color="#818CF8"
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <Zap size={24} color="#818CF8" />
                                <span style={{ fontWeight: 700, color: '#818CF8' }}>REGION REDUNDANCY</span>
                            </div>
                        </GlassBlade>
                    </Stage>

                    {/* Stage 4: Conclusion */}
                    <Stage scrollYProgress={scrollYProgress} range={[0.92, 1]} side="center">
                        <div style={{ textAlign: 'center', pointerEvents: 'auto' }}>
                            <Badge style={{ background: '#10B981', color: 'black', border: 'none', marginBottom: 24 }}>Protected</Badge>
                            <h2 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: 24 }}>Total Security.</h2>
                            <p style={{ fontSize: '1.25rem', opacity: 0.7, marginBottom: 48, maxWidth: 500, margin: '0 auto 48px' }}>
                                Your data is safer with Wilson than in your own servers. Sleep better tonight.
                            </p>
                            <Button size="lg" style={{ background: '#10B981', color: 'black', border: 'none' }}>Download Security Whitepaper</Button>
                        </div>
                    </Stage>

                </div>
            </div>

            {/* Spacer sections */}
            <div style={{ height: '100vh' }} />
            <div style={{ height: '100vh' }} />
            <div style={{ height: '100vh' }} />
            <div style={{ height: '100vh' }} />
            <div style={{ height: '100vh' }} />
        </div>
    );
}

function VaultLayers({ scrollYProgress }) {
    // Large rings that get bigger as we "pass" through them
    const layers = [
        { color: '#10B981', title: 'TLS 1.3' },
        { color: '#3B82F6', title: 'SOC2 TYPE II' },
        { color: '#818CF8', title: 'AES-256' },
        { color: '#F59E0B', title: 'BYOK' },
    ];

    return (
        <div style={{ position: 'relative', width: '100%', height: '400vh' }}>
            {layers.map((layer, i) => (
                <VaultRing key={i} layer={layer} index={i} scrollYProgress={scrollYProgress} />
            ))}
        </div>
    );
}

function VaultRing({ layer, index, scrollYProgress }) {
    const start = index * 0.25;
    const end = start + 0.25;

    // Each ring scales up and fades out as camera "descends" through it
    const scale = useTransform(scrollYProgress, [start, end], [0.5, 5]);
    const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 0.5, 0.5, 0]);
    const rotate = useTransform(scrollYProgress, [start, end], [0, 90]);

    return (
        <motion.div
            style={{
                position: 'absolute',
                top: `${index * 100}vh`,
                left: '50%',
                x: '-50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '100%', height: '100vh',
                scale, opacity, rotateZ: rotate,
                transformStyle: 'preserve-3d'
            }}
        >
            <SecurityRing size={800} color={layer.color} delay={index * 0.5} />
            <div style={{
                position: 'absolute', color: layer.color, fontWeight: 900, fontSize: '5rem', opacity: 0.1,
                transform: 'translateZ(-100px)'
            }}>
                {layer.title}
            </div>
        </motion.div>
    );
}

function Stage({ children, scrollYProgress, range, side = "center" }) {
    const opacity = useTransform(scrollYProgress,
        [range[0] - 0.03, range[0], range[1], range[1] + 0.03],
        [0, 1, 1, 0]
    );
    const z = useTransform(scrollYProgress,
        [range[0] - 0.03, range[0], range[1], range[1] + 0.03],
        [-100, 0, 0, 100]
    );

    const justifyContent = side === 'left' ? 'flex-start' : side === 'right' ? 'flex-end' : 'center';

    return (
        <motion.div
            style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: justifyContent,
                opacity,
                z,
                pointerEvents: 'none'
            }}
        >
            <div style={{ pointerEvents: 'auto' }}>
                {children}
            </div>
        </motion.div>
    );
}
