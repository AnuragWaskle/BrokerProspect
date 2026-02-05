import { motion } from 'framer-motion';
import { Shield, Lock, Globe, Database, Server, Zap, CheckCircle2, BarChart, LayoutGrid, Building2 } from 'lucide-react';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import Tilt from '../../components/ui/Tilt';

export default function EnterpriseTeams() {
    return (
        <div style={{ background: '#FFFFFF', color: '#111827', minHeight: '100vh' }}>
            {/* 1. HERO SECTION */}
            <Section padding="xl" style={{ position: 'relative', overflow: 'hidden', paddingTop: '180px', paddingBottom: '160px', background: '#F8FAFC' }}>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) 1fr', gap: '100px', alignItems: 'center' }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <Badge style={{ background: 'rgba(30, 64, 175, 0.1)', color: '#1E40AF', marginBottom: '24px' }}>
                                For Global Brokerages & Enterprises
                            </Badge>
                            <h1 style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: '32px' }}>
                                One Source <br />
                                <span style={{ color: '#2563EB' }}>Of Truth.</span>
                            </h1>
                            <p style={{ fontSize: '1.25rem', color: '#4B5563', maxWidth: '600px', marginBottom: '48px', lineHeight: 1.6 }}>
                                Unify fragmented regional teams, secure sensitive client data, and command your global operations with institutional-grade AI.
                            </p>
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <Button size="lg" style={{ background: '#1E40AF', color: 'white', borderRadius: '100px', border: 'none' }}>
                                    Enterprise Consultation
                                </Button>
                                <Button variant="outline" size="lg" style={{ borderRadius: '100px' }}>
                                    Security Roadmap
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            style={{ position: 'relative' }}
                        >
                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <img
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
                                    style={{ width: '100%', borderRadius: '32px', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.1)' }}
                                    alt="Global Headquarters"
                                />
                            </div>

                            {/* Overlapping Enterprise Badges */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    position: 'absolute', top: '-30px', left: '-30px', zIndex: 3,
                                    background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #E5E7EB',
                                    display: 'flex', flexDirection: 'column', gap: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
                                }}
                            >
                                <Shield size={24} color="#1E40AF" fill="#1E40AF11" />
                                <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>SOC2 TYPE II</div>
                                <div style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 600 }}>CERTIFIED 2026</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                style={{
                                    position: 'absolute', bottom: '10%', right: '-40px', zIndex: 3,
                                    background: '#111827', color: 'white', padding: '24px', borderRadius: '16px',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.2)', width: '240px'
                                }}
                            >
                                <div style={{ marginBottom: '16px', opacity: 0.6, fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>Data Sync</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Globe size={20} color="#3B82F6" />
                                    <span style={{ fontWeight: 700 }}>4 Regional Hubs Live</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* 2. THE INFRASTRUCTURE (LIGHT GRID) */}
            <Section padding="xl" style={{ paddingTop: '160px', paddingBottom: '160px' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 100px' }}>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '24px' }}>Built for Scale.</h2>
                        <p style={{ fontSize: '1.25rem', opacity: 0.6, lineHeight: 1.6 }}>Enterprise teams require more than just a tool. They require a platform that respects their existing workflows, security mandates, and global footprint.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
                        <InfraCard icon={<Database />} title="Shared Ledger" desc="Unified prospect data across all departments." color="#2563EB" />
                        <InfraCard icon={<Server />} title="Multi-Cloud" desc="Deployment options to match your IT strategy." color="#10B981" />
                        <InfraCard icon={<LayoutGrid />} title="Governance" desc="Granular RBAC and comprehensive audit logs." color="#F59E0B" />
                    </div>
                </div>
            </Section>

            {/* 3. SECURITY & TRUST */}
            <Section padding="xl" style={{ background: '#F8FAFC', paddingTop: '160px', paddingBottom: '160px' }}>
                <div className="container" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: '48px', padding: '100px', boxShadow: '0 50px 100px -30px rgba(0,0,0,0.03)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
                        <div>
                            <Badge color="blue" style={{ marginBottom: '24px' }}>Security First</Badge>
                            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '32px' }}>Your data is your <br /> sovereignty.</h2>
                            <p style={{ fontSize: '1.25rem', color: '#4B5563', marginBottom: '40px', lineHeight: 1.6 }}>
                                Wilson is designed for the high-security environment of modern insurance. We don't just protect your data; we ensure you remain the sole owner of the insights it generates.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                                <SecurityCheck title="End-to-End Encryption" />
                                <SecurityCheck title="Regional Data Hosting" />
                                <SecurityCheck title="Single Sign-On (SSO)" />
                                <SecurityCheck title="Compliance Exporting" />
                            </div>
                        </div>
                        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                            <div style={{ width: '100%', height: '400px', background: '#F1F5F9', borderRadius: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #CBD5E1' }}>
                                <Lock size={120} color="#1E40AF" strokeWidth={1} style={{ opacity: 0.2 }} />
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                    style={{ position: 'absolute', width: 200, height: 200, border: '2px solid #1E40AF11', borderRadius: '50%' }}
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    style={{ position: 'absolute', width: 280, height: 280, border: '2px dashed #1E40AF11', borderRadius: '50%' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 4. FINAL CTA */}
            <Section padding="xl" style={{ textAlign: 'center', paddingTop: '160px', paddingBottom: '160px' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '32px' }}>Talk to our solutions team.</h2>
                    <Button size="xl" style={{ background: '#1E40AF', color: 'white', borderRadius: '100px', padding: '20px 60px' }}>
                        Schedule Enterprise Meeting
                    </Button>
                </div>
            </Section>
        </div>
    );
}

function InfraCard({ icon, title, desc, color }) {
    return (
        <Tilt style={{ display: 'block' }}>
            <div style={{ background: 'white', padding: '60px 40px', borderRadius: '32px', border: '1px solid #E5E7EB', boxShadow: '0 20px 40px rgba(0,0,0,0.02)' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: `${color}11`, color: color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
                    {icon}
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '16px' }}>{title}</h3>
                <p style={{ color: '#4B5563', lineHeight: 1.6 }}>{desc}</p>
            </div>
        </Tilt>
    );
}

function SecurityCheck({ title }) {
    return (
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <CheckCircle2 color="#10B981" size={20} />
            <span style={{ fontWeight: 600, fontSize: '1rem' }}>{title}</span>
        </div>
    );
}
