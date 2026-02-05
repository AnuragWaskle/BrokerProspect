import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { PenTool, Shield, Lock, CheckCircle, FileCheck, ArrowRight, Zap, Award } from 'lucide-react';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import { DocumentPiece, WaxSeal, GlassBlade } from '../../components/ui/ThreeDComponents';

export default function Execute() {
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

    return (
        <div ref={containerRef} style={{ background: '#0F172A', color: 'white', minHeight: '400vh', position: 'relative' }}>

            {/* 1. STICKY FINISHING STAGE */}
            <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', overflow: 'hidden' }}>

                {/* Background Atmosphere */}
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, #1E293B 0%, #0F172A 100%)' }} />

                {/* Central Focus: The Document Puzzle */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 }}>
                    <DocumentPuzzle scrollYProgress={scrollYProgress} />
                </div>

                {/* Content Layers */}
                <div className="container" style={{ position: 'relative', height: '100%', zIndex: 10, pointerEvents: 'none' }}>

                    {/* Stage 0: Hero */}
                    <Stage scrollYProgress={scrollYProgress} range={[0, 0.15]}>
                        <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto', pointerEvents: 'auto' }}>
                            <Badge style={{ background: '#4F46E5', color: 'white', border: 'none', marginBottom: 24 }}>Module 04: Execute</Badge>
                            <h1 style={{ fontSize: 'clamp(4rem, 10vw, 7rem)', fontWeight: 900, lineHeight: 0.85, marginBottom: 32 }}>
                                THE <span style={{ color: '#818CF8' }}>CLOSING</span> <br /> SEQUENCE.
                            </h1>
                            <p style={{ fontSize: '1.5rem', opacity: 0.7, maxWidth: 600, margin: '0 auto 48px' }}>
                                Watch your policy come together in real-time. Legally binding, instantly filed.
                            </p>
                            <Button size="xl" style={{ background: '#4F46E5', border: 'none' }}>Finalize Policy</Button>
                        </div>
                    </Stage>

                    {/* Stage 1: Verification */}
                    <Stage scrollYProgress={scrollYProgress} range={[0.25, 0.45]} side="left">
                        <GlassBlade
                            badge="Verification"
                            title="Compliance Lock"
                            description="Wilson performs a final 50-point compliance check against state regulations and carrier appetites."
                            color="#10B981"
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <Lock size={24} color="#10B981" />
                                <span style={{ fontWeight: 700, color: '#10B981' }}>SOC2 COMPLIANT</span>
                            </div>
                        </GlassBlade>
                    </Stage>

                    {/* Stage 2: Binding */}
                    <Stage scrollYProgress={scrollYProgress} range={[0.55, 0.75]} side="right">
                        <GlassBlade
                            badge="Execution"
                            title="Instant Bind"
                            description="Once signing is complete, Wilson binds the policy and issues the COI via API in under 4 seconds."
                            color="#F59E0B"
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <Zap size={24} color="#F59E0B" />
                                <span style={{ fontWeight: 700, color: '#F59E0B' }}>AUTO-E-SIGN</span>
                            </div>
                        </GlassBlade>
                    </Stage>

                    {/* Stage 3: Archive */}
                    <Stage scrollYProgress={scrollYProgress} range={[0.85, 1]} side="center">
                        <motion.div
                            style={{
                                textAlign: 'center',
                                pointerEvents: 'auto',
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '48px',
                                padding: '80px',
                                maxWidth: '1000px',
                                boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5)',
                                position: 'relative',
                                zIndex: 30
                            }}
                        >
                            <Badge style={{ background: '#10B981', color: 'white', border: 'none', marginBottom: 24 }}>Complete</Badge>
                            <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, marginBottom: 24, color: 'white' }}>Locked & Loaded.</h2>
                            <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: 48, maxWidth: 600, margin: '0 auto 48px', lineHeight: 1.6 }}>
                                Your policy is bound, filed, and archived. Commissions have been tracked automatically.
                            </p>
                            <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                                <Button size="lg" style={{ background: '#10B981', border: 'none', borderRadius: '100px', padding: '16px 40px' }}>Download Policy</Button>
                                <Button size="lg" variant="outline" style={{ borderRadius: '100px', padding: '16px 40px' }}>View Dashboard</Button>
                            </div>
                        </motion.div>
                    </Stage>

                </div>
            </div>

            {/* Spacer sections */}
            <div style={{ height: '100vh' }} />
            <div style={{ height: '100vh' }} />
            <div style={{ height: '100vh' }} />
            <div style={{ height: '100vh' }} />
        </div>
    );
}

function DocumentPuzzle({ scrollYProgress }) {
    // Puzzle pieces fly from corners to center
    const piecePositions = [
        { initial: { x: -500, y: -300, rotate: -45 }, target: { x: -70, y: -100, rotate: -5 } },
        { initial: { x: 500, y: -200, rotate: 45 }, target: { x: 80, y: -40, rotate: 10 } },
        { initial: { x: -400, y: 400, rotate: -10 }, target: { x: -40, y: 60, rotate: -2 } },
        { initial: { x: 600, y: 300, rotate: 20 }, target: { x: 90, y: 120, rotate: 5 } },
    ];

    const sealScale = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
    const sealRotate = useTransform(scrollYProgress, [0.7, 1], [-180, 0]);

    return (
        <div style={{ position: 'relative', width: 600, height: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {piecePositions.map((pos, i) => (
                <Piece
                    key={i}
                    scrollYProgress={scrollYProgress}
                    range={[0.1 * i, 0.5 + 0.1 * i]}
                    startPos={pos.initial}
                    endPos={pos.target}
                    delay={i * 0.1}
                />
            ))}

            {/* Final Seal */}
            <motion.div
                style={{
                    position: 'absolute', zIndex: 20,
                    scale: sealScale, rotate: sealRotate,
                    transformStyle: 'preserve-3d'
                }}
            >
                <WaxSeal active={true} />
            </motion.div>
        </div>
    );
}

function Piece({ scrollYProgress, range, startPos, endPos, delay }) {
    const x = useTransform(scrollYProgress, range, [startPos.x, endPos.x]);
    const y = useTransform(scrollYProgress, range, [startPos.y, endPos.y]);
    const rotate = useTransform(scrollYProgress, range, [startPos.rotate, endPos.rotate]);
    const opacity = useTransform(scrollYProgress, [range[0], range[0] + 0.1], [0, 1]);
    const reached = useTransform(scrollYProgress, [range[1] - 0.05, range[1]], [0, 1]);

    return (
        <motion.div style={{ position: 'absolute', x, y, rotate, opacity, zIndex: 10 }}>
            <DocumentPiece delay={delay} targetReached={reached.get() > 0.5} />
        </motion.div>
    );
}

function Stage({ children, scrollYProgress, range, side = "center" }) {
    const opacity = useTransform(scrollYProgress,
        [range[0] - 0.05, range[0], range[1], range[1] + 0.05],
        [0, 1, 1, 0]
    );
    const y = useTransform(scrollYProgress,
        [range[0] - 0.05, range[0], range[1], range[1] + 0.05],
        [50, 0, 0, -50]
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
                y,
                pointerEvents: 'none'
            }}
        >
            <div style={{ pointerEvents: 'auto' }}>
                {children}
            </div>
        </motion.div>
    );
}
