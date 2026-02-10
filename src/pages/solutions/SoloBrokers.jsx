import { motion } from 'framer-motion';
import { TrendingUp, FileSearch, Send, FileCheck, ArrowRight, Play } from 'lucide-react';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import FloatingCard from '../../components/ui/FloatingCard';
import AnimatedCounter from '../../components/ui/AnimatedCounter';
import OrangeFeatureCard from '../../components/ui/OrangeFeatureCard';
import ParticleBackground from '../../components/ui/ParticleBackground';

export default function SoloBrokers() {
    return (
        <div style={{ background: '#FFFFFF', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

            {/* HERO SECTION */}
            <Section padding="none" style={{ position: 'relative', overflow: 'hidden', paddingTop: '140px', paddingBottom: '120px', background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 50%, #FF4D6D 100%)' }}>
                <ParticleBackground count={15} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                        {/* Left: Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, color: 'white', marginBottom: '24px' }}>
                                Compete Like a Full Agency. <br />
                                <span style={{ opacity: 0.9 }}>Operate Like a Pro.</span>
                            </h1>
                            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.6, marginBottom: '40px', maxWidth: '540px' }}>
                                Handle prospecting, policy review, and submissions with the efficiency of a 10-person team—while staying independent.
                            </p>
                            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                <Button size="xl" style={{ background: 'white', color: '#FF6B35', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: 'none', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)' }}>
                                    Get Started
                                </Button>
                                <Button size="xl" style={{ background: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: '1px solid rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(10px)' }}>
                                    <Play size={20} style={{ marginRight: '8px' }} /> Watch Demo
                                </Button>
                            </div>
                        </motion.div>

                        {/* Right: Floating Card */}
                        <FloatingCard delay={0.3}>
                            <div style={{
                                background: 'white',
                                borderRadius: '24px',
                                padding: '40px',
                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                            }}>
                                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#FF6B35', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Solo Broker Dashboard</div>
                                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '24px' }}>Your Virtual Team</div>

                                {/* Mock Stats */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    {[
                                        { label: 'Prospects', value: '47', color: '#FF6B35' },
                                        { label: 'Reviews', value: '23', color: '#FF8C42' },
                                        { label: 'Submissions', value: '12', color: '#FF4D6D' },
                                        { label: 'Time Saved', value: '18h', color: '#FF6B35' }
                                    ].map((stat, i) => (
                                        <div key={i} style={{ background: '#F9FAFB', borderRadius: '12px', padding: '16px' }}>
                                            <div style={{ fontSize: '1.75rem', fontWeight: 700, color: stat.color }}>{stat.value}</div>
                                            <div style={{ fontSize: '0.875rem', color: '#6B7280' }}>{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FloatingCard>
                    </div>
                </div>
            </Section>

            {/* CHALLENGE SECTION */}
            <Section padding="xl" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
                <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
                            You're Competing Against Full Teams
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: '#6B7280', lineHeight: 1.6, marginBottom: '60px' }}>
                            As a solo broker, you're doing it all. Larger agencies have teams handling each function. You have yourself. But you're faster than you think—you just need the right leverage.
                        </p>
                    </motion.div>

                    {/* Challenge Icons */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                        {[
                            'Prospecting & BDR',
                            'Policy Review',
                            'Carrier Submissions',
                            'Client Service',
                            'Admin & Compliance'
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                style={{
                                    background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                                    color: 'white',
                                    padding: '20px',
                                    borderRadius: '16px',
                                    fontSize: '0.95rem',
                                    fontWeight: 600,
                                    textAlign: 'center'
                                }}
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* FEATURES SECTION */}
            <Section padding="xl" style={{ background: '#F9FAFB', paddingTop: '120px', paddingBottom: '120px' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', marginBottom: '80px' }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
                            Your Virtual Operations Team
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: '#6B7280', maxWidth: '700px', margin: '0 auto' }}>
                            All for $99/month—less than a single hire.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
                        <OrangeFeatureCard
                            icon={<TrendingUp size={32} />}
                            title="Growth & Prospecting"
                            description="Research prospects, identify contacts, generate outreach—like having a dedicated BDR."
                            delay={0}
                        />
                        <OrangeFeatureCard
                            icon={<FileSearch size={32} />}
                            title="Policy Analysis"
                            description="Review policies, identify gaps, build comparisons—like having a technical analyst."
                            delay={0.1}
                        />
                        <OrangeFeatureCard
                            icon={<Send size={32} />}
                            title="Submissions"
                            description="Pre-fill applications, write narratives, match carriers—like having a placement specialist."
                            delay={0.2}
                        />
                        <OrangeFeatureCard
                            icon={<FileCheck size={32} />}
                            title="Administrative Support"
                            description="Generate certificates, draft letters, handle compliance—like having an operations assistant."
                            delay={0.3}
                        />
                    </div>
                </div>
            </Section>

            {/* BEFORE/AFTER SECTION */}
            <Section padding="xl" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', marginBottom: '80px' }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
                            What Changes for Solo Brokers
                        </h2>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', maxWidth: '1100px', margin: '0 auto' }}>
                        {/* Before */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#6B7280', marginBottom: '32px' }}>Before Broker Agentx</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {[
                                    '2-3 hours per prospect researching and crafting outreach',
                                    'Full afternoons reviewing policies manually',
                                    'Fridays consumed by application prep',
                                    'Evenings catching up on admin work'
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444', marginTop: '8px', flexShrink: 0 }} />
                                        <span style={{ color: '#6B7280', lineHeight: 1.6 }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* After */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FF6B35', marginBottom: '32px' }}>After Broker Agentx</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {[
                                    '3 minutes to build complete prospect profiles with outreach',
                                    '90 seconds to analyze policies and identify gaps',
                                    '10 minutes to generate complete carrier submissions',
                                    'Administrative tasks handled automatically'
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', marginTop: '8px', flexShrink: 0 }} />
                                        <span style={{ color: '#1A1A1A', lineHeight: 1.6, fontWeight: 500 }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ textAlign: 'center', marginTop: '60px' }}
                    >
                        <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FF6B35' }}>
                            Result: More time selling. Better client service. Competitive advantage.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* PRICING SECTION */}
            <Section padding="xl" style={{ background: '#F9FAFB', paddingTop: '120px', paddingBottom: '120px' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', marginBottom: '60px' }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
                            Simple, Transparent Pricing
                        </h2>
                    </motion.div>

                    <FloatingCard>
                        <div style={{
                            background: 'white',
                            borderRadius: '24px',
                            padding: '60px',
                            boxShadow: '0 10px 40px rgba(255, 107, 53, 0.15)',
                            border: '2px solid',
                            borderImage: 'linear-gradient(135deg, #FF6B35, #FF4D6D) 1',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: '1rem', fontWeight: 600, color: '#FF6B35', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Solo Broker</div>
                            <div style={{ fontSize: '4rem', fontWeight: 800, color: '#1A1A1A', marginBottom: '8px' }}>
                                $<AnimatedCounter value={99} />
                            </div>
                            <div style={{ fontSize: '1.125rem', color: '#6B7280', marginBottom: '32px' }}>per month or $999/year (save $189)</div>

                            <div style={{ textAlign: 'left', marginBottom: '40px' }}>
                                <div style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '20px' }}>Full platform access—all features included:</div>
                                {[
                                    'Unlimited prospecting and enrichment',
                                    'Unlimited policy reviews and gap analyses',
                                    'Unlimited application pre-fills and narratives',
                                    'All administrative workflow automation',
                                    'Connected to your existing tools'
                                ].map((feature, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF6B35, #FF8C42)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'white' }} />
                                        </div>
                                        <span style={{ color: '#4B5563' }}>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <p style={{ fontSize: '1rem', color: '#6B7280', marginBottom: '32px' }}>No per-task fees. No usage limits. No hidden costs.</p>

                            <Button size="xl" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF4D6D 100%)', color: 'white', borderRadius: '12px', padding: '18px 48px', fontSize: '1.125rem', fontWeight: 600, border: 'none', width: '100%' }}>
                                Get Started <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                            </Button>
                        </div>
                    </FloatingCard>
                </div>
            </Section>

            {/* FINAL CTA */}
            <Section padding="xl" style={{ paddingTop: '120px', paddingBottom: '120px', background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)', position: 'relative', overflow: 'hidden' }}>
                <ParticleBackground count={10} />

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: 'white', marginBottom: '24px' }}>
                            Start Operating Like a Full Team
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6, marginBottom: '48px' }}>
                            See how solo brokers use Broker Agentx to compete with larger agencies.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Button size="xl" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF4D6D 100%)', color: 'white', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: 'none' }}>
                                <Play size={20} style={{ marginRight: '8px' }} /> Watch Demo
                            </Button>
                            <Button size="xl" style={{ background: 'white', color: '#FF6B35', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: 'none' }}>
                                Get Started
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </Section>

        </div>
    );
}
