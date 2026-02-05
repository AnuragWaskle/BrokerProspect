import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MousePointer2, Cpu, Zap, ArrowRight, ShieldCheck, FileCheck, Layers, Repeat } from 'lucide-react';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import { NeuralNode, DocumentScanner, GlassBlade, SuccessTrophy } from '../../components/ui/ThreeDComponents';

export default function Review() {
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

    // Background transition (Subtle color shifts)
    const background = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        ['#FFFFFF', '#F8FAFC', '#FFFFFF']
    );

    return (
        <motion.div ref={containerRef} style={{ background, minHeight: '400vh', position: 'relative' }}>

            {/* 1. IMMERSIVE STICKY STAGE */}
            <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', overflow: 'hidden' }}>

                {/* Background Decor */}
                <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(#10B981 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                {/* Central 3D Focus (Neural Node) */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                    <NeuralCenter scrollYProgress={scrollYProgress} />
                </div>

                {/* Content Layers */}
                <div className="container" style={{ position: 'relative', height: '100%', zIndex: 10 }}>

                    {/* Stage 0: Hero */}
                    <Stage scrollYProgress={scrollYProgress} range={[0, 0.15]}>
                        <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
                            <Badge style={{ background: '#10B981', color: 'white', border: 'none', marginBottom: 24 }}>Precision Hub</Badge>
                            <h1 style={{ fontSize: 'clamp(4rem, 10vw, 7rem)', fontWeight: 900, lineHeight: 0.85, color: '#111827', marginBottom: 32 }}>
                                REVIEW <br /> <span style={{ color: '#059669' }}>REDEFINED.</span>
                            </h1>
                            <p style={{ fontSize: '1.5rem', color: '#4B5563', maxWidth: 600, margin: '0 auto 48px' }}>
                                Your LLM-powered engine for instant insurance policy clarity and gap analysis.
                            </p>
                            <Button size="xl" style={{ padding: '24px 64px' }}>Analyze Now</Button>
                        </div>
                    </Stage>

                    {/* Stage 1: Ingestion */}
                    <Stage scrollYProgress={scrollYProgress} range={[0.2, 0.45]} side="left">
                        <GlassBlade
                            badge="Phase 01: Ingestion"
                            title="Multi-Format OCR"
                            description="Upload PDFs, scans, or photos. Our system extracts every clause, table, and endorsement with perfect fidelity."
                            color="#10B981"
                        >
                            <div style={{ display: 'flex', gap: 16 }}>
                                <Badge variant="outline"><FileCheck size={14} style={{ marginRight: 6 }} /> PDF</Badge>
                                <Badge variant="outline"><Layers size={14} style={{ marginRight: 6 }} /> Image</Badge>
                            </div>
                        </GlassBlade>
                    </Stage>

                    {/* Stage 2: Analysis */}
                    <Stage scrollYProgress={scrollYProgress} range={[0.5, 0.75]} side="right">
                        <GlassBlade
                            badge="Phase 02: Analysis"
                            title="Contextual LLM"
                            description="Wilson understands the nuances of insurance language, identifying gaps and exclusions that humans miss."
                            color="#4F46E5"
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <Cpu size={24} color="#4F46E5" />
                                <span style={{ fontWeight: 700, color: '#4F46E5' }}>99.8% CERTAINTY</span>
                            </div>
                        </GlassBlade>
                    </Stage>

                    {/* Stage 3: Verification */}
                    <Stage scrollYProgress={scrollYProgress} range={[0.8, 1]} side="center">
                        <div style={{ textAlign: 'center' }}>
                            <Badge style={{ background: '#F59E0B', color: 'white', border: 'none', marginBottom: 24 }}>Success</Badge>
                            <h2 style={{ fontSize: '4rem', fontWeight: 900, color: '#111827', marginBottom: 24 }}>100% Verified.</h2>
                            <p style={{ fontSize: '1.25rem', color: '#4B5563', marginBottom: 48, maxWidth: 500, margin: '0 auto 48px' }}>
                                Your analysis is ready. Download the report or push directly to your AMS.
                            </p>
                            <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                                <Button size="lg">Download Report</Button>
                                <Button size="lg" variant="outline">Email Insured</Button>
                            </div>
                        </div>
                    </Stage>

                </div>

                {/* Vertical Scroll Progress Bar (Right Side) */}
                <ProgressBar scrollYProgress={scrollYProgress} />
            </div>

            {/* Spacer sections to drive the scroll */}
            <div style={{ height: '100vh' }} />
            <div style={{ height: '100vh' }} />
            <div style={{ height: '100vh' }} />
            <div style={{ height: '100vh' }} />
        </motion.div>
    );
}

// Central 3D Visual Controller
function NeuralCenter({ scrollYProgress }) {
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1.2]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.15, 0.8, 1], [0.8, 1, 0.4, 0.4, 1]); // Fade when stages are active

    return (
        <motion.div style={{ scale, rotateZ: rotate, opacity }}>
            <NeuralNode size={450} />
        </motion.div>
    );
}

// Stage Component
function Stage({ children, scrollYProgress, range, side = "center" }) {
    const opacity = useTransform(scrollYProgress,
        [range[0] - 0.05, range[0], range[1], range[1] + 0.05],
        [0, 1, 1, 0]
    );
    const x = useTransform(scrollYProgress,
        [range[0] - 0.05, range[0], range[1], range[1] + 0.05],
        [side === 'left' ? -100 : side === 'right' ? 100 : 0, 0, 0, side === 'left' ? -100 : side === 'right' ? 100 : 0]
    );
    const y = useTransform(scrollYProgress,
        [range[0] - 0.05, range[0], range[1], range[1] + 0.05],
        [20, 0, 0, -20]
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
                x,
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

function ProgressBar({ scrollYProgress }) {
    return (
        <div style={{ position: 'absolute', right: 40, top: '50%', transform: 'translateY(-50%)', height: 200, width: 4, background: '#F1F5F9', borderRadius: 2 }}>
            <motion.div
                style={{
                    width: '100%',
                    height: '100%',
                    background: '#10B981',
                    borderRadius: 2,
                    scaleY: scrollYProgress,
                    originY: 0
                }}
            />
            {[1, 2, 3, 4].map(i => (
                <div key={i} style={{ position: 'absolute', top: `${(i - 1) * 33.3}%`, right: -6, width: 12, height: 12, borderRadius: '50%', background: 'white', border: '2px solid #10B981', zIndex: 10 }} />
            ))}
        </div>
    );
}
