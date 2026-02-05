import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Cpu, Zap, ArrowRight, Layers, Database, Share2, Terminal, MessageSquare } from 'lucide-react';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import { GlassBlade } from '../../components/ui/ThreeDComponents';

export default function Integrations() {
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

    // Integrated Drone Camera Movement
    const cameraX = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], ['0%', '-30%', '30%', '0%']);
    const cameraY = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], ['0%', '-20%', '30%', '0%']);
    const cameraRotateX = useTransform(scrollYProgress, [0, 1], [40, 60]);
    const cameraScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1.2]);

    return (
        <div ref={containerRef} style={{ background: '#F8FAFC', minHeight: '400vh', position: 'relative', overflow: 'hidden' }}>

            {/* 1. INFINITE GRID STAGE */}
            <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', perspective: '1200px', overflow: 'hidden' }}>

                {/* Background Grid */}
                <motion.div
                    style={{
                        position: 'absolute', inset: '-100%',
                        backgroundImage: 'radial-gradient(circle, #4F46E5 1px, transparent 1px)',
                        backgroundSize: '100px 100px',
                        x: cameraX, y: cameraY,
                        rotateX: cameraRotateX,
                        scale: cameraScale,
                        transformStyle: 'preserve-3d',
                        opacity: 0.2
                    }}
                />

                {/* Floating Tool Clusters */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 }}>
                    <motion.div style={{ x: cameraX, y: cameraY, rotateX: cameraRotateX, scale: cameraScale, transformStyle: 'preserve-3d' }}>
                        <IntegrationClusters scrollYProgress={scrollYProgress} />
                    </motion.div>
                </div>

                {/* Content Layers */}
                <div className="container" style={{ position: 'relative', height: '100%', zIndex: 10, pointerEvents: 'none' }}>

                    {/* Stage 0: Hero */}
                    <Stage scrollYProgress={scrollYProgress} range={[0, 0.15]}>
                        <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto', pointerEvents: 'auto' }}>
                            <Badge style={{ background: '#4F46E5', color: 'white', border: 'none', marginBottom: 24 }}>Module 05: Integrations</Badge>
                            <h1 style={{ fontSize: 'clamp(4rem, 10vw, 7rem)', fontWeight: 900, lineHeight: 0.85, color: '#111827', marginBottom: 32 }}>
                                UNIFIED <br /> <span style={{ color: '#4F46E5' }}>SYNERGY.</span>
                            </h1>
                            <p style={{ fontSize: '1.5rem', color: '#4B5563', maxWidth: 600, margin: '0 auto 48px' }}>
                                Your entire insurance stack, connected through a single neural API.
                            </p>
                            <Button size="xl">Explore Registry</Button>
                        </div>
                    </Stage>

                    {/* Stage 1: CRM */}
                    <Stage scrollYProgress={scrollYProgress} range={[0.25, 0.45]} side="right">
                        <GlassBlade
                            badge="Agency Systems"
                            title="AMS & CRM"
                            description="Real-time sync with Salesforce, Applied Epic, and Vertafore. No more manual data entry or duplicate leads."
                            color="#4F46E5"
                        >
                            <div style={{ display: 'flex', gap: 12 }}>
                                <Badge variant="outline">Salesforce</Badge>
                                <Badge variant="outline">Applied Epic</Badge>
                                <Badge variant="outline">HubSpot</Badge>
                            </div>
                        </GlassBlade>
                    </Stage>

                    {/* Stage 2: Data */}
                    <Stage scrollYProgress={scrollYProgress} range={[0.55, 0.75]} side="left">
                        <GlassBlade
                            badge="Data Intelligence"
                            title="Third-Party Data"
                            description="Automatically pull credit reports, property data, and vehicle history into every submission."
                            color="#10B981"
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                <Database size={24} color="#10B981" />
                                <span style={{ fontWeight: 700, color: '#10B981' }}>DATA-READY API</span>
                            </div>
                        </GlassBlade>
                    </Stage>

                    {/* Stage 3: Communication */}
                    <Stage scrollYProgress={scrollYProgress} range={[0.85, 1]} side="center">
                        <div style={{ textAlign: 'center', pointerEvents: 'auto' }}>
                            <Badge style={{ background: '#10B981', color: 'white', border: 'none', marginBottom: 24 }}>Omnichannel</Badge>
                            <h2 style={{ fontSize: '4rem', fontWeight: 900, color: '#111827', marginBottom: 24 }}>Always Syncing.</h2>
                            <p style={{ fontSize: '1.25rem', color: '#4B5563', marginBottom: 48, maxWidth: 500, margin: '0 auto 48px' }}>
                                Connect to Slack, Microsoft Teams, or WhatsApp to keep your team informed in real-time.
                            </p>
                            <Button size="lg" icon={<ArrowRight />}>Enable Webhooks</Button>
                        </div>
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

function IntegrationClusters({ scrollYProgress }) {
    // Clusters of tool icons
    const clusters = [
        { icon: <Database />, color: '#4F46E5', pos: { x: -400, y: -200 } },
        { icon: <MessageSquare />, color: '#10B981', pos: { x: 400, y: 150 } },
        { icon: <Terminal />, color: '#F59E0B', pos: { x: -200, y: 400 } },
        { icon: <Layers />, color: '#EF4444', pos: { x: 300, y: -350 } },
        { icon: <Share2 />, color: '#818CF8', pos: { x: 0, y: 0 } },
    ];

    return (
        <div style={{ position: 'relative', width: 1200, height: 800 }}>
            {clusters.map((c, i) => (
                <ToolIcon key={i} cluster={c} scrollYProgress={scrollYProgress} index={i} />
            ))}
        </div>
    );
}

function ToolIcon({ cluster, scrollYProgress, index }) {
    // Icons float and react to scroll
    const yOffset = useTransform(scrollYProgress, [0, 1], [0, (index % 2 === 0 ? 100 : -100)]);

    return (
        <motion.div
            style={{
                position: 'absolute',
                left: `calc(50% + ${cluster.pos.x}px)`,
                top: `calc(50% + ${cluster.pos.y}px)`,
                x: '-50%', y: yOffset,
                width: 120, height: 120,
                background: 'white',
                borderRadius: 24,
                boxShadow: `0 20px 40px ${cluster.color}22`,
                border: `1px solid ${cluster.color}44`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transformStyle: 'preserve-3d'
            }}
            whileHover={{ translateZ: 50, scale: 1.1 }}
        >
            <div style={{ color: cluster.color, transform: 'scale(2.5)' }}>
                {cluster.icon}
            </div>
        </motion.div>
    );
}

function Stage({ children, scrollYProgress, range, side = "center" }) {
    const opacity = useTransform(scrollYProgress,
        [range[0] - 0.05, range[0], range[1], range[1] + 0.05],
        [0, 1, 1, 0]
    );
    const scale = useTransform(scrollYProgress,
        [range[0] - 0.05, range[0], range[1], range[1] + 0.05],
        [0.9, 1, 1, 0.9]
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
                scale,
                pointerEvents: 'none'
            }}
        >
            <div style={{ pointerEvents: 'auto' }}>
                {children}
            </div>
        </motion.div>
    );
}
