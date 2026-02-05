import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Search, Database, UserCheck, Phone, Mail, ArrowRight, Target, Filter, Zap, CheckCircle2, Star, TrendingUp, ShieldCheck } from 'lucide-react';
import Button from '../../components/ui/Button';
import Section from '../../components/ui/Section';
import Badge from '../../components/ui/Badge';
import Tilt from '../../components/ui/Tilt';
import { ThreeDGlobe, LeadBlock } from '../../components/ui/ThreeDComponents';

// --- Custom 3D Elements for Prospect ---

// 3D Radar Wave
const RadarWave = () => (
    <div style={{ position: 'relative', width: 300, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {[0, 1, 2].map((i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0.5, scale: 0 }}
                animate={{ opacity: 0, scale: 2 }}
                transition={{ duration: 3, delay: i, repeat: Infinity, ease: "easeOut" }}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    border: '2px solid #4F46E5',
                    borderRadius: '50%',
                }}
            />
        ))}
        <motion.div
            style={{ zIndex: 10, background: 'white', padding: 20, borderRadius: '50%', boxShadow: '0 0 30px rgba(79, 70, 229, 0.3)' }}
        >
            <Database size={40} color="#4F46E5" />
        </motion.div>
    </div>
);

// 3D Performance Gauge
const PerformanceGauge = ({ value = 85 }) => (
    <div style={{ position: 'relative', width: 200, height: 200, perspective: '1000px' }}>
        <svg width="200" height="200" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
            <circle cx="50" cy="50" r="45" fill="none" stroke="#E5E7EB" strokeWidth="10" />
            <motion.circle
                cx="50" cy="50" r="45" fill="none" stroke="#10B981" strokeWidth="10"
                strokeDasharray="283"
                initial={{ strokeDashoffset: 283 }}
                whileInView={{ strokeDashoffset: 283 - (283 * value) / 100 }}
                transition={{ duration: 2, ease: "easeOut" }}
            />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 800, color: '#111827' }}>{value}%</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Match Rate</span>
        </div>
    </div>
);

export default function Prospect() {
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

    const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

    return (
        <div style={{ background: '#F8FAFC' }}>

            {/* 1. COVER HERO SECTION WITH OVERLAP */}
            <div style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop)',
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    zIndex: 0
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', zIndex: 1 }} />

                <motion.div
                    style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: 'white', opacity: heroOpacity, scale: heroScale }}
                    className="container"
                >
                    <Badge style={{ background: 'rgba(255,255,255,0.2)', color: 'white', border: 'none', marginBottom: 24 }}>Module 01: Prospect</Badge>
                    <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 0.9, marginBottom: 32, letterSpacing: '-0.02em' }}>
                        THE <span style={{ color: '#818CF8' }}>HUNT</span> <br /> IS OVER.
                    </h1>
                    <p style={{ fontSize: '1.5rem', opacity: 0.9, maxWidth: 600, margin: '0 auto 40px' }}>
                        Wilson identifies your most profitable leads before they even know they need you.
                    </p>
                    <Button size="xl" style={{ background: 'white', color: 'black', padding: '20px 48px', borderRadius: 100 }}>
                        Activate Scout <ArrowRight style={{ marginLeft: 8 }} />
                    </Button>
                </motion.div>

                {/* Overlapping Content Start Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{ position: 'absolute', bottom: 40, left: '50%', x: '-50%', zIndex: 10, color: 'white' }}
                >
                    <div style={{ width: 2, height: 60, background: 'linear-gradient(to bottom, white, transparent)' }} />
                </motion.div>
            </div>

            {/* 2. SPLIT-SCREEN INTERACTIVE SECTION */}
            <div ref={containerRef} style={{ display: 'flex', minHeight: '400vh', position: 'relative' }}>
                {/* Left Side: Sticky Content */}
                <div style={{ width: '50%', position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', padding: '0 8%' }}>
                    <div style={{ maxWidth: 500, width: '100%' }}>
                        <SceneContent scrollYProgress={scrollYProgress} />
                    </div>
                </div>

                {/* Right Side: Scrolling 3D Visuals */}
                <div style={{ width: '50%', position: 'relative' }}>
                    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'sticky', top: 0 }}>
                        <SceneVisuals scrollYProgress={scrollYProgress} />
                    </div>
                    {/* Spacer divs to drive scroll */}
                    <div style={{ height: '100vh' }} />
                    <div style={{ height: '100vh' }} />
                    <div style={{ height: '100vh' }} />
                    <div style={{ height: '100vh' }} />
                </div>
            </div>

            {/* 3. FINAL CTA */}
            <Section padding="xl" style={{ background: 'white', paddingTop: '180px', paddingBottom: '160px' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ display: 'inline-flex', gap: 12, marginBottom: 32 }}>
                        {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="#F59E0B" color="#F59E0B" />)}
                    </div>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: 24 }}>Ready to out-prospect everyone?</h2>
                    <p style={{ fontSize: '1.25rem', color: '#6B7280', marginBottom: 48, maxWidth: 600, margin: '0 auto 48px' }}>
                        Start your 14-day trial of the Prospecting module and see the difference AI intelligence makes.
                    </p>
                    <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                        <Button size="lg">Get Started Free</Button>
                        <Button variant="outline" size="lg">Contact Sales</Button>
                    </div>
                </div>
            </Section>
        </div>
    );
}

// Scene Content Controller
function SceneContent({ scrollYProgress }) {
    return (
        <div style={{ position: 'relative', height: '300px' }}>
            <Step
                scrollYProgress={scrollYProgress}
                range={[0.1, 0.3]}
                title="Global Market Scan"
                badge="Step 01"
                badgeColor="blue"
                description="Wilson scans over 100 million corporate databases, social signals, and public records to build a 360° view of the market."
            />
            <Step
                scrollYProgress={scrollYProgress}
                range={[0.4, 0.6]}
                title="AI Lead Scoring"
                badge="Step 02"
                badgeColor="purple"
                description="Every business is assigned a 'Propensity Score' based on their current carrier, revenue growth, and historical risk profile."
            />
            <Step
                scrollYProgress={scrollYProgress}
                range={[0.7, 0.9]}
                title="Verified Contact Info"
                badge="Step 03"
                badgeColor="emerald"
                description="Once a high-intent lead is found, Wilson unlocks verified direct-dials and emails for C-suite decision makers."
            />
        </div>
    );
}

// Scene Visuals Controller
function SceneVisuals({ scrollYProgress }) {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Visual 1: Globe */}
            <VisualStep scrollYProgress={scrollYProgress} range={[0.1, 0.35]}>
                <ThreeDGlobe size={350} />
                <div style={{ position: 'absolute', top: '10%', left: '10%' }}>
                    <LeadBlock delay={0} color="#818CF8" />
                </div>
                <div style={{ position: 'absolute', bottom: '20%', right: '15%' }}>
                    <LeadBlock delay={1} color="#C084FC" />
                </div>
            </VisualStep>

            {/* Visual 2: Radar & Gauge */}
            <VisualStep scrollYProgress={scrollYProgress} range={[0.35, 0.65]}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 60 }}>
                    <RadarWave />
                    <PerformanceGauge value={98} />
                </div>
            </VisualStep>

            {/* Visual 3: Tilt Cards */}
            <VisualStep scrollYProgress={scrollYProgress} range={[0.65, 0.95]}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    <Tilt intensity={20}>
                        <div style={{ background: 'white', padding: 24, borderRadius: 20, boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: 16, width: 400 }}>
                            <div style={{ width: 50, height: 50, borderRadius: '50%', background: '#F3F4F6' }} />
                            <div>
                                <h4 style={{ fontWeight: 700 }}>Sarah Jenkins</h4>
                                <p style={{ fontSize: '0.85rem', color: '#6B7280' }}>CEO, Global Logistics Corp</p>
                            </div>
                            <div style={{ marginLeft: 'auto', color: '#10B981' }}><Phone size={20} /></div>
                        </div>
                    </Tilt>
                    <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                        <Tilt intensity={20}>
                            <div style={{ background: 'white', padding: 24, borderRadius: 20, boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: 16, width: 400 }}>
                                <div style={{ width: 50, height: 50, borderRadius: '50%', background: '#F3F4F6' }} />
                                <div>
                                    <h4 style={{ fontWeight: 700 }}>Michael Chen</h4>
                                    <p style={{ fontSize: '0.85rem', color: '#6B7280' }}>Risk Manager, TechSupply</p>
                                </div>
                                <div style={{ marginLeft: 'auto', color: '#10B981' }}><Mail size={20} /></div>
                            </div>
                        </Tilt>
                    </motion.div>
                </div>
            </VisualStep>
        </div>
    );
}

// Helpers
function Step({ scrollYProgress, range, title, description, badge, badgeColor }) {
    const opacity = useTransform(scrollYProgress,
        [range[0] - 0.05, range[0], range[1], range[1] + 0.05],
        [0, 1, 1, 0]
    );
    const y = useTransform(scrollYProgress,
        [range[0] - 0.05, range[0], range[1], range[1] + 0.05],
        [20, 0, 0, -20]
    );

    return (
        <motion.div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                opacity,
                y,
                pointerEvents: 'none'
            }}
        >
            <div style={{ pointerEvents: 'auto' }}>
                <Badge color={badgeColor}>{badge}</Badge>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, margin: '16px 0 24px', lineHeight: 1.1, color: '#111827' }}>{title}</h2>
                <p style={{ fontSize: '1.125rem', color: '#4B5563', lineHeight: 1.6 }}>{description}</p>
            </div>
        </motion.div>
    );
}

function VisualStep({ children, scrollYProgress, range }) {
    const opacity = useTransform(scrollYProgress,
        [range[0] - 0.05, range[0], range[1], range[1] + 0.05],
        [0, 1, 1, 0]
    );
    const scale = useTransform(scrollYProgress,
        [range[0] - 0.05, range[0], range[1], range[1] + 0.05],
        [0.8, 1, 1, 0.8]
    );

    return (
        <motion.div
            style={{
                position: 'absolute',
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
