import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Globe, Shield, Activity, BarChart3, Layers } from 'lucide-react';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';

export default function Place() {
    return (
        <div style={{ background: '#FFFFFF' }}>
            {/* 1. HERO SECTION */}
            <Section padding="xl" style={{ paddingTop: '120px', paddingBottom: '100px', background: 'linear-gradient(to bottom, #F8FAFC, #FFFFFF)' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge style={{ background: '#EEF2FF', color: '#4F46E5', marginBottom: '24px' }}>Module 03: Place</Badge>
                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, color: '#111827', marginBottom: '24px' }}>
                            The Market Mesh: <br />
                            <span className="text-primary">Your Direct Uplink.</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#4B5563', marginBottom: '40px', lineHeight: 1.6, maxWidth: '540px' }}>
                            Connect with 500+ carriers instantly. No portals, no re-keying. Wilson handles the mapping, you handle the closing.
                        </p>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <Button size="lg" icon={<ArrowRight />}>Start Placing</Button>
                            <Button size="lg" variant="outline">View Carrier List</Button>
                        </div>
                    </motion.div>

                    {/* Abstract Visualization */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ position: 'relative', height: '500px', background: '#FFFFFF', borderRadius: '32px', border: '1px solid #E5E7EB', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 50%, #EEF2FF 0%, transparent 60%)' }}></div>
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
                            alt="Dashboard Interface"
                            style={{ width: '85%', borderRadius: '16px', boxShadow: '0 20px 40px -4px rgba(0,0,0,0.2)', position: 'relative', zIndex: 10 }}
                        />
                    </motion.div>
                </div>
            </Section>

            {/* 2. CARRIER NETWORK LOGOS */}
            <Section padding="lg" style={{ borderTop: '1px solid #F3F4F6', borderBottom: '1px solid #F3F4F6', background: '#FFFFFF' }}>
                <div className="container">
                    <p style={{ textAlign: 'center', color: '#9CA3AF', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '40px' }}>
                        Direct API Connectivity With
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px 60px', opacity: 0.6, filter: 'grayscale(100%)' }}>
                        {/* Placeholder text logos for now, normally images */}
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1F2937' }}>Travelers</h3>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1F2937' }}>Chubb</h3>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1F2937' }}>Hartford</h3>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1F2937' }}>CNA</h3>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1F2937' }}>Liberty Mutual</h3>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1F2937' }}>Zurich</h3>
                    </div>
                </div>
            </Section>

            {/* 3. FEATURE: APPETITE ENGINE */}
            <Section padding="xl" background="gray">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <div style={{ order: 2 }}>
                            <div style={{ width: '64px', height: '64px', background: '#DCFCE7', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                                <Zap size={32} color="#16A34A" />
                            </div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#111827', marginBottom: '20px' }}>
                                Real-time Appetite Checks.
                            </h2>
                            <p style={{ fontSize: '1.125rem', color: '#4B5563', marginBottom: '32px', lineHeight: 1.6 }}>
                                Stop guessing where to place risks. Wilson scans thousands of carrier appetite guides instantly to tell you exactly who wants the business before you even start the application.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {[
                                    "Instant appetite validation across 500+ classes",
                                    "Decline prediction model to save your time",
                                    "Live carrier responsiveness ratings"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', color: '#374151' }}>
                                        <CheckCircle2 size={20} color="#16A34A" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ order: 1, background: 'white', padding: '40px', borderRadius: '32px', boxShadow: 'var(--shadow-lg)' }}>
                            {/* Simple visual representation of appetite */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: '#F0FDF4', borderRadius: '12px', border: '1px solid #BBF7D0' }}>
                                    <div style={{ fontWeight: 600, color: '#166534' }}>Chubb - Cyber Liability</div>
                                    <Badge color="green">Strong Appetite</Badge>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: '#F0FDF4', borderRadius: '12px', border: '1px solid #BBF7D0' }}>
                                    <div style={{ fontWeight: 600, color: '#166534' }}>Travelers - Tech E&O</div>
                                    <Badge color="green">Auto-Quote</Badge>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: '#FEF2F2', borderRadius: '12px', border: '1px solid #FECACA' }}>
                                    <div style={{ fontWeight: 600, color: '#991B1B' }}>Legacy Mutual - BOP</div>
                                    <Badge color="red">Out of Appetite</Badge>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 4. FEATURE: DIRECT BIND */}
            <Section padding="xl" style={{ background: 'white', paddingBottom: '160px' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <div>
                            <div style={{ width: '64px', height: '64px', background: '#EEF2FF', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                                <Layers size={32} color="#4F46E5" />
                            </div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#111827', marginBottom: '20px' }}>
                                Bind without leaving.
                            </h2>
                            <p style={{ fontSize: '1.125rem', color: '#4B5563', marginBottom: '32px', lineHeight: 1.6 }}>
                                No more portal hopping. Generate quotes, compare coverages, and bind policies directly within Wilson's interface through our secure API mesh.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {[
                                    "Unified application form for multiple markets",
                                    "Side-by-side quote comparison",
                                    "One-click bind & issuance"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1rem', color: '#374151' }}>
                                        <CheckCircle2 size={20} color="#4F46E5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                                alt="Binding Workflow"
                                style={{ borderRadius: '32px', boxShadow: 'var(--shadow-xl)' }}
                            />
                        </div>
                    </div>
                </div>
            </Section>

            {/* 5. STATS GRID */}
            <Section padding="xl" style={{ background: '#111827', color: 'white', paddingTop: '160px', paddingBottom: '160px' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 80px' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '16px', color: 'white' }}>Scale Your Placement</h2>
                        <p style={{ fontSize: '1.125rem', color: '#9CA3AF' }}>Our mesh network handles volume with ease, giving you enterprise-grade capacity.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
                        <StatCard number="2M+" label="Quotes Generated" />
                        <StatCard number="40%" label="Time Saved" />
                        <StatCard number="$2B+" label="Premium Placed" />
                        <StatCard number="0" label="Portals Used" />
                    </div>
                </div>
            </Section>

            {/* 6. CTA */}
            <Section padding="xl" style={{ background: '#F8FAFC', textAlign: 'center', paddingTop: '160px', paddingBottom: '160px' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#111827', marginBottom: '24px' }}>
                        Ready to upgrade your distribution?
                    </h2>
                    <p style={{ fontSize: '1.25rem', color: '#4B5563', marginBottom: '48px' }}>
                        Join the brokerage platform that puts you back in control of placement.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                        <Button size="xl">Get Started Now</Button>
                        <Button size="xl" variant="outline">Schedule Demo</Button>
                    </div>
                </div>
            </Section>
        </div>
    );
}

function StatCard({ number, label }) {
    return (
        <div style={{ padding: '32px', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ fontSize: '3rem', fontWeight: 800, color: 'white', marginBottom: '8px' }}>{number}</div>
            <div style={{ fontSize: '1rem', color: '#9CA3AF', fontWeight: 500 }}>{label}</div>
        </div>
    );
}
