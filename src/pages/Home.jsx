import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Play, ArrowRight, MessageSquare, FileText, MapPin, Phone, Bell, Box, Hexagon, Circle } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Marquee from '../components/ui/Marquee';
import Badge from '../components/ui/Badge';
import ParallaxSection from '../components/ui/ParallaxSection';
import { GradientText, RevealText } from '../components/ui/AnimatedText';
import { AnimatedGlobe, AnimatedShield, AnimatedChart, AnimatedRocket, AnimatedServer } from '../components/ui/AnimatedIcons';
import { IsometricNode, WaxSeal, DocumentPiece, SecurityRing } from '../components/ui/ThreeDComponents';
import Tilt from '../components/ui/Tilt';

// Decorative 3D-like Floating Element
const Floating3DElement = ({ icon: Icon, color, size, top, left, delay, rotate }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: 1,
            y: [0, -40, 0],
            rotate: rotate ? [0, 360] : 0
        }}
        transition={{
            duration: 8,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
        }}
        style={{
            position: 'absolute',
            top,
            left,
            zIndex: 1,
            color,
            filter: 'blur(1px)'
        }}
    >
        <Icon size={size} strokeWidth={1} />
    </motion.div>
);

// Floating Glass Card Component
const GlassCard = ({ children, x, y, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: y + 20, x: x }}
        animate={{ opacity: 1, y: y, x: x }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        style={{
            position: 'absolute',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            zIndex: 20
        }}
    >
        {children}
    </motion.div>
);

// Mini Market Mesh for Home Page
const MiniMarketMesh = () => {
    const nodes = [
        { x: 0, y: 0, active: true }, { x: 1, y: 0 }, { x: 2, y: 0 },
        { x: 0, y: 1 }, { x: 1, y: 1, active: true }, { x: 2, y: 1 },
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2, active: true },
    ];
    return (
        <div style={{ position: 'relative', height: '400px', perspective: '1000px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div
                animate={{ rotateX: [60, 55, 60], rotateZ: [45, 40, 45] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                style={{ position: 'relative', width: '300px', height: '300px', transformStyle: 'preserve-3d' }}
            >
                {nodes.map((n, i) => (
                    <div key={i} style={{ position: 'absolute', left: `${n.x * 100}px`, top: `${n.y * 100}px` }}>
                        <IsometricNode active={n.active} color="#4F46E5" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default function Home() {
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <div style={{ background: '#0F172A', minHeight: '100vh', overflowX: 'hidden' }}>

            {/* 1. HERO SECTION (Cartage Style) */}
            <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '0', overflow: 'hidden' }}>

                {/* Floating 3D Decorative Decals */}
                <Floating3DElement icon={Hexagon} color="#6366f1" size={120} top="15%" left="5%" delay={0} rotate />
                <Floating3DElement icon={Circle} color="#34d399" size={80} top="60%" left="12%" delay={2} />
                <Floating3DElement icon={Box} color="#f472b6" size={100} top="25%" left="85%" delay={1} rotate />
                <Floating3DElement icon={Hexagon} color="#fbbf24" size={60} top="75%" left="80%" delay={3} />

                {/* Background Image */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(8px) brightness(0.4)',
                    zIndex: 0
                }}></div>

                {/* Content Container */}
                <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            fontWeight: 600,
                            color: 'white',
                            lineHeight: 1.1,
                            marginBottom: '24px',
                            marginTop: '130px',
                            maxWidth: '900px',
                            fontFamily: '"Inter", sans-serif'
                        }}
                    >
                        Meet Wilson—AI for logistics, built for manufacturers and distributors.
                    </motion.h1>

                    {/* Subhead */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', marginBottom: '40px', lineHeight: 1.6 }}
                    >
                        From <span style={{ color: 'white', fontWeight: 500 }}>wilson@yourcompany.com</span>, Wilson manages shipments and keeps stakeholders updated.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ display: 'flex', gap: '16px', marginBottom: '80px' }}
                    >
                        <Button style={{ background: 'white', color: 'black', borderRadius: '100px', padding: '16px 32px', fontSize: '1rem', fontWeight: 600 }}>
                            Hire Wilson <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Button>
                        <Button variant="outline" style={{ borderRadius: '100px', borderColor: 'rgba(255,255,255,0.3)', color: 'white', padding: '16px 32px', fontSize: '1rem' }}>
                            Book a demo
                        </Button>
                    </motion.div>

                    {/* Tablet Mockup Area */}
                    <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', perspective: '1000px' }}>
                        <motion.div
                            style={{
                                y: heroY,
                                rotateX: 20,
                                scale: 0.95,
                                boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5)',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                border: '8px solid #282828',
                                background: '#121212'
                            }}
                        >
                            <img src="https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2000&auto=format&fit=crop" alt="Dashboard" style={{ width: '100%', display: 'block', opacity: 0.9 }} />
                        </motion.div>

                        {/* Floating Glass Cards */}
                        <GlassCard x="-12%" y="20%" delay={0.6}>
                            <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Phone size={20} color="white" /></div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>Sundays</div>
                                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>Incoming call...</div>
                            </div>
                        </GlassCard>

                        <GlassCard x="-15%" y="45%" delay={0.8}>
                            <div style={{ width: 40, height: 40, borderRadius: '12px', background: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FileText size={20} color="white" /></div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>PO's_July.xls</div>
                                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>Processing data</div>
                            </div>
                        </GlassCard>

                        <GlassCard x="85%" y="30%" delay={1.0}>
                            <div style={{ width: 40, height: 40, borderRadius: '12px', background: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><AnimatedRocket size={24} color="white" /></div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>Shipment #402</div>
                                <div style={{ color: '#3B82F6', fontSize: '0.75rem', fontWeight: 600 }}>Out for delivery</div>
                            </div>
                        </GlassCard>
                    </div>
                </div>

                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '200px', background: 'linear-gradient(to bottom, transparent, white)' }}></div>
            </div>

            {/* 2. SECTION: CAPABILITIES GRID */}
            <Section padding="xl" style={{ background: 'white', position: 'relative', paddingTop: '120px', paddingBottom: '80px' }}>
                <div className="container" style={{ position: 'relative', zIndex: 5 }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <Badge style={{ background: '#EEF2FF', color: '#4F46E5', border: 'none', marginBottom: '24px' }}>Capabilities</Badge>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#111827' }}>Everything you need to ship.</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
                        <FeatureCard
                            icon={<AnimatedGlobe size={40} color="white" />}
                            gradient="linear-gradient(135deg, #3B82F6, #8B5CF6)"
                            title="Global Reach"
                            desc="Access markets and data sources across 140+ countries instantly."
                            delay={0}
                        />
                        <FeatureCard
                            icon={<AnimatedShield size={40} color="white" />}
                            gradient="linear-gradient(135deg, #10B981, #3B82F6)"
                            title="Bank-Grade Security"
                            desc="SOC2 Type II certified. Your client data is encrypted and sovereign."
                            delay={0.2}
                        />
                        <FeatureCard
                            icon={<AnimatedChart size={40} color="white" />}
                            gradient="linear-gradient(135deg, #F59E0B, #EF4444)"
                            title="Predictive Growth"
                            desc="AI models that identify churn risk and upsell opportunities before you do."
                            delay={0.4}
                        />
                    </div>
                </div>
            </Section>

            {/* 3. MINI MARKET MESH INTEGRATION (BOXED) */}
            <Section padding="xl" style={{ background: 'white', paddingBottom: '80px' }}>
                <div className="container" style={{
                    background: '#F8FAFC',
                    borderRadius: '48px',
                    padding: '80px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '80px',
                    alignItems: 'center',
                    border: '1px solid #E5E7EB',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <Badge style={{ background: '#EEF2FF', color: '#4F46E5', marginBottom: '24px' }}>Market Reach</Badge>
                        <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#111827', marginBottom: '32px' }}>The Distribution Mesh.</h2>
                        <p style={{ fontSize: '1.2rem', color: '#6B7280', marginBottom: '32px' }}>Wilson is hard-wired into the carrier mesh, pulling appetite data and binding instantly across 500+ markets.</p>
                        <Button variant="outline">Learn About Marketplace</Button>
                    </motion.div>
                    <MiniMarketMesh />
                </div>
            </Section>

            {/* 4. VIDEO SECTION (BOXED OVERLAP) */}
            <Section padding="xl" style={{ background: 'white', paddingBottom: '80px', paddingTop: '60px', zIndex: 20 }}>
                <div className="container" style={{ position: 'relative', height: '640px' }}>
                    <div style={{ background: 'linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 100%)', padding: '120px 80px', height: '80%', position: 'relative', borderRadius: '48px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)' }}>
                        <div className="container">
                            <div style={{ maxWidth: '500px' }}>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1F2937', marginBottom: '16px' }}>See Wilson in Action</h2>
                                <p style={{ fontSize: '1.1rem', color: '#4B5563' }}>Watch how our AI handles real-world logistics challenges in seconds.</p>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{
                            position: 'absolute', bottom: '-80px', left: '30%', width: '65%', maxWidth: '900px', zIndex: 30,
                            borderRadius: '32px', overflow: 'hidden', boxShadow: '0 40px 80px -15px rgba(0, 0, 0, 0.3)', border: '12px solid white'
                        }}
                    >
                        <div style={{ position: 'relative', paddingBottom: '56.25%', background: '#000' }}>
                            <iframe
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&modestbranding=1"
                                title="Product Demo" frameBorder="0" allowFullScreen
                            />
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* 6. CLOSING PUZZLE INTEGRATION (BOXED) */}
            <Section padding="xl" style={{ background: 'white', paddingTop: '120px', paddingBottom: '80px', position: 'relative', zIndex: 5 }}>
                <div className="container" style={{
                    background: '#FAF5FF',
                    borderRadius: '48px',
                    padding: '80px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '80px',
                    alignItems: 'center',
                    border: '1px solid #E5E7EB',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.05)'
                }}>
                    <div style={{ position: 'relative', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            style={{ position: 'relative' }}
                        >
                            <WaxSeal active={true} />
                            <motion.div
                                animate={{ x: [-100, 0], y: [-50, 0], opacity: [0, 1] }}
                                transition={{ duration: 1, delay: 0.5 }}
                                style={{ position: 'absolute', top: -100, left: -100 }}
                            >
                                <DocumentPiece />
                            </motion.div>
                        </motion.div>
                    </div>
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <Badge style={{ background: '#FEF3C7', color: '#D97706', marginBottom: '24px' }}>Closure</Badge>
                        <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#111827', marginBottom: '32px' }}>Instant Binding.</h2>
                        <p style={{ fontSize: '1.2rem', color: '#6B7280', marginBottom: '32px' }}>Wilson automates signatures, filings, and issuance in seconds.</p>
                        <Button style={{ background: '#111827', color: 'white' }}>See the Workflow</Button>
                    </motion.div>
                </div>
            </Section>

            {/* 7. TEAM FOCUS */}
            <ParallaxSection image="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000&auto=format&fit=crop" height="80vh" overlayColor="rgba(161, 164, 171, 0.7)">
                <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: 'white' }}>
                    <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 800, marginBottom: '24px', lineHeight: 1.1 }}>
                        Built by <span style={{ color: '#F472B6' }}>Experts.</span> <br /> Trained by <span style={{ color: '#34D399' }}>Data.</span>
                    </h2>
                    <Button style={{ background: 'white', color: '#111827', fontWeight: 700, padding: '16px 40px' }} size="lg">Verify the Team</Button>
                </div>
            </ParallaxSection>

            {/* NEW SECTION: MERGED AUTONOMOUS + WORKFLOW */}
            <div style={{ position: 'relative', minHeight: '100vh', padding: '160px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(213, 141, 141, 0.06)' }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 10, color: 'white' }}>

                    {/* Hero Text */}
                    <div style={{ textAlign: 'left', marginBottom: '100px' }}>
                        <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
                            The Future is <br />
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
                                <AnimatedStrokeText text="AUT" />
                                <AnimatedO />
                                <AnimatedStrokeText text="NOMOUS" />
                            </div>
                            <br />
                            Distribution.
                        </h2>
                        <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 0 40px 0', opacity: 0.9 }}>
                            Stop relying on manual placement. Let the mesh handle the heavy lifting.
                        </p>
                        <Button size="lg" style={{ background: 'white', color: 'black' }}>Join the Revolution</Button>
                    </div>

                    {/* Feature Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
                        {/* Column 1 */}
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', marginBottom: '32px' }}>Smart Placement</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <WorkflowItem text="Instant appetite matching" color="white" />
                                <WorkflowItem text="Direct carrier API quoting" color="white" />
                                <WorkflowItem text="Multi-market submission" color="white" />
                                <WorkflowItem text="Comparative rating view" color="white" />
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', marginBottom: '32px' }}>Automated Ops</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <WorkflowItem text="Auto-generated proposals" color="white" />
                                <WorkflowItem text="One-click binding" color="white" />
                                <WorkflowItem text="Policy checking logic" color="white" />
                                <WorkflowItem text="Renewal reminders" color="white" />
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white', marginBottom: '32px' }}>Live Updates</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <WorkflowItem text="Real-time status tracking" color="white" />
                                <WorkflowItem text="Underwriter comms log" color="white" />
                                <WorkflowItem text="Client notification sync" color="white" />
                                <WorkflowItem text="Commission reconciliation" color="white" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* NEW SECTION: WILSON COORDINATES */}
            <Section padding="xl" style={{ background: 'white', paddingTop: '160px', paddingBottom: '160px' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 500,
                        lineHeight: 1.1,
                        color: '#111827',
                        letterSpacing: '-0.02em'
                    }}>
                        Wilson <span style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 12px' }}>
                            <motion.div
                                animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Box size={64} strokeWidth={1} />
                            </motion.div>
                        </span> coordinates shipments from purchase to delivery with the consistency you'd expect from your best hire.
                    </h2>
                    <div style={{ marginTop: '60px', display: 'flex', gap: '8px', fontSize: '0.9rem', color: '#6B7280', fontWeight: 500 }}>
                        <span>Monitored by Cartage.</span>
                        <span>Trained by your team.</span>
                        <span>Smarter with every move.</span>
                    </div>
                </div>
            </Section>

            {/* 8. TRUST / STATS */}
            <Section padding="xl" style={{ background: 'white', paddingTop: '120px', paddingBottom: '80px' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', textAlign: 'center' }}>
                        <div><div style={{ fontSize: '4rem', fontWeight: 800, color: '#4F46E5' }}>10k+</div><div style={{ color: '#6B7280' }}>Active Shipments</div></div>
                        <div><div style={{ fontSize: '4rem', fontWeight: 800, color: '#10B981' }}>99%</div><div style={{ color: '#6B7280' }}>On-Time Delivery</div></div>
                        <div><div style={{ fontSize: '4rem', fontWeight: 800, color: '#F59E0B' }}>$2B+</div><div style={{ color: '#6B7280' }}>Cargo Value Protected</div></div>
                    </div>
                    <div style={{ marginTop: '60px', borderTop: '1px solid #F3F4F6', paddingTop: '60px' }}>
                        <p style={{ textAlign: 'center', color: '#9CA3AF', marginBottom: '40px', fontWeight: 600 }}>TRUSTED BY INDUSTRY LEADERS</p>
                        <Marquee speed={15}>
                            {['Acme Logistics', 'Global Freight', 'PortAuthority', 'TransOcean', 'CargoFast', 'SwiftMove', 'TrackIt', 'ShipSimple'].map((logo, i) => (
                                <span key={i} style={{ fontSize: '1.75rem', fontWeight: 900, color: '#000', opacity: 0.2, margin: '0 50px', filter: 'grayscale(1)', textTransform: 'uppercase' }}>{logo}</span>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </Section>

            {/* 9. TESTIMONIAL UI SPLIT (BOXED) */}
            <Section padding="xl" style={{ background: 'white', paddingBottom: '80px' }}>
                <div className="container" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.2fr',
                    minHeight: '600px',
                    borderRadius: '48px',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #E5E7EB',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    <div style={{ padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#F8FAFC' }}>
                        <div style={{ fontSize: '1.5rem', fontStyle: 'italic', color: '#1F2937', marginBottom: '40px' }}>
                            "Before we had Wilson, managing carrier relationships was a full-time job. Now, our operations run smoothly."
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                            <div style={{ width: 60, height: 60, borderRadius: '50%', background: '#4F46E5', overflow: 'hidden' }}>
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" alt="CEO" />
                            </div>
                            <div><div style={{ fontWeight: 700 }}>David Chen</div><div style={{ color: '#6B7280' }}>CEO at LogisticsGlobal</div></div>
                        </div>
                    </div>
                    <div style={{ position: 'relative', overflow: 'hidden', background: '#0F172A' }}>
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" alt="Dashboard Analytics" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                    </div>
                </div>
            </Section>

            {/* 10. FINAL CTA with VAULT BG */}
            <ParallaxSection image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" height="70vh" overlayColor="rgba(109, 122, 152, 0.9)">
                <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SecurityRing size={800} color="#10B981" />
                </div>
                <div className="container" style={{ textAlign: 'center', color: 'white', position: 'relative', zIndex: 10 }}>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '32px' }}>Ready to ship faster?</h2>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                        <Button style={{ background: '#669f8cff', color: 'black', border: 'none' }} size="lg">Start Free Trial</Button>
                        <Button variant="outline" style={{ borderColor: 'white', color: 'white' }} size="lg">Contact Sales</Button>
                    </div>
                </div>
            </ParallaxSection>
        </div>
    );
}

function FeatureCard({ icon, title, desc, gradient, delay }) {
    return (
        <Tilt intensity={15} style={{ display: 'block' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay }}
                style={{
                    background: 'white', padding: '48px 40px', borderRadius: '32px', border: '1px solid #F3F4F6',
                    boxShadow: '0 20px 40px -4px rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden', transformStyle: 'preserve-3d'
                }}
            >
                <div style={{
                    width: '72px', height: '72px', borderRadius: '20px', background: gradient,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px',
                    boxShadow: '0 12px 24px -4px rgba(0,0,0,0.15)', transform: 'translateZ(40px)'
                }}>
                    {icon}
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '16px', color: '#111827', transform: 'translateZ(30px)' }}>{title}</h3>
                <p style={{ fontSize: '1.125rem', color: '#6B7280', lineHeight: 1.6, transform: 'translateZ(20px)' }}>{desc}</p>
            </motion.div>
        </Tilt>
    );
}

function AnimatedStrokeText({ text }) {
    const letters = text.split("");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{ display: "flex", overflow: "hidden", display: 'inline-flex' }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    style={{
                        fontSize: 'inherit',
                        fontWeight: 'inherit',
                        color: 'transparent',
                        WebkitTextStroke: '2px #fff',
                        textShadow: '0 0 20px rgba(255,255,255,0.5)'
                    }}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.div>
    );
}

function AnimatedO() {
    return (
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '0.8em', height: '0.8em', position: 'relative', top: '0.1em' }}>
            {/* Outer Ring */}
            <motion.span
                style={{
                    position: 'absolute', inset: 0, border: '6px solid white', borderRadius: '50%',
                    borderRightColor: 'transparent', borderBottomColor: 'transparent'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner Ring */}
            <motion.span
                style={{
                    position: 'absolute', inset: '25%', border: '4px solid white', borderRadius: '50%',
                    opacity: 0.6
                }}
                animate={{ scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
        </span>
    );
}

function WorkflowItem({ text, color = '#4B5563' }) {
    return (
        <li style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.125rem', color: color }}>
            <div style={{ color: color === 'white' ? '#818CF8' : '#4F46E5', display: 'flex', alignItems: 'center' }}>
                <ArrowRight size={20} />
            </div>
            {text}
        </li>
    );
}
