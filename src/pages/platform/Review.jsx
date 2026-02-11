import { motion } from 'framer-motion';
import { FileText, Search, BarChart3, FileCheck, ArrowRight, Play, Upload, CheckCircle2 } from 'lucide-react';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import FloatingCard from '../../components/ui/FloatingCard';
import ParticleBackground from '../../components/ui/ParticleBackground';
import styles from '../../styles/responsive.module.css';

export default function Review() {
    return (
        <div style={{ background: '#FFFFFF', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

            {/* HERO SECTION - Centered with Visual Below */}
            <Section padding="lg" style={{ position: 'relative', overflow: 'hidden', paddingTop: '160px', background: 'linear-gradient(180deg, #FFF5F0 0%, #FFFFFF 100%)' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FF6B35', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>
                            AI-Powered Policy Analysis
                        </div>
                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, color: '#1A1A1A', marginBottom: '24px', maxWidth: '900px', margin: '0 auto 24px' }}>
                            Analyze Policies in Seconds. <br />
                            Not Hours.
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#6B7280', lineHeight: 1.6, marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
                            Upload policies to extract coverage details, identify gaps, and generate professional risk reports instantly.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Button size="xl" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF4D6D 100%)', color: 'white', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: 'none' }}>
                                Get Started
                            </Button>
                            <Button size="xl" style={{ background: 'white', color: '#FF6B35', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: '2px solid #FF6B35' }}>
                                <Play size={20} style={{ marginRight: '8px' }} /> Watch Demo
                            </Button>
                        </div>
                    </motion.div>

                    {/* Visual: Policy Upload to Analysis Flow */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ marginTop: '80px', maxWidth: '1000px', margin: '80px auto 0' }}
                    >
                        <div className={styles.cardGrid3} style={{ alignItems: 'center' }}>
                            {/* Upload Card */}
                            <FloatingCard delay={0.5}>
                                <div style={{
                                    background: 'white',
                                    borderRadius: '20px',
                                    padding: '32px',
                                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                                    border: '2px dashed rgba(255, 107, 53, 0.3)',
                                    textAlign: 'center'
                                }}>
                                    <Upload size={40} style={{ color: '#FF6B35', margin: '0 auto 16px' }} />
                                    <div style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>Upload Policy</div>
                                    <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>50-page PDF</div>
                                </div>
                            </FloatingCard>

                            {/* Arrow */}
                            <ArrowRight size={32} className={styles.hideOnMobile} style={{ color: '#FF6B35' }} />

                            {/* Analysis Result Card */}
                            <FloatingCard delay={0.7}>
                                <div style={{
                                    background: 'white',
                                    borderRadius: '20px',
                                    padding: '32px',
                                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                                    border: '2px solid rgba(255, 107, 53, 0.2)'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                        <CheckCircle2 size={24} style={{ color: '#10B981' }} />
                                        <div style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A' }}>Analysis Complete</div>
                                    </div>
                                    <div style={{ textAlign: 'left', fontSize: '0.875rem', color: '#6B7280', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <div>✓ Coverage extracted</div>
                                        <div>✓ 7 gaps identified</div>
                                        <div>✓ Report generated</div>
                                    </div>
                                </div>
                            </FloatingCard>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* HOW IT WORKS - Horizontal Timeline */}
            <Section padding="lg" style={{ background: 'white' }}>
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
                            From Policy Upload to <br />Professional Analysis in 90 Seconds
                        </h2>
                    </motion.div>

                    <div style={{ position: 'relative' }}>
                        {/* Timeline Line */}
                        <div className={styles.hideOnMobile} style={{
                            position: 'absolute',
                            top: '28px',
                            left: '10%',
                            right: '10%',
                            height: '4px',
                            background: 'linear-gradient(90deg, #FF6B35 0%, #FF4D6D 100%)',
                            borderRadius: '2px',
                            zIndex: 0
                        }} />

                        <div className={styles.cardGrid4} style={{ position: 'relative', zIndex: 1 }}>
                            {[
                                { step: '1', icon: <Upload size={24} />, title: 'Upload Policy Documents', desc: 'Drag and drop policies, binders, or coverage summaries' },
                                { step: '2', icon: <Search size={24} />, title: 'Automated Extraction', desc: 'Agents read and structure every coverage section' },
                                { step: '3', icon: <BarChart3 size={24} />, title: 'Gap Analysis', desc: 'Compare coverage against operational risks' },
                                { step: '4', icon: <FileCheck size={24} />, title: 'Professional Reports', desc: 'Generate client-ready coverage summaries' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.15 }}
                                    style={{ textAlign: 'center' }}
                                >
                                    <div style={{
                                        width: '56px',
                                        height: '56px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #FF6B35 0%, #FF4D6D 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 20px',
                                        color: 'white',
                                        boxShadow: '0 4px 16px rgba(255, 107, 53, 0.3)'
                                    }}>
                                        {item.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>{item.title}</h3>
                                    <p style={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.6 }}>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* WHAT YOU GET - Two Column Layout */}
            <Section padding="lg" background="gray">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', marginBottom: '80px' }}
                    >
                        <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#FF6B35', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                            Complete Policy Intelligence
                        </div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
                            Everything You Need from Every Policy
                        </h2>
                    </motion.div>

                    <div className={styles.cardGrid2}>
                        {[
                            { icon: <FileText size={28} />, title: 'Coverage Summaries', desc: 'Structured tables showing limits, deductibles, and key terms by coverage section' },
                            { icon: <Search size={28} />, title: 'Gap Analysis', desc: 'Identified coverage gaps with risk severity and actionable recommendations' },
                            { icon: <BarChart3 size={28} />, title: 'Policy Comparisons', desc: 'Side-by-side comparison of incumbent vs. proposed programs showing only differences' },
                            { icon: <FileCheck size={28} />, title: 'Renewal Analysis', desc: 'Assessment of expiring coverage against renewal quotes with recommendations' },
                            { icon: <FileText size={28} />, title: 'Contract Reviews', desc: 'Extract insurance requirements from client contracts and assess compliance' },
                            { icon: <Search size={28} />, title: 'Q&A on Policies', desc: 'Ask specific questions about any policy detail—get instant, accurate answers' }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                                style={{
                                    background: 'white',
                                    borderRadius: '20px',
                                    padding: '32px',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                    border: '2px solid rgba(255, 107, 53, 0.1)',
                                    display: 'flex',
                                    gap: '20px',
                                    alignItems: 'flex-start'
                                }}
                            >
                                <div style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '14px',
                                    background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    color: 'white'
                                }}>
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>{feature.title}</h3>
                                    <p style={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.6, margin: 0 }}>{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* AGENT CAPABILITIES - Card Grid */}
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
                            Agent Capabilities
                        </div>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
                            Purpose-Built for Insurance Analysis
                        </h2>
                    </motion.div>

                    <div className={styles.cardGridAuto}>
                        {[
                            { title: 'Coverage Summary Agent', desc: 'Extracts and structures coverage from complex policy documents' },
                            { title: 'Gap Analysis Agent', desc: 'Identifies uninsured exposures against operational risks' },
                            { title: 'Policy Comparison Agent', desc: 'Compares programs to highlight coverage improvements' },
                            { title: 'Contract Review Agent', desc: 'Extracts insurance requirements and assesses compliance' },
                            { title: 'Session Memory', desc: 'Upload once—all agents access the same policy context' }
                        ].map((agent, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                style={{
                                    background: 'linear-gradient(135deg, #FF6B35 0%, #FF4D6D 100%)',
                                    borderRadius: '16px',
                                    padding: '28px',
                                    color: 'white',
                                    textAlign: 'center'
                                }}
                            >
                                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '12px' }}>{agent.title}</h3>
                                <p style={{ fontSize: '0.95rem', opacity: 0.95, lineHeight: 1.6, margin: 0 }}>{agent.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* FINAL CTA */}
            <Section padding="lg" style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)', position: 'relative', overflow: 'hidden' }}>
                <ParticleBackground count={12} />

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: 'white', marginBottom: '24px' }}>
                            See Policy Analysis in Action
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.6, marginBottom: '48px' }}>
                            Watch Broker Agentx analyze a 50-page policy and generate a complete gap analysis in under 2 minutes.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Button size="xl" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF4D6D 100%)', color: 'white', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: 'none' }}>
                                <Play size={20} style={{ marginRight: '8px' }} /> Watch Demo
                            </Button>
                            <Button size="xl" style={{ background: 'white', color: '#FF6B35', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: 'none' }}>
                                Get Started <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </Section>

        </div>
    );
}
