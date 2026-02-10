import { motion } from 'framer-motion';
import { Search, Users, Mail, TrendingUp, ArrowRight, Play, CheckCircle } from 'lucide-react';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import FloatingCard from '../../components/ui/FloatingCard';
import ParticleBackground from '../../components/ui/ParticleBackground';
import Floating3DShape, { ScrollReveal3D, Parallax3DElement } from '../../components/ui/3DAnimations';
import AnimatedBlob, { PulsingOrb } from '../../components/ui/AnimatedBlob';
import styles from '../../styles/responsive.module.css';

export default function Prospect() {
    return (
        <div style={{ background: '#FFFFFF', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

            {/* HERO SECTION - Left Text, Right Animated Visual */}
            <Section padding="none" style={{ position: 'relative', overflow: 'hidden', paddingTop: '140px', paddingBottom: '100px', background: 'white' }}>
                {/* Floating 3D Background Elements */}
                <Floating3DShape shape="circle" size={150} top="10%" left="5%" delay={0} opacity={0.1} />
                <Floating3DShape shape="rounded" size={100} top="60%" right="8%" delay={1.5} opacity={0.12} color="linear-gradient(135deg, #FF8C42 0%, #FF4D6D 100%)" />
                <AnimatedBlob size={300} top="-10%" right="-5%" opacity={0.08} />
                <PulsingOrb size={80} bottom="20%" left="10%" delay={2} />

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
                                    AI-Powered Prospecting
                                </div>
                                <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, color: '#1A1A1A', marginBottom: '24px' }}>
                                    Automate Prospecting. <br />
                                    Start Selling Faster.
                                </h1>
                                <p style={{ fontSize: '1.25rem', color: '#6B7280', lineHeight: 1.6, marginBottom: '40px', maxWidth: '520px' }}>
                                    Find companies, identify decision-makers, and generate personalized outreach—all from a single prompt.
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

                        {/* Right: Animated Floating Card */}
                        <Parallax3DElement speed={-0.3}>
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

                                        <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#FF6B35', marginBottom: '16px' }}>Prospect Search</div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '24px' }}>
                                            "Find tech companies in Toronto with 50-200 employees"
                                        </div>

                                        {/* Animated Results */}
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                            {[
                                                { name: 'Acme Software Inc.', role: 'CEO: John Smith', status: 'Email found' },
                                                { name: 'TechCorp Solutions', role: 'CFO: Sarah Johnson', status: 'LinkedIn verified' },
                                                { name: 'DataFlow Systems', role: 'Risk Manager: Mike Chen', status: 'Phone verified' }
                                            ].map((company, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.4, delay: 0.8 + i * 0.2 }}
                                                    style={{
                                                        background: '#F9FAFB',
                                                        borderRadius: '12px',
                                                        padding: '16px',
                                                        border: '1px solid #E5E7EB'
                                                    }}
                                                >
                                                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '4px' }}>{company.name}</div>
                                                    <div style={{ fontSize: '0.85rem', color: '#6B7280', marginBottom: '8px' }}>{company.role}</div>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                        <CheckCircle size={14} style={{ color: '#10B981' }} />
                                                        <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 600 }}>{company.status}</span>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </FloatingCard>

                                {/* Floating accent elements */}
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
                            </div>
                        </Parallax3DElement>
                    </div>
                </div>
            </Section>

            {/* LOGO STRIP */}
            <Section padding="md" style={{ background: '#F9FAFB', paddingTop: '60px', paddingBottom: '60px', position: 'relative', overflow: 'hidden' }}>
                <Floating3DShape shape="square" size={120} top="15%" right="5%" delay={0.5} opacity={0.08} />
                <Floating3DShape shape="circle" size={90} bottom="10%" left="3%" delay={2} opacity={0.1} />
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#6B7280', marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Trusted by brokers worldwide
                    </div>
                    <div className={styles.logoGrid} style={{ opacity: 0.5 }}>
                        {['Apollo', 'LinkedIn', 'Mailchimp', 'Salesforce'].map((logo, i) => (
                            <div key={i} style={{ fontSize: '1.25rem', fontWeight: 700, color: '#9CA3AF' }}>{logo}</div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* HOW IT WORKS - Step by Step */}
            <Section padding="xl" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
                <div className="container">
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
                            From Company Name to <br />Ready-to-Send Outreach in Minutes
                        </h2>
                    </motion.div>

                    <div className={styles.cardGrid4}>
                        {[
                            { step: '1', icon: <Search size={28} />, title: 'Input a Company', desc: 'Give Broker Agentx a company name, domain, or industry criteria.' },
                            { step: '2', icon: <TrendingUp size={28} />, title: 'Automated Enrichment', desc: 'Agents pull data from Apollo, LinkedIn, and public sources to build complete profiles.' },
                            { step: '3', icon: <Users size={28} />, title: 'Decision-Maker ID', desc: 'Automatically identifies and extracts contact information for key executives.' },
                            { step: '4', icon: <Mail size={28} />, title: 'Personalized Outreach', desc: 'Generates customized email sequences based on company profile and identified risks.' }
                        ].map((item, i) => (
                            <ScrollReveal3D key={i} delay={i * 0.1} direction="up">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.15 }}
                                    style={{ position: 'relative' }}
                                >
                                    {/* Step number badge */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '-12px',
                                        left: '24px',
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #FF6B35 0%, #FF4D6D 100%)',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.875rem',
                                        fontWeight: 700,
                                        zIndex: 1
                                    }}>
                                        {item.step}
                                    </div>

                                    <div style={{
                                        background: 'white',
                                        borderRadius: '20px',
                                        padding: '40px 28px 28px',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                        border: '2px solid rgba(255, 107, 53, 0.1)',
                                        height: '100%'
                                    }}>
                                        <div style={{
                                            width: '56px',
                                            height: '56px',
                                            borderRadius: '14px',
                                            background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '20px',
                                            color: 'white'
                                        }}>
                                            {item.icon}
                                        </div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>{item.title}</h3>
                                        <p style={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                                    </div>
                                </motion.div>
                            </ScrollReveal3D>
                        ))}
                    </div>
                </div>
            </Section>

            {/* WHAT YOU GET - Feature Grid */}
            <Section padding="xl" style={{ background: '#F9FAFB', paddingTop: '120px', paddingBottom: '120px' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', marginBottom: '80px' }}
                    >
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FF6B35', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                            Complete Intelligence
                        </div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
                            Everything You Need to Close
                        </h2>
                    </motion.div>

                    <div className={styles.cardGridAuto}>
                        {[
                            { title: 'Company Profile', desc: 'Name, industry, size, revenue, NAICS code, operations summary' },
                            { title: 'Risk Exposure Analysis', desc: 'Industry-specific risks, coverage gaps, operational exposures' },
                            { title: 'Decision-Maker Contacts', desc: 'Verified emails and phone numbers for key executives' },
                            { title: 'Personalized Outreach', desc: 'Email templates tailored to company profile and identified risks' },
                            { title: 'LinkedIn Integration', desc: 'Automated connection requests and messaging campaigns' },
                            { title: 'Campaign Automation', desc: 'Schedule and execute multi-touch campaigns via integrated email tools' }
                        ].map((feature, i) => (
                            <ScrollReveal3D key={i} delay={i * 0.08} direction="up">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.08 }}
                                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                    style={{
                                        background: 'white',
                                        borderRadius: '16px',
                                        padding: '28px',
                                        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
                                        border: '1px solid rgba(255, 107, 53, 0.1)',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>{feature.title}</h3>
                                    <p style={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.6, margin: 0 }}>{feature.desc}</p>
                                </motion.div>
                            </ScrollReveal3D>
                        ))}
                    </div>
                </div>
            </Section>

            {/* INTEGRATIONS */}
            <Section padding="xl" style={{ paddingTop: '120px', paddingBottom: '120px', position: 'relative', overflow: 'hidden' }}>
                <AnimatedBlob size={250} bottom="-10%" left="-5%" opacity={0.06} delay={1} />
                <Floating3DShape shape="triangle" size={110} top="20%" right="10%" delay={1.5} opacity={0.09} />
                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FF6B35', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                            Integrations
                        </div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
                            Connected to Your Growth Stack
                        </h2>
                        <p style={{ fontSize: '1.125rem', color: '#6B7280', marginBottom: '60px' }}>
                            Seamlessly integrate with the tools you already use
                        </p>
                    </motion.div>

                    <div className={styles.cardGrid4}>
                        {[
                            { name: 'Apollo', desc: 'Company and contact enrichment' },
                            { name: 'LinkedIn', desc: 'Automated outreach and connections' },
                            { name: 'Mailchimp', desc: 'Email campaign execution' },
                            { name: 'Your CRM', desc: 'Automatic contact creation' }
                        ].map((integration, i) => (
                            <ScrollReveal3D key={i} delay={i * 0.1} direction="up">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    whileHover={{
                                        y: -8,
                                        rotateY: 5,
                                        rotateX: -3,
                                        boxShadow: '0 20px 40px rgba(255, 107, 53, 0.2)',
                                        transition: { duration: 0.3 }
                                    }}
                                    style={{
                                        background: 'white',
                                        borderRadius: '16px',
                                        padding: '24px',
                                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
                                        textAlign: 'center'
                                    }}
                                >
                                    <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>{integration.name}</div>
                                    <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>{integration.desc}</div>
                                </motion.div>
                            </ScrollReveal3D>
                        ))}
                    </div>
                </div>
            </Section>

            {/* FINAL CTA */}
            <Section padding="xl" style={{ paddingTop: '120px', paddingBottom: '120px', background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 50%, #FF4D6D 100%)', position: 'relative', overflow: 'hidden' }}>
                <ParticleBackground count={15} />
                <Floating3DShape shape="circle" size={200} top="10%" left="5%" opacity={0.15} blur={3} />
                <Floating3DShape shape="rounded" size={150} bottom="15%" right="8%" delay={1} opacity={0.12} blur={3} />

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: 'white', marginBottom: '24px' }}>
                            Start Prospecting Smarter
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.6, marginBottom: '48px' }}>
                            See how Broker Agentx builds complete company profiles and generates outreach in under 3 minutes.
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
