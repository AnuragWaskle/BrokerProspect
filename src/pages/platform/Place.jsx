import { motion } from 'framer-motion';
import { FileText, Zap, Target, TrendingUp, ArrowRight, Play, CheckCircle, Building2, Users, Shield } from 'lucide-react';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import FloatingCard from '../../components/ui/FloatingCard';
import ParticleBackground from '../../components/ui/ParticleBackground';
import Floating3DShape, { ScrollReveal3D, Parallax3DElement } from '../../components/ui/3DAnimations';
import AnimatedBlob, { PulsingOrb } from '../../components/ui/AnimatedBlob';
import styles from '../../styles/responsive.module.css';

export default function Place() {
    return (
        <div style={{ background: '#FFFFFF', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

            {/* HERO SECTION - Chatbase Style */}
            <Section padding="lg" style={{ position: 'relative', overflow: 'hidden', paddingTop: '140px', background: 'white' }}>
                <Floating3DShape shape="circle" size={160} top="8%" left="3%" delay={0} opacity={0.1} />
                <Floating3DShape shape="rounded" size={110} top="65%" right="5%" delay={1.8} opacity={0.12} color="linear-gradient(135deg, #FF8C42 0%, #FF4D6D 100%)" />
                <AnimatedBlob size={320} top="-12%" right="-8%" opacity={0.07} />
                <PulsingOrb size={90} bottom="15%" left="8%" delay={2.2} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className={styles.heroGrid}>
                        {/* Left: Text Content */}
                        <ScrollReveal3D direction="left">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FF6B35', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>
                                    AI-Powered Placement
                                </div>
                                <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, color: '#1A1A1A', marginBottom: '24px' }}>
                                    Build Submissions That Win. <br />
                                    In Minutes, Not Days.
                                </h1>
                                <p style={{ fontSize: '1.25rem', color: '#6B7280', lineHeight: 1.6, marginBottom: '40px', maxWidth: '520px' }}>
                                    Pre-fill applications, write business narratives, and match risks to carriers—automatically.
                                </p>
                                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                    <Button size="xl" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF4D6D 100%)', color: 'white', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: 'none' }}>
                                        Get Started
                                    </Button>
                                    <Button size="xl" style={{ background: 'white', color: '#FF6B35', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: '2px solid #FF6B35' }}>
                                        <Play size={20} style={{ marginRight: '8px' }} /> Watch Demo
                                    </Button>
                                </div>
                            </motion.div>
                        </ScrollReveal3D>

                        {/* Right: Animated Floating Card with 3D Elements */}
                        <Parallax3DElement speed={-0.4}>
                            <div style={{ position: 'relative' }}>
                                <FloatingCard delay={0.3}>
                                    <div style={{
                                        background: 'white',
                                        borderRadius: '24px',
                                        padding: '32px',
                                        boxShadow: '0 20px 60px rgba(255, 107, 53, 0.15)',
                                        border: '2px solid rgba(255, 107, 53, 0.1)',
                                        position: 'relative'
                                    }}>
                                        {/* Gradient accent bar */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '6px',
                                            background: 'linear-gradient(90deg, #FF6B35 0%, #FF4D6D 100%)',
                                            borderRadius: '24px 24px 0 0'
                                        }} />

                                        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#FF6B35', marginBottom: '16px' }}>Submission Builder</div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '24px' }}>
                                            "Create submission for Tech Startup"
                                        </div>

                                        {/* Animated Progress Steps */}
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                            {[
                                                { step: 'Application Pre-Fill', icon: <FileText size={18} />, status: 'Complete', delay: 0.8 },
                                                { step: 'Business Narrative', icon: <Zap size={18} />, status: 'Complete', delay: 1.0 },
                                                { step: 'Carrier Matching', icon: <Target size={18} />, status: 'In Progress', delay: 1.2 }
                                            ].map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.4, delay: item.delay }}
                                                    style={{
                                                        background: item.status === 'Complete' ? '#F0FDF4' : '#FFF7ED',
                                                        borderRadius: '12px',
                                                        padding: '16px',
                                                        border: `1px solid ${item.status === 'Complete' ? '#86EFAC' : '#FDBA74'}`,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '12px'
                                                    }}
                                                >
                                                    <div style={{
                                                        width: '36px',
                                                        height: '36px',
                                                        borderRadius: '8px',
                                                        background: item.status === 'Complete' ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)' : 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'white'
                                                    }}>
                                                        {item.icon}
                                                    </div>
                                                    <div style={{ flex: 1 }}>
                                                        <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1A1A1A' }}>{item.step}</div>
                                                        <div style={{ fontSize: '0.75rem', color: item.status === 'Complete' ? '#10B981' : '#FF6B35', fontWeight: 600 }}>{item.status}</div>
                                                    </div>
                                                    {item.status === 'Complete' && <CheckCircle size={20} style={{ color: '#10B981' }} />}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </FloatingCard>

                                {/* Floating 3D accent elements */}
                                <motion.div
                                    animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    style={{
                                        position: 'absolute',
                                        top: '-20px',
                                        right: '-20px',
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '20px',
                                        background: 'linear-gradient(135deg, #FF8C42 0%, #FF4D6D 100%)',
                                        opacity: 0.2,
                                        zIndex: -1
                                    }}
                                />
                                <motion.div
                                    animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    style={{
                                        position: 'absolute',
                                        bottom: '-30px',
                                        left: '-30px',
                                        width: '100px',
                                        height: '100px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                                        opacity: 0.15,
                                        zIndex: -1
                                    }}
                                />
                            </div>
                        </Parallax3DElement>
                    </div>
                </div>
            </Section>

            {/* LOGO STRIP */}
            <Section padding="md" style={{ background: '#F9FAFB', paddingTop: '60px', paddingBottom: '60px', position: 'relative', overflow: 'hidden' }}>
                <Floating3DShape shape="square" size={100} top="20%" right="8%" delay={0.7} opacity={0.09} />
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#6B7280', marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Trusted by insurance professionals
                    </div>
                    <div className={styles.logoGrid} style={{ opacity: 0.5 }}>
                        {['Travelers', 'Chubb', 'AIG', 'Liberty Mutual'].map((logo, i) => (
                            <div key={i} style={{ fontSize: '1.25rem', fontWeight: 700, color: '#9CA3AF' }}>{logo}</div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* PROBLEM SECTION - Chatbase Style */}
            <Section padding="lg">
                <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
                            Stop Spending Fridays on Submissions
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: '#6B7280', lineHeight: 1.6, marginBottom: '40px' }}>
                            Placement shouldn't kill your week.
                        </p>
                        <p style={{ fontSize: '1.125rem', color: '#6B7280', lineHeight: 1.8 }}>
                            Manually filling carrier applications field by field. Writing business narratives that sell the risk. Researching carrier appetites. Building comparisons to justify your recommendation.
                        </p>
                        <p style={{ fontSize: '1.125rem', color: '#FF6B35', lineHeight: 1.8, fontWeight: 600, marginTop: '24px' }}>
                            By the time you submit, the deadline has passed.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* HOW IT WORKS - Card Grid Style */}
            <Section padding="lg" background="gray">
                <Floating3DShape shape="circle" size={130} top="12%" left="4%" delay={1} opacity={0.08} />
                <AnimatedBlob size={280} bottom="-8%" right="-6%" opacity={0.06} delay={1.5} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', marginBottom: '80px' }}
                    >
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FF6B35', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                            How It Works
                        </div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
                            From Client Data to <br />Submission-Ready in Minutes
                        </h2>
                    </motion.div>

                    <div className={styles.cardGridAuto}>
                        {[
                            {
                                step: '1',
                                icon: <FileText size={28} />,
                                title: 'Input Client Information',
                                desc: 'Provide company details, current coverage, or upload application forms.',
                                color: '#FF6B35'
                            },
                            {
                                step: '2',
                                icon: <Zap size={28} />,
                                title: 'Application Pre-Fill',
                                desc: 'Agents automatically populate carrier applications across all fields and sections—no manual data entry.',
                                color: '#FF8C42'
                            },
                            {
                                step: '3',
                                icon: <FileText size={28} />,
                                title: 'Business Narrative Generation',
                                desc: 'Generate persuasive, underwriter-ready narratives that highlight strengths and address concerns.',
                                color: '#FF4D6D'
                            },
                            {
                                step: '4',
                                icon: <Target size={28} />,
                                title: 'Carrier Matching',
                                desc: 'Match risk profile to your carrier appetite guides and recommend best markets.',
                                color: '#FF6B35'
                            },
                            {
                                step: '5',
                                icon: <TrendingUp size={28} />,
                                title: 'Professional Proposals',
                                desc: 'Generate white-label proposals with coverage comparisons and recommendations.',
                                color: '#FF8C42'
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{
                                    y: -8,
                                    boxShadow: '0 20px 40px rgba(255, 107, 53, 0.2)',
                                    transition: { duration: 0.3 }
                                }}
                                style={{
                                    background: 'white',
                                    borderRadius: '24px',
                                    padding: '40px',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                    border: '2px solid rgba(255, 107, 53, 0.1)',
                                    position: 'relative',
                                    cursor: 'pointer'
                                }}
                            >
                                {/* Step number badge */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '24px',
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    background: `linear-gradient(135deg, ${item.color} 0%, #FF4D6D 100%)`,
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.875rem',
                                    fontWeight: 700,
                                    zIndex: 1,
                                    boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)'
                                }}>
                                    {item.step}
                                </div>

                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    style={{
                                        width: '64px',
                                        height: '64px',
                                        borderRadius: '16px',
                                        background: `linear-gradient(135deg, ${item.color} 0%, #FF8C42 100%)`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '24px',
                                        color: 'white'
                                    }}
                                >
                                    {item.icon}
                                </motion.div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>{item.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* WHAT YOU GET - Two Column Cards */}
            <Section padding="lg">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', marginBottom: '80px' }}
                    >
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FF6B35', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                            Complete Placement Automation
                        </div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
                            Everything You Need to Place
                        </h2>
                    </motion.div>

                    <div className={styles.cardGrid2} style={{ margin: '0 auto' }}>
                        {[
                            { icon: <FileText size={32} />, title: 'Application Pre-Fill', desc: 'Automatically populate carrier applications for all major insurers', gradient: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)' },
                            { icon: <Zap size={32} />, title: 'Business Narratives', desc: 'Underwriter-ready narratives that sell the risk professionally', gradient: 'linear-gradient(135deg, #FF8C42 0%, #FF4D6D 100%)' },
                            { icon: <Target size={32} />, title: 'Appetite Matching', desc: 'Match risks to carriers based on your uploaded appetite guides', gradient: 'linear-gradient(135deg, #FF6B35 0%, #FF4D6D 100%)' },
                            { icon: <TrendingUp size={32} />, title: 'Policy Comparisons', desc: 'Side-by-side coverage comparisons showing value of your recommendation', gradient: 'linear-gradient(135deg, #FF4D6D 0%, #FF6B35 100%)' },
                            { icon: <FileText size={32} />, title: 'Proposal Generation', desc: 'Professional, branded proposals ready to present to clients', gradient: 'linear-gradient(135deg, #FF8C42 0%, #FF6B35 100%)' },
                            { icon: <Target size={32} />, title: 'Market Intelligence', desc: 'Track submission outcomes and carrier responses over time', gradient: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)' }
                        ].map((feature, i) => (
                            <FloatingCard key={i} delay={i * 0.1}>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        background: 'white',
                                        borderRadius: '20px',
                                        padding: '32px',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                        border: '2px solid rgba(255, 107, 53, 0.1)',
                                        height: '100%',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <div style={{
                                        width: '64px',
                                        height: '64px',
                                        borderRadius: '16px',
                                        background: feature.gradient,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '20px',
                                        color: 'white'
                                    }}>
                                        {feature.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>{feature.title}</h3>
                                    <p style={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.6, margin: 0 }}>{feature.desc}</p>
                                </motion.div>
                            </FloatingCard>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CARRIER SUPPORT - Icon Grid */}
            <Section padding="lg" background="gray">
                <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FF6B35', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                            Carrier Support
                        </div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
                            Works With Your Carrier Relationships
                        </h2>
                    </motion.div>

                    <div className={styles.cardGrid2} style={{ marginTop: '60px' }}>
                        {[
                            { icon: <Building2 size={24} />, text: 'Universal application support across major commercial carriers' },
                            { icon: <FileText size={24} />, text: 'Custom appetite guide integration—upload your carrier contacts and appetite documentation' },
                            { icon: <TrendingUp size={24} />, text: 'Submission tracking and follow-up automation' },
                            { icon: <Target size={24} />, text: 'Market intelligence based on your submission history' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                style={{
                                    background: 'white',
                                    borderRadius: '16px',
                                    padding: '24px',
                                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
                                    display: 'flex',
                                    gap: '16px',
                                    alignItems: 'flex-start',
                                    textAlign: 'left'
                                }}
                            >
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    flexShrink: 0
                                }}>
                                    {item.icon}
                                </div>
                                <span style={{ fontSize: '1rem', color: '#1A1A1A', lineHeight: 1.6 }}>{item.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* FINAL CTA */}
            <Section padding="lg" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 50%, #FF4D6D 100%)', position: 'relative', overflow: 'hidden' }}>
                <ParticleBackground count={15} />

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: 'white', marginBottom: '24px' }}>
                            See Placement Automation in Action
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.6, marginBottom: '48px' }}>
                            Watch Broker Agentx pre-fill an application and generate a business narrative in under 5 minutes.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Button size="xl" style={{ background: 'white', color: '#FF6B35', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: 'none' }}>
                                <Play size={20} style={{ marginRight: '8px' }} /> Watch Demo
                            </Button>
                            <Button size="xl" style={{ background: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: '1px solid rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(10px)' }}>
                                Get Started <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </Section>

        </div>
    );
}
