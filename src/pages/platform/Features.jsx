import { motion } from 'framer-motion';
import { Shield, Lock, ShieldCheck, Eye, Key, FileText, ArrowRight, Zap, Award, Check } from 'lucide-react';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import styles from '../../styles/responsive.module.css';

export default function Features() {
    return (
        <div style={{ background: '#FFFFFF', color: '#111827', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

            {/* 1. HERO SECTION */}
            <Section padding="lg" style={{ paddingTop: '180px', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div style={{ fontSize: '1rem', fontWeight: 700, color: '#4F46E5', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 24 }}>Enterprise-Grade Security</div>
                        <h1 style={{ fontSize: 'clamp(4rem, 8vw, 6rem)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.03em', marginBottom: '40px', color: '#111827' }}>
                            Your Data. <br />
                            <span style={{ color: '#4F46E5' }}>Fortress Protected.</span>
                        </h1>
                        <p style={{ fontSize: '1.5rem', color: '#4B5563', maxWidth: '800px', margin: '0 auto 60px', lineHeight: 1.6 }}>
                            We adhere to the highest industry standards for data protection, privacy, and sovereignty.
                        </p>
                        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
                            <Button size="xl" style={{ background: '#4F46E5', color: 'white', borderRadius: '4px', padding: '24px 48px', fontSize: '1.125rem' }}>
                                View Trust Center
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* 2. SECURITY PILLARS */}
            <Section padding="lg" background="gray">
                <div className="container">
                    <div className={styles.cardGrid3}>
                        <SecurityCard
                            icon={<Lock />}
                            title="AES-256 Encryption"
                            desc="All data is encrypted at rest and in transit with hardware-level security modules."
                        />
                        <SecurityCard
                            icon={<ShieldCheck />}
                            title="SOC 2 Type II"
                            desc="Independently audited and certified annually for security, availability, and privacy."
                        />
                        <SecurityCard
                            icon={<Key />}
                            title="Zero-Knowledge"
                            desc="We never store your master keys. Your data remains completely private to your agency."
                        />
                    </div>
                </div>
            </Section>

            {/* 3. COMPLIANCE SECTION */}
            <Section padding="lg">
                <div className={`${styles.cardGrid2} container`} style={{ alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: 32, lineHeight: 1.1 }}>Compliance <br /> by Design.</h2>
                        <p style={{ fontSize: '1.25rem', color: '#4B5563', marginBottom: 40, lineHeight: 1.6 }}>
                            Our platform is built to satisfy the most stringent regulatory requirements across US and Canadian markets.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                            {['PIPED & HIPAA Compliant', 'GDPR Readiness', 'Data Sovereignty (Regional Hosting)', 'Audit Logging & Tracking'].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, fontWeight: 600 }}>
                                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#EEF2FF', color: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Check size={14} /></div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ background: '#F9FAFB', borderRadius: 32, padding: 60, minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Award size={160} color="#4F46E5" strokeWidth={1} style={{ opacity: 0.1 }} />
                    </div>
                </div>
            </Section>

            {/* 4. FINAL CTA */}
            <Section padding="lg" style={{ background: 'white' }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div style={{
                        background: '#EEF2FF',
                        borderRadius: 32,
                        padding: '80px 40px',
                        textAlign: 'center',
                        border: '1px solid #E0E7FF'
                    }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#111827', marginBottom: 24 }}>Trust is our foundation.</h2>
                        <p style={{ fontSize: '1.25rem', color: '#4B5563', marginBottom: 48, maxWidth: 600, margin: '0 auto 48px' }}>
                            Download our comprehensive security whitepaper to learn more about our architectural safeguards.
                        </p>
                        <Button size="xl" style={{ background: '#4F46E5', color: 'white', borderRadius: 4, padding: '20px 60px', fontSize: '1.25rem', border: 'none' }}>
                            Download Whitepaper
                        </Button>
                    </div>
                </div>
            </Section>

        </div>
    );
}

function SecurityCard({ icon, title, desc }) {
    return (
        <div style={{ background: 'white', padding: 48, borderRadius: 24, border: '1px solid #E5E7EB' }}>
            <div style={{ color: '#4F46E5', marginBottom: 24 }}>{icon}</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>{title}</h3>
            <p style={{ color: '#6B7280', lineHeight: 1.6 }}>{desc}</p>
        </div>
    );
}
