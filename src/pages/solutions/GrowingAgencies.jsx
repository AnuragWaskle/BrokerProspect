import { motion } from 'framer-motion';
import { Check, Users, Shield, BarChart3, Settings, Layers, Zap, ArrowRight, Share2 } from 'lucide-react';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import Tilt from '../../components/ui/Tilt';

export default function GrowingAgencies() {
    return (
        <div style={{ background: '#FFFFFF', color: '#111827', minHeight: '100vh' }}>
            {/* 1. HERO SECTION */}
            <Section padding="xl" style={{ position: 'relative', overflow: 'hidden', paddingTop: '80px', paddingBottom: '160px', background: '#F0FDFA' }}>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 1.2fr', gap: '80px', alignItems: 'center' }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <Badge style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#059669', marginBottom: '24px' }}>
                                For Scaling Brokerages
                            </Badge>
                            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '32px' }}>
                                Scaling Without <br />
                                <span style={{ color: '#10B981' }}>The Complexity.</span>
                            </h1>
                            <p style={{ fontSize: '1.25rem', color: '#4B5563', maxWidth: '540px', marginBottom: '48px', lineHeight: 1.6 }}>
                                Wilson unifies your team's technical workflows, enabling your agency to process 5x more business with your existing headcount.
                            </p>
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <Button size="lg" style={{ background: '#10B981', color: 'white', borderRadius: '100px', border: 'none' }}>
                                    Scale Your Agency
                                </Button>
                                <Button variant="outline" size="lg" style={{ borderRadius: '100px' }}>
                                    Request Corporate Demo
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            style={{ position: 'relative' }}
                        >
                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
                                    style={{ width: '100%', borderRadius: '24px', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.1)' }}
                                    alt="Team Collaboration"
                                />
                            </div>

                            {/* Overlapping Status Elements */}
                            <motion.div
                                animate={{ x: [0, 15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    position: 'absolute', top: '20%', right: '-30px', zIndex: 3,
                                    background: 'white', padding: '20px', borderRadius: '12px',
                                    boxShadow: '0 15px 30px rgba(0,0,0,0.08)', borderLeft: '4px solid #10B981'
                                }}
                            >
                                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#6B7280', marginBottom: '4px' }}>TEAM THROUGHPUT</div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>+42% Growth</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                style={{
                                    position: 'absolute', bottom: '-20px', left: '10%', zIndex: 3,
                                    background: '#111827', color: 'white', padding: '16px 24px', borderRadius: '100px',
                                    display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                                }}
                            >
                                <Share2 size={20} color="#10B981" />
                                <span style={{ fontWeight: 600 }}>Standardized Review Library</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* 2. OPERATIONAL PILLARS (LIGHT MESH) */}
            <Section padding="xl" style={{ paddingTop: '160px', paddingBottom: '160px' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 100px' }}>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '24px' }}>Unified Operations.</h2>
                        <p style={{ fontSize: '1.25rem', opacity: 0.6 }}>Standardize your agency's knowledge. Ensure every broker operates with the same technical precision and institutional insight.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
                        <ScaleCard icon={<Users />} title="Team Collab" desc="Unified views for brokers and account managers." color="#10B981" />
                        <ScaleCard icon={<Layers />} title="Process Sync" desc="Automated workflows that follow your specific corporate SOPs." color="#3B82F6" />
                        <ScaleCard icon={<BarChart3 />} title="Revenue Insights" desc="Macro dashboard for leadership to track agency wide production." color="#F59E0B" />
                    </div>
                </div>
            </Section>

            {/* 3. CASE STUDY FOCUS */}
            <Section padding="xl" style={{ background: '#F9FAFB', paddingTop: '160px', paddingBottom: '160px' }}>
                <div className="container">
                    <div style={{ background: 'white', borderRadius: '48px', padding: '100px', border: '1px solid #E5E7EB', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center', boxShadow: '0 40px 120px -40px rgba(0,0,0,0.05)' }}>
                        <div>
                            <Badge color="green" style={{ marginBottom: '24px' }}>The Result</Badge>
                            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '32px' }}>"It's like having a <br /> second brain for <br /> the entire team."</h2>
                            <p style={{ fontSize: '1.25rem', color: '#4B5563', marginBottom: '40px', fontStyle: 'italic' }}>
                                "Wilson allowed our producers to focus on complex account strategy while the system handled the administrative heavy lifting. Our close rates have never been higher."
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', fontWeight: 900 }}>D</div>
                                <div>
                                    <div style={{ fontWeight: 800, color: '#111827' }}>David Chen</div>
                                    <div style={{ color: '#6B7280', fontSize: '0.9rem' }}>Principal at Nexus Brokers</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div style={{ display: 'grid', gap: '24px' }}>
                                <StatCard value="40%" label="Reduction in Admin" />
                                <StatCard value="2x" label="Submission Volume" />
                                <StatCard value="Zero" label="Headcount Increase" />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 4. FINAL CTA */}
            <Section padding="xl" style={{ textAlign: 'center', paddingTop: '160px', paddingBottom: '160px' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '32px' }}>Build for a scalable future.</h2>
                    <Button size="xl" style={{ background: '#10B981', color: 'white', borderRadius: '100px', padding: '20px 60px' }}>
                        Book Your Team Training
                    </Button>
                </div>
            </Section>
        </div>
    );
}

function ScaleCard({ icon, title, desc, color }) {
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

function StatCard({ value, label }) {
    return (
        <div style={{ background: '#FFFFFF', padding: '32px 40px', borderRadius: '24px', border: '1px solid #E5E7EB', boxShadow: '0 10px 20px rgba(0,0,0,0.02)', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#10B981' }}>{value}</div>
            <div style={{ fontWeight: 700, opacity: 0.6, fontSize: '0.9rem', textTransform: 'uppercase' }}>{label}</div>
        </div>
    );
}
