import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

export default function Pricing() {
    const [billing, setBilling] = useState('monthly');

    return (
        <div style={{ background: '#FFFFFF', color: '#111827', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

            {/* 1. HERO SECTION */}
            <Section padding="xl" style={{ paddingTop: '180px', paddingBottom: '120px', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div style={{ fontSize: '1rem', fontWeight: 700, color: '#4F46E5', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 24 }}>Transparent Pricing</div>
                        <h1 style={{ fontSize: 'clamp(4rem, 8vw, 6rem)', fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.03em', marginBottom: '40px', color: '#111827' }}>
                            Scale Your Growth. <br />
                            <span style={{ color: '#4F46E5' }}>Not Your Costs.</span>
                        </h1>
                        <p style={{ fontSize: '1.5rem', color: '#4B5563', maxWidth: '800px', margin: '0 auto 60px', lineHeight: 1.6 }}>
                            Simple, predictable pricing for teams of all sizes. No hidden fees.
                        </p>

                        {/* Billing Toggle */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, marginBottom: 80 }}>
                            <span style={{ fontWeight: 600, color: billing === 'monthly' ? '#111827' : '#9CA3AF' }}>Monthly</span>
                            <div
                                onClick={() => setBilling(billing === 'monthly' ? 'yearly' : 'monthly')}
                                style={{ width: 64, height: 32, background: '#4F46E5', borderRadius: 100, padding: 4, cursor: 'pointer', position: 'relative' }}
                            >
                                <motion.div animate={{ x: billing === 'monthly' ? 0 : 32 }} style={{ width: 24, height: 24, background: 'white', borderRadius: '50%' }} />
                            </div>
                            <span style={{ fontWeight: 600, color: billing === 'yearly' ? '#111827' : '#9CA3AF' }}>Yearly <span style={{ color: '#4F46E5' }}>(Save 20%)</span></span>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* 2. PRICING CARDS */}
            <Section padding="xl" style={{ background: '#F9FAFB', paddingTop: '160px', paddingBottom: '160px' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
                        <PricingCard
                            title="Solo"
                            price={billing === 'monthly' ? '99' : '79'}
                            desc="For independent brokers."
                            features={['All Platform Modules', 'Unlimited Prospecting', 'Verified Contact Data', 'Email Support']}
                        />
                        <PricingCard
                            title="Agency"
                            price={billing === 'monthly' ? '499' : '399'}
                            desc="For teams up to 10."
                            features={['Shared Knowledge Base', 'Centralized Admin', 'Team Reporting', 'Priority Support']}
                            highlighted={true}
                        />
                        <PricingCard
                            title="Enterprise"
                            price="Custom"
                            desc="For large organizations."
                            features={['Custom Integrations', 'On-Premise Deployment', 'Dedicated Manager', 'SLA Guarantees']}
                        />
                    </div>
                </div>
            </Section>

            {/* 3. FINAL CTA */}
            <Section padding="lg" style={{ background: 'white', paddingBottom: 160 }}>
                <div className="container" style={{ maxWidth: 1000 }}>
                    <div style={{
                        background: '#EEF2FF',
                        borderRadius: 32,
                        padding: '80px 40px',
                        textAlign: 'center',
                        border: '1px solid #E0E7FF'
                    }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#111827', marginBottom: 24 }}>Ready to command your growth?</h2>
                        <p style={{ fontSize: '1.25rem', color: '#4B5563', marginBottom: 48, maxWidth: 600, margin: '0 auto 48px' }}>
                            Join 500+ brokers already scaling their agencies with Broker Agentx.
                        </p>
                        <Button size="xl" style={{ background: '#4F46E5', color: 'white', borderRadius: 4, padding: '20px 60px', fontSize: '1.25rem', border: 'none' }}>
                            Start 14-Day Free Trial
                        </Button>
                    </div>
                </div>
            </Section>

        </div>
    );
}

function PricingCard({ title, price, desc, features, highlighted = false }) {
    return (
        <div style={{
            background: highlighted ? '#111827' : 'white',
            color: highlighted ? 'white' : '#111827',
            padding: 60,
            borderRadius: 32,
            border: highlighted ? 'none' : '1px solid #E5E7EB',
            boxShadow: highlighted ? '0 40px 80px -20px rgba(0,0,0,0.2)' : '0 10px 30px rgba(0,0,0,0.02)',
            display: 'flex',
            flexDirection: 'column',
            gap: 32
        }}>
            <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 8 }}>{title}</h3>
                <p style={{ color: highlighted ? '#9CA3AF' : '#6B7280' }}>{desc}</p>
            </div>
            <div style={{ fontSize: '3.5rem', fontWeight: 800 }}>
                {price !== 'Custom' && <span style={{ fontSize: '2rem' }}>$</span>}
                {price}
                {price !== 'Custom' && <span style={{ fontSize: '1.25rem', color: highlighted ? '#9CA3AF' : '#6B7280', fontWeight: 500 }}>/mo</span>}
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontWeight: 500 }}>
                        <div style={{ color: highlighted ? '#818CF8' : '#4F46E5' }}><Check size={20} /></div>
                        {f}
                    </li>
                ))}
            </ul>
            <Button size="lg" style={{
                background: highlighted ? '#4F46E5' : '#111827',
                color: 'white',
                marginTop: 'auto',
                border: 'none',
                padding: '16px 0'
            }}>
                {price === 'Custom' ? 'Contact Sales' : 'Get Started'}
            </Button>
        </div>
    );
}
