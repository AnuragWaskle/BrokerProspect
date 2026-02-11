import { motion } from 'framer-motion';
import { Users, Target, FileCheck, Zap, Shield, Database, Activity, Eye, Settings, ArrowRight, Play } from 'lucide-react';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import FloatingCard from '../../components/ui/FloatingCard';
import AnimatedCounter from '../../components/ui/AnimatedCounter';
import OrangeFeatureCard from '../../components/ui/OrangeFeatureCard';
import ParticleBackground from '../../components/ui/ParticleBackground';
import styles from '../../styles/responsive.module.css';

export default function GrowingAgencies() {
    return (
        <div style={{ background: '#FFFFFF', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

            {/* HERO SECTION */}
            <Section padding="lg" style={{ position: 'relative', overflow: 'hidden', paddingTop: '140px', background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 50%, #FF4D6D 100%)' }}>
                <ParticleBackground count={15} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className={styles.cardGrid2} style={{ alignItems: 'center' }}>
                        {/* Left: Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, color: 'white', marginBottom: '24px' }}>
                                Scale Without Sacrificing Quality. <br />
                                <span style={{ opacity: 0.9 }}>Standardize Without Losing Speed.</span>
                            </h1>
                            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.6, marginBottom: '40px', maxWidth: '540px' }}>
                                Give every producer consistent workflows and professional outputs—regardless of experience level.
                            </p>
                            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                <Button size="xl" style={{ background: 'white', color: '#FF6B35', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: 'none', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)' }}>
                                    Get Started
                                </Button>
                                <Button size="xl" style={{ background: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: '1px solid rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(10px)' }}>
                                    Request Demo
                                </Button>
                            </div>
                        </motion.div>

                        {/* Right: Multi-User Interface */}
                        <div style={{ position: 'relative' }}>
                            {[0, 1, 2].map((i) => (
                                <FloatingCard key={i} delay={0.3 + i * 0.15}>
                                    <div style={{
                                        background: 'white',
                                        borderRadius: '20px',
                                        padding: '24px',
                                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                                        marginBottom: i < 2 ? '16px' : '0',
                                        transform: `translateX(${i * 20}px)`,
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: `linear-gradient(135deg, ${['#FF6B35', '#FF8C42', '#FF4D6D'][i]} 0%, ${['#FF8C42', '#FF4D6D', '#FF6B35'][i]} 100%)` }} />
                                            <div>
                                                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1A1A1A' }}>Producer {i + 1}</div>
                                                <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>{['Senior', 'Mid-Level', 'New Hire'][i]}</div>
                                            </div>
                                        </div>
                                        <div style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 600 }}>✓ Consistent Quality</div>
                                    </div>
                                </FloatingCard>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* CHALLENGE SECTION */}
            <Section padding="lg">
                <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
                            Inconsistent Processes Kill Growth
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: '#6B7280', lineHeight: 1.6, marginBottom: '60px' }}>
                            You're scaling your team, but every producer works differently. You need systems that scale—not just more people.
                        </p>
                    </motion.div>

                    <div className={styles.cardGridAuto}>
                        {[
                            'Every producer works differently',
                            'New hires take months to ramp',
                            'Senior producers guard processes',
                            'Quality varies across accounts',
                            'Client experience is inconsistent'
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                style={{
                                    background: 'white',
                                    border: '2px solid #FEE2E2',
                                    color: '#DC2626',
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
            <Section padding="lg" background="gray">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', marginBottom: '80px' }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
                            Standardized Workflows Across Your Team
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: '#6B7280', maxWidth: '700px', margin: '0 auto' }}>
                            New producers operate at senior-level quality from day one.
                        </p>
                    </motion.div>

                    <div className={styles.cardGridAuto}>
                        <OrangeFeatureCard
                            icon={<Target size={32} />}
                            title="Consistent Prospecting"
                            description="Every producer uses the same research and outreach process—same quality, every time."
                            delay={0}
                        />
                        <OrangeFeatureCard
                            icon={<FileCheck size={32} />}
                            title="Standardized Analysis"
                            description="Gap analyses and policy reviews follow the same methodology regardless of who's handling the account."
                            delay={0.1}
                        />
                        <OrangeFeatureCard
                            icon={<Zap size={32} />}
                            title="Professional Submissions"
                            description="Applications and narratives maintain consistent quality and professionalism across all producers."
                            delay={0.2}
                        />
                        <OrangeFeatureCard
                            icon={<Shield size={32} />}
                            title="Automated Admin"
                            description="Certificates, letters, and compliance documentation follow agency standards automatically."
                            delay={0.3}
                        />
                    </div>
                </div>
            </Section>

            {/* TEAM MANAGEMENT SECTION */}
            <Section padding="lg">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', marginBottom: '80px' }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
                            Built for Agency Teams
                        </h2>
                    </motion.div>

                    <div className={styles.cardGridAuto}>
                        {[
                            { icon: <Users size={28} />, title: 'Role-Based Access', desc: 'Control which producers access which workflows and client data' },
                            { icon: <Database size={28} />, title: 'Shared Knowledge Base', desc: 'Upload appetite guides once—every producer accesses the same information' },
                            { icon: <Activity size={28} />, title: 'Activity Tracking', desc: 'Monitor workflow usage and productivity across your team' },
                            { icon: <Eye size={28} />, title: 'Quality Control', desc: 'Review agent outputs before they go to clients or carriers' },
                            { icon: <Settings size={28} />, title: 'Centralized Admin', desc: 'Manage billing, users, and settings from a single dashboard' }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                style={{
                                    background: 'white',
                                    borderRadius: '20px',
                                    padding: '32px',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                    textAlign: 'center'
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
                                    margin: '0 auto 20px',
                                    color: 'white'
                                }}>
                                    {feature.icon}
                                </div>
                                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>{feature.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.5, margin: 0 }}>{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* BEFORE/AFTER SECTION */}
            <Section padding="lg" background="gray">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', marginBottom: '80px' }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
                            What Changes for Growing Agencies
                        </h2>
                    </motion.div>

                    <div className={styles.cardGrid2} style={{ margin: '0 auto' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#6B7280', marginBottom: '32px' }}>Before Broker Agentx</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {[
                                    '3-6 months to fully train new producers',
                                    'Inconsistent quality across accounts',
                                    'Senior producers spending time on admin work',
                                    'Growth limited by hiring and training capacity'
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444', marginTop: '8px', flexShrink: 0 }} />
                                        <span style={{ color: '#6B7280', lineHeight: 1.6 }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FF6B35', marginBottom: '32px' }}>After Broker Agentx</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {[
                                    'New producers productive within days',
                                    'Consistent quality and professionalism across all accounts',
                                    'Senior producers focused on relationships and complex risks',
                                    'Scale limited only by client acquisition, not operational capacity'
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', marginTop: '8px', flexShrink: 0 }} />
                                        <span style={{ color: '#1A1A1A', lineHeight: 1.6, fontWeight: 500 }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* PRICING SECTION */}
            <Section padding="lg">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', marginBottom: '60px' }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
                            Team Pricing
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
                            <div style={{ fontSize: '1rem', fontWeight: 600, color: '#FF6B35', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Growing Agency</div>
                            <div style={{ fontSize: '4rem', fontWeight: 800, color: '#1A1A1A', marginBottom: '8px' }}>
                                $<AnimatedCounter value={99} />
                            </div>
                            <div style={{ fontSize: '1.125rem', color: '#6B7280', marginBottom: '32px' }}>per user/month or $999/year (save $189)</div>

                            <div style={{ background: '#FEF3C7', borderRadius: '12px', padding: '16px', marginBottom: '32px' }}>
                                <p style={{ fontSize: '0.95rem', color: '#92400E', margin: 0, fontWeight: 600 }}>
                                    Volume discounts available for teams of 10+ users
                                </p>
                            </div>

                            <div style={{ textAlign: 'left', marginBottom: '40px' }}>
                                {[
                                    'Full platform access for every team member',
                                    'Shared knowledge base and documentation',
                                    'Centralized administration and reporting',
                                    'Dedicated onboarding and training'
                                ].map((feature, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF6B35, #FF8C42)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'white' }} />
                                        </div>
                                        <span style={{ color: '#4B5563' }}>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.cardGrid2}>
                                <Button size="xl" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF4D6D 100%)', color: 'white', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: 'none', flex: 1 }}>
                                    Request Team Demo
                                </Button>
                                <Button size="xl" style={{ background: 'white', color: '#FF6B35', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: '2px solid #FF6B35', flex: 1 }}>
                                    Contact Sales
                                </Button>
                            </div>
                        </div>
                    </FloatingCard>
                </div>
            </Section>

            {/* FINAL CTA */}
            <Section padding="lg" style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)', position: 'relative', overflow: 'hidden' }}>
                <ParticleBackground count={10} />

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: 'white', marginBottom: '24px' }}>
                            Scale Your Agency the Right Way
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6, marginBottom: '48px' }}>
                            See how growing agencies use Broker Agentx to standardize workflows and maintain quality at scale.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Button size="xl" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF4D6D 100%)', color: 'white', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: 'none' }}>
                                Request Demo
                            </Button>
                            <Button size="xl" style={{ background: 'white', color: '#FF6B35', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: 'none' }}>
                                Contact Sales
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </Section>

        </div>
    );
}
