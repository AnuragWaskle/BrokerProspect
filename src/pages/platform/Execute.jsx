import { useRef } from 'react';
import { motion } from 'framer-motion';
import {
    FileText, Mail, Calculator, FileCheck, Shield, ArrowRight, Play, Zap,
    CheckCircle, Lock, Layers, Database, Share2, ClipboardCheck, Clock
} from 'lucide-react';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import FloatingCard from '../../components/ui/FloatingCard';
import ParticleBackground from '../../components/ui/ParticleBackground';
import Floating3DShape, { ScrollReveal3D } from '../../components/ui/3DAnimations';
import styles from '../../styles/responsive.module.css';

export default function Execute() {
    return (
        <div style={{ background: '#FFFFFF', color: '#111827', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

            {/* 1. HERO SECTION */}
            <Section padding="lg" style={{ position: 'relative', overflow: 'hidden', paddingTop: '160px', background: '#FAFAFA' }}>
                <ParticleBackground count={12} color="#FF6B35" />
                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Badge style={{ background: 'rgba(255, 107, 53, 0.1)', color: '#FF6B35', border: 'none', marginBottom: 24, padding: '8px 16px' }}>
                            Administrative Automation
                        </Badge>
                        <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: 32, color: '#111827' }}>
                            Automate Administrative <br />
                            <span style={{ color: '#FF6B35' }}>Workflows.</span> Focus on Revenue.
                        </h1>
                        <p style={{ fontSize: '1.5rem', color: '#4B5563', maxWidth: 800, margin: '0 auto 48px', lineHeight: 1.5 }}>
                            Handle certificates, letters, calculations, and compliance documentation automatically.
                        </p>
                        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Button size="xl" style={{ background: '#FF6B35', border: 'none', borderRadius: '12px', padding: '18px 36px' }}>Get Started</Button>
                            <Button size="xl" variant="outline" style={{ border: '2px solid #E5E7EB', color: '#111827', borderRadius: '12px', padding: '18px 36px' }}>
                                <Play size={20} fill="currentColor" style={{ marginRight: 8 }} /> Watch Demo
                            </Button>
                        </div>
                    </motion.div>

                    {/* Hero Visual Mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{ marginTop: 80, position: 'relative' }}
                    >
                        <div style={{
                            background: 'white',
                            borderRadius: '24px',
                            boxShadow: '0 40px 100px -20px rgba(0,0,0,0.1)',
                            padding: '24px',
                            border: '1px solid #E5E7EB',
                            maxWidth: '1000px',
                            margin: '0 auto'
                        }}>
                            <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
                                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }}></div>
                                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }}></div>
                                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }}></div>
                            </div>
                            <div style={{ height: 400, background: '#F9FAFB', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ color: '#FF6B35', marginBottom: 16 }}>
                                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}>
                                            <Zap size={48} />
                                        </motion.div>
                                    </div>
                                    <div style={{ fontWeight: 700, fontSize: '1.25rem', color: '#111827' }}>Workflow Executing...</div>
                                    <div style={{ color: '#6B7280', fontSize: '0.875rem', marginTop: 8 }}>Generating Compliance Documents</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* 2. THE PROBLEM SECTION */}
            <Section padding="lg">
                <div className="container">
                    <div className={styles.cardGrid2} style={{ alignItems: 'center', gap: 80 }}>
                        <ScrollReveal3D>
                            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 32, letterSpacing: '-0.02em' }}>
                                Stop Letting Admin <br /> Work Pile Up
                            </h2>
                            <p style={{ fontSize: '1.25rem', color: '#4B5563', lineHeight: 1.6, marginBottom: 40 }}>
                                Administrative tasks shouldn't steal your selling time. Drafting letters, creating BORs, and managing compliance don't close deals—but they still need to get done.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    'Drafting loss run request letters',
                                    'Creating broker of record letters',
                                    'Producing certificates of insurance',
                                    'Generating COPE reports'
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, fontSize: '1.1rem', fontWeight: 500, color: '#374151' }}>
                                        <div style={{ color: '#FF6B35' }}><CheckCircle size={20} /></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal3D>

                        <div style={{ position: 'relative' }}>
                            <FloatingCard style={{ padding: 40, background: 'white', border: '1px solid #E5E7EB' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px', background: '#F3F4F6', borderRadius: '12px' }}>
                                        <FileText size={24} color="#6B7280" />
                                        <div style={{ flex: 1, height: 8, background: '#E5E7EB', borderRadius: 4 }}></div>
                                        <Badge style={{ background: '#FF6B35' }}>Automating</Badge>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px', background: '#F3F4F6', borderRadius: '12px' }}>
                                        <Mail size={24} color="#6B7280" />
                                        <div style={{ flex: 1, height: 8, background: '#E5E7EB', borderRadius: 4 }}></div>
                                        <Badge style={{ background: '#FF6B35' }}>Automating</Badge>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px', background: '#F3F4F6', borderRadius: '12px' }}>
                                        <ClipboardCheck size={24} color="#6B7280" />
                                        <div style={{ flex: 1, height: 8, background: '#E5E7EB', borderRadius: 4 }}></div>
                                        <Badge style={{ background: '#FF6B35' }}>Automating</Badge>
                                    </div>
                                </div>
                            </FloatingCard>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 3. WHAT GETS AUTOMATED */}
            <Section padding="lg" style={{ background: '#F9FAFB' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 80 }}>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: 24 }}>Administrative Workflows Handled Automatically</h2>
                        <p style={{ fontSize: '1.25rem', color: '#4B5563' }}>Specialized agents pull relevant data from your policies and client records.</p>
                    </div>

                    <div className={styles.cardGrid3}>
                        <AutomationCard
                            icon={<FileCheck />}
                            title="Certificates of Insurance"
                            desc="Generate and deliver COIs automatically based on policy data"
                        />
                        <AutomationCard
                            icon={<Mail />}
                            title="Loss Run Requests"
                            desc="Draft authorization letters to carriers requesting loss history"
                        />
                        <AutomationCard
                            icon={<FileText />}
                            title="Broker of Record Letters"
                            desc="Generate BOR appointment letters with proper legal language"
                        />
                        <AutomationCard
                            icon={<Calculator />}
                            title="Business Income Calculations"
                            desc="Calculate recommended BI limits based on financials and operations"
                        />
                        <AutomationCard
                            icon={<Layers />}
                            title="COPE Reports"
                            desc="Generate property valuation reports (Coming Soon)"
                        />
                        <AutomationCard
                            icon={<Shield />}
                            title="Contract Compliance"
                            desc="Track and manage certificate requirements from client contracts"
                        />
                    </div>
                </div>
            </Section>

            {/* 4. HOW IT WORKS */}
            <Section padding="lg">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 80 }}>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: 24 }}>From Request to Completed Document in Seconds</h2>
                    </div>

                    <div className={styles.cardGrid4}>
                        <StepCard number="1" title="Trigger the Workflow" desc="Request a certificate, letter, or calculation via simple prompt or automated trigger" />
                        <StepCard number="2" title="Agent Execution" desc="Specialized agents pull relevant data from your policies, client records, and documents" />
                        <StepCard number="3" title="Professional Output" desc="Generate formatted, accurate documents following industry standards" />
                        <StepCard number="4" title="Delivery" desc="Automatically send to clients, carriers, or store in your document management system" />
                    </div>
                </div>
            </Section>

            {/* 5. COMPLIANCE SECTION */}
            <Section padding="lg" style={{ background: '#111827', color: 'white', borderRadius: '48px', margin: '0 24px' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 80 }}>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: 24 }}>Built for Accuracy and Compliance</h2>
                    </div>
                    <div className={styles.cardGrid2}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
                            <ComplianceCard title="Legal Language Templates" desc="Industry-standard language for BOR letters and loss run requests" />
                            <ComplianceCard title="Data Validation" desc="Verify all outputs against source documents—no hallucination" />
                            <ComplianceCard title="Audit Trails" desc="Complete logs of all generated documents with source attribution" />
                            <ComplianceCard title="Regulatory Compliance" desc="Templates aligned with jurisdictional requirements" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ position: 'relative' }}>
                                <Lock size={120} color="#FF6B35" />
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    style={{ position: 'absolute', inset: -20, border: '2px solid #FF6B35', borderRadius: '50%' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* FINAL CTA */}
            <Section padding="xl" style={{ textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: 800 }}>
                    <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, marginBottom: 32 }}>See Administrative <br /> Automation in Action</h2>
                    <p style={{ fontSize: '1.25rem', color: '#4B5563', marginBottom: 48 }}>
                        Watch Broker Agentx generate a loss run request letter and certificate of insurance in under 60 seconds.
                    </p>
                    <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button size="xl" style={{ background: '#FF6B35', border: 'none', borderRadius: '100px', padding: '18px 48px' }}>Get Started</Button>
                        <Button size="xl" variant="outline" style={{ border: '2px solid #E5E7EB', borderRadius: '100px', padding: '18px 48px' }}>Watch Demo</Button>
                    </div>
                </div>
            </Section>
        </div>
    );
}

function AutomationCard({ icon, title, desc }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            style={{ background: 'white', padding: 40, borderRadius: 24, border: '1px solid #E5E7EB' }}
        >
            <div style={{ color: '#FF6B35', marginBottom: 24 }}>{icon}</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>{title}</h3>
            <p style={{ color: '#6B7280', lineHeight: 1.6 }}>{desc}</p>
        </motion.div>
    );
}

function StepCard({ number, title, desc }) {
    return (
        <div style={{ position: 'relative', padding: 24 }}>
            <div style={{ fontSize: '4rem', fontWeight: 900, color: 'rgba(255, 107, 53, 0.1)', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>{number}</div>
            <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 16, marginTop: 40 }}>{title}</h3>
                <p style={{ color: '#6B7280', lineHeight: 1.6 }}>{desc}</p>
            </div>
        </div>
    );
}

function ComplianceCard({ title, desc }) {
    return (
        <div style={{ borderLeft: '2px solid #FF6B35', paddingLeft: 24 }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 8, color: 'white' }}>{title}</h4>
            <p style={{ fontSize: '0.95rem', color: '#9CA3AF', lineHeight: 1.5 }}>{desc}</p>
        </div>
    );
}
