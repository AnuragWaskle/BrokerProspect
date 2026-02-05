import { motion } from 'framer-motion';
import { Target, Search, FileCode, CheckCircle2, ShieldCheck, Microscope, Database, FileText, ArrowRight, Layers } from 'lucide-react';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import Tilt from '../../components/ui/Tilt';

export default function SpecialtyBrokers() {
    return (
        <div style={{ background: '#FFFFFF', color: '#111827', minHeight: '100vh' }}>
            {/* 1. HERO SECTION */}
            <Section padding="xl" style={{ position: 'relative', overflow: 'hidden', paddingTop: '40px', paddingBottom: '160px', background: '#FFF7ED' }}>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <Badge style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#D97706', marginBottom: '24px' }}>
                                For Niche & Complex Risk
                            </Badge>
                            <h1 style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: '32px' }}>
                                Precision <br />
                                <span style={{ color: '#F59E0B' }}>Focused.</span>
                            </h1>
                            <p style={{ fontSize: '1.25rem', color: '#4B5563', maxWidth: '540px', marginBottom: '48px', lineHeight: 1.6 }}>
                                For the complex, the non-standard, and the highly specific. Wilson parses the fine print with microscopic accuracy.
                            </p>
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <Button size="lg" style={{ background: '#F59E0B', color: 'white', borderRadius: '100px', border: 'none' }}>
                                    Analyze Complex Risk
                                </Button>
                                <Button variant="outline" size="lg" style={{ borderRadius: '100px' }}>
                                    View Accuracy Reports
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            style={{ position: 'relative' }}
                        >
                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <img
                                    src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1000&auto=format&fit=crop"
                                    style={{ width: '100%', borderRadius: '24px', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.1)' }}
                                    alt="Detailed Analysis"
                                />
                            </div>

                            {/* Overlapping Precision Elements */}
                            <motion.div
                                animate={{ x: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    position: 'absolute', top: '10%', left: '-50px', zIndex: 3,
                                    background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #E5E7EB',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)', width: '220px'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                    <Target size={18} color="#F59E0B" />
                                    <span style={{ fontWeight: 700, fontSize: '0.8rem' }}>Exclusion Identified</span>
                                </div>
                                <div style={{ fontSize: '1.25rem', fontWeight: 900 }}>Clause 4.b(ii)</div>
                            </motion.div>

                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    position: 'absolute', bottom: '-30px', right: '10%', zIndex: 3,
                                    background: '#111827', color: 'white', padding: '20px 32px', borderRadius: '16px',
                                    boxShadow: '0 30px 60px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', gap: '16px', width: '280px'
                                }}
                            >
                                <div style={{ background: '#F59E0B22', padding: '8px', borderRadius: '8px' }}>
                                    <Microscope size={24} color="#F59E0B" />
                                </div>
                                <div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: 900 }}>99.9%</div>
                                    <div style={{ fontSize: '0.7rem', opacity: 0.6, fontWeight: 700, textTransform: 'uppercase' }}>Data Extraction Accuracy</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* 2. PRECISION PILLARS (LIGHT CARDS) */}
            <Section padding="xl" style={{ paddingTop: '160px', paddingBottom: '160px' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 100px' }}>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '24px' }}>Deep Detail. At Scale.</h2>
                        <p style={{ fontSize: '1.25rem', opacity: 0.6 }}>Specialty brokers live and die by the fine print. Wilson is programmed to see exactly what you see, but 10x faster.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
                        <PrecisionCard icon={<Search />} title="Deep-Text" desc="Extract values from non-standard forms instantly." color="#F59E0B" />
                        <PrecisionCard icon={<Target />} title="Risk Mapping" desc="Match complex risks to niche carrier appetites." color="#10B981" />
                        <PrecisionCard icon={<FileCode />} title="Custom Drafting" desc="Generate non-standard endorsements in seconds." color="#3B82F6" />
                    </div>
                </div>
            </Section>

            {/* 3. ACCURACY DATASHEET (BOXED OVERLAP) */}
            <Section padding="xl" style={{ background: '#F8FAFC', paddingTop: '160px', paddingBottom: '160px' }}>
                <div className="container">
                    <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: '48px', padding: '100px', boxShadow: '0 40px 100px -20px rgba(0,0,0,0.05)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '100px', alignItems: 'center' }}>
                            <div>
                                <Badge color="orange" style={{ marginBottom: '24px' }}>Technical Precision</Badge>
                                <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '32px' }}>The Accuracy <br /> Standard.</h2>
                                <p style={{ fontSize: '1.25rem', color: '#4B5563', marginBottom: '40px', lineHeight: 1.6 }}>
                                    Wilson is trained on hundreds of thousands of complex policy documents. It doesn't just "guess"—it understands the underlying intent and identifies high-value gaps.
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <PrecisionItem title="Niche Class Support" desc="Medical malpractice, Cyber, complex GL, and more." />
                                    <PrecisionItem title="Automatic Cross-Check" desc="Compare every quote against the lead submission docs." />
                                    <PrecisionItem title="E&O Reduction" desc="Systematic protection against missed exclusions." />
                                </div>
                            </div>
                            <div style={{ background: '#F8FAFC', padding: '40px', borderRadius: '32px', border: '1px solid #E5E7EB' }}>
                                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#94A3B8', marginBottom: '24px', letterSpacing: '0.1em' }}>PROCESSING METRICS</div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                    <div style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #E5E7EB' }}>
                                        <div style={{ fontSize: '2rem', fontWeight: 900, color: '#F59E0B' }}>{"<"} 30s</div>
                                        <div style={{ fontSize: '0.7rem', fontWeight: 700 }}>Avg Analysis</div>
                                    </div>
                                    <div style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #E5E7EB' }}>
                                        <div style={{ fontSize: '2rem', fontWeight: 900, color: '#10B981' }}>99.9%</div>
                                        <div style={{ fontSize: '0.7rem', fontWeight: 700 }}>Data Fidelity</div>
                                    </div>
                                    <div style={{ background: 'white', padding: '24px', borderRadius: '16px', border: '1px solid #E5E7EB', gridColumn: 'span 2' }}>
                                        <div style={{ fontSize: '2rem', fontWeight: 900, color: '#111827' }}>Zero</div>
                                        <div style={{ fontSize: '0.7rem', fontWeight: 700 }}>E&O Incidents in 2,500+ Reports</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 4. FINAL CTA */}
            <Section padding="xl" style={{ textAlign: 'center', paddingTop: '160px', paddingBottom: '160px' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '32px' }}>Master the complexity.</h2>
                    <Button size="xl" style={{ background: '#F59E0B', color: 'white', borderRadius: '100px', border: 'none', padding: '20px 60px' }}>
                        Start Your Precision Audit
                    </Button>
                </div>
            </Section>
        </div>
    );
}

function PrecisionCard({ icon, title, desc, color }) {
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

function PrecisionItem({ title, desc }) {
    return (
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <CheckCircle2 color="#10B981" size={24} style={{ marginTop: '4px' }} />
            <div>
                <div style={{ fontWeight: 800, fontSize: '1.1rem' }}>{title}</div>
                <div style={{ color: '#6B7280', fontSize: '0.9rem' }}>{desc}</div>
            </div>
        </div>
    );
}
