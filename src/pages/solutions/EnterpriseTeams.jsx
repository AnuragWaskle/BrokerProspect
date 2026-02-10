import { motion } from 'framer-motion';
import { Server, Cloud, Network, Shield, Lock, FileKey, Key, Activity, Code, Headphones, BookOpen, Clock, ArrowRight, Download, Calendar } from 'lucide-react';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import FloatingCard from '../../components/ui/FloatingCard';
import AnimatedCounter from '../../components/ui/AnimatedCounter';
import OrangeFeatureCard from '../../components/ui/OrangeFeatureCard';
import ParticleBackground from '../../components/ui/ParticleBackground';

export default function EnterpriseTeams() {
    return (
        <div style={{ background: '#FFFFFF', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

            {/* HERO SECTION */}
            <Section padding="none" style={{ position: 'relative', overflow: 'hidden', paddingTop: '140px', paddingBottom: '120px', background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 50%, #FF4D6D 100%)' }}>
                <ParticleBackground count={15} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, color: 'white', marginBottom: '24px' }}>
                                Automate at Scale. <br />
                                <span style={{ opacity: 0.9 }}>Deploy with Confidence.</span>
                            </h1>
                            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.6, marginBottom: '40px', maxWidth: '540px' }}>
                                Enterprise-grade automation with on-premises deployment, custom integrations, and dedicated support.
                            </p>
                            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                <Button size="xl" style={{ background: 'white', color: '#FF6B35', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: 'none', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)' }}>
                                    Contact Sales
                                </Button>
                                <Button size="xl" style={{ background: 'rgba(255, 255, 255, 0.2)', color: 'white', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: '1px solid rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(10px)' }}>
                                    Request Demo
                                </Button>
                            </div>
                        </motion.div>

                        <FloatingCard delay={0.3}>
                            <div style={{
                                background: 'white',
                                borderRadius: '24px',
                                padding: '40px',
                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                            }}>
                                <motion.div
                                    animate={{ rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        borderRadius: '20px',
                                        background: 'linear-gradient(135deg, #FF6B35 0%, #FF4D6D 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 24px',
                                        color: 'white'
                                    }}
                                >
                                    <Shield size={40} />
                                </motion.div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1A1A1A', textAlign: 'center', marginBottom: '16px' }}>Enterprise Security</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {['SOC 2 Type II', 'SSO Integration', 'On-Premises Deploy', 'Custom Security'].map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: '#6B7280' }}>
                                            <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#10B981', flexShrink: 0 }} />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FloatingCard>
                    </div>
                </div>
            </Section>

            {/* ENTERPRISE REQUIREMENTS */}
            <Section padding="xl" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
                <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
                            Built for Large-Scale Deployment
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: '#6B7280', lineHeight: 1.6, marginBottom: '60px' }}>
                            You need more than software—you need enterprise capabilities without enterprise complexity.
                        </p>
                    </motion.div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
                        {[
                            'On-premises deployment options to meet data security requirements',
                            'Custom integrations with legacy AMS and proprietary systems',
                            'White-glove implementation and change management support',
                            'Dedicated technical resources and SLAs',
                            'Volume pricing that makes sense at scale'
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                style={{
                                    display: 'flex',
                                    gap: '16px',
                                    alignItems: 'center',
                                    background: 'white',
                                    padding: '20px 24px',
                                    borderRadius: '12px',
                                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                                    border: '1px solid rgba(255, 107, 53, 0.1)'
                                }}
                            >
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF6B35, #FF8C42)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'white' }} />
                                </div>
                                <span style={{ fontSize: '1.05rem', color: '#1A1A1A' }}>{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* DEPLOYMENT OPTIONS */}
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
                            Deployment Options
                        </h2>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                        <OrangeFeatureCard
                            icon={<Server size={32} />}
                            title="On-Premises"
                            description="Deploy Broker Agentx within your own infrastructure—your data never leaves your environment."
                            delay={0}
                        />
                        <OrangeFeatureCard
                            icon={<Cloud size={32} />}
                            title="Private Cloud"
                            description="Dedicated cloud instance with isolated data storage and custom security policies."
                            delay={0.1}
                        />
                        <OrangeFeatureCard
                            icon={<Network size={32} />}
                            title="Hybrid Deployment"
                            description="Critical workflows on-premises, standard workflows in cloud."
                            delay={0.2}
                        />
                    </div>
                </div>
            </Section>

            {/* SECURITY & COMPLIANCE */}
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
                            Security & Compliance
                        </h2>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
                        {[
                            { icon: <Shield size={28} />, title: 'SOC 2 Type II', desc: 'Independently audited security controls' },
                            { icon: <Lock size={28} />, title: 'Role-Based Access', desc: 'Granular permissions and approval workflows' },
                            { icon: <Key size={28} />, title: 'SSO Integration', desc: 'Connect to Okta, Azure AD, etc.' },
                            { icon: <Activity size={28} />, title: 'Audit Logging', desc: 'Track every action and data access' },
                            { icon: <FileKey size={28} />, title: 'Data Isolation', desc: 'Never commingled or used for training' },
                            { icon: <Shield size={28} />, title: 'Custom Security', desc: 'Configure to meet your compliance needs' }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                                style={{
                                    background: 'white',
                                    borderRadius: '16px',
                                    padding: '28px',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                    border: '1px solid rgba(255, 107, 53, 0.1)',
                                    textAlign: 'center'
                                }}
                            >
                                <div style={{
                                    width: '52px',
                                    height: '52px',
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 16px',
                                    color: 'white'
                                }}>
                                    {feature.icon}
                                </div>
                                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>{feature.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.5, margin: 0 }}>{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CUSTOM INTEGRATIONS */}
            <Section padding="xl" style={{ background: '#F9FAFB', paddingTop: '120px', paddingBottom: '120px' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
                                Custom Integrations
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {[
                                    { title: 'Legacy AMS Support', desc: 'Custom connectors for Applied, Epic, Sagitta, or proprietary systems' },
                                    { title: 'API Access', desc: 'Full API documentation for building custom integrations' },
                                    { title: 'Integration Engineers', desc: 'Technical resources to build and maintain enterprise integrations' },
                                    { title: 'Workflow Customization', desc: 'Tailor agent behavior and outputs to match your firm\'s standards' }
                                ].map((item, i) => (
                                    <div key={i} style={{ paddingLeft: '20px', borderLeft: '3px solid #FF6B35' }}>
                                        <div style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>{item.title}</div>
                                        <div style={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.6 }}>{item.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <FloatingCard delay={0.2}>
                            <div style={{
                                background: 'white',
                                borderRadius: '20px',
                                padding: '40px',
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
                            }}>
                                <div style={{ fontSize: '1rem', fontWeight: 600, color: '#FF6B35', marginBottom: '20px' }}>API Integration</div>
                                <div style={{ background: '#F9FAFB', borderRadius: '12px', padding: '20px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#1A1A1A' }}>
                                    <div>{'{'}</div>
                                    <div style={{ paddingLeft: '20px' }}>"endpoint": "/api/v1/prospect",</div>
                                    <div style={{ paddingLeft: '20px' }}>"method": "POST",</div>
                                    <div style={{ paddingLeft: '20px' }}>"auth": "Bearer token"</div>
                                    <div>{'}'}</div>
                                </div>
                            </div>
                        </FloatingCard>
                    </div>
                </div>
            </Section>

            {/* IMPLEMENTATION TIMELINE */}
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
                            Enterprise Implementation Process
                        </h2>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
                        {[
                            { phase: 'Phase 1', title: 'Discovery & Planning', duration: '2-4 weeks', desc: 'Technical requirements, security review, integration planning' },
                            { phase: 'Phase 2', title: 'Deployment & Integration', duration: '4-8 weeks', desc: 'System deployment, custom integrations, security configuration' },
                            { phase: 'Phase 3', title: 'Pilot Rollout', duration: '4-6 weeks', desc: 'Limited user group testing and workflow validation' },
                            { phase: 'Phase 4', title: 'Full Deployment', duration: 'Ongoing', desc: 'Phased rollout across organization with training and support' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                style={{
                                    position: 'relative',
                                    background: 'white',
                                    borderRadius: '20px',
                                    padding: '32px',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                    border: '2px solid rgba(255, 107, 53, 0.15)'
                                }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: '-16px',
                                    left: '32px',
                                    background: 'linear-gradient(135deg, #FF6B35 0%, #FF4D6D 100%)',
                                    color: 'white',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '0.875rem',
                                    fontWeight: 700
                                }}>
                                    {item.phase}
                                </div>
                                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1A1A1A', marginTop: '12px', marginBottom: '8px' }}>{item.title}</div>
                                <div style={{ fontSize: '0.95rem', color: '#FF6B35', fontWeight: 600, marginBottom: '12px' }}>{item.duration}</div>
                                <p style={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* ENTERPRISE SUPPORT */}
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
                            Enterprise Support
                        </h2>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
                        {[
                            { icon: <Headphones size={28} />, title: 'Dedicated Account Team', desc: 'Named technical account manager and support engineer' },
                            { icon: <Clock size={28} />, title: 'Priority Support SLAs', desc: 'Guaranteed response times for critical issues' },
                            { icon: <BookOpen size={28} />, title: 'White-Glove Onboarding', desc: 'Structured implementation with change management' },
                            { icon: <Code size={28} />, title: 'Training & Enablement', desc: 'Custom training programs for your team' },
                            { icon: <Calendar size={28} />, title: 'Business Reviews', desc: 'Quarterly strategy sessions to optimize ROI' }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                style={{
                                    background: 'white',
                                    borderRadius: '16px',
                                    padding: '24px',
                                    textAlign: 'center'
                                }}
                            >
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 16px',
                                    color: 'white'
                                }}>
                                    {feature.icon}
                                </div>
                                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>{feature.title}</h3>
                                <p style={{ fontSize: '0.875rem', color: '#6B7280', lineHeight: 1.5, margin: 0 }}>{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* PRICING CTA */}
            <Section padding="xl" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
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
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
                                Custom Enterprise Pricing
                            </h2>
                            <p style={{ fontSize: '1.125rem', color: '#6B7280', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
                                Pricing based on number of users, deployment model, integration complexity, and support requirements.
                            </p>

                            <div style={{ background: '#FEF3C7', borderRadius: '12px', padding: '20px', marginBottom: '40px' }}>
                                <p style={{ fontSize: '1rem', color: '#92400E', margin: 0, fontWeight: 600 }}>
                                    Volume discounts start at 20 users
                                </p>
                            </div>

                            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Button size="xl" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF4D6D 100%)', color: 'white', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: 'none' }}>
                                    Request Enterprise Quote
                                </Button>
                                <Button size="xl" style={{ background: 'white', color: '#FF6B35', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: '2px solid #FF6B35' }}>
                                    <Calendar size={20} style={{ marginRight: '8px' }} /> Schedule Consultation
                                </Button>
                            </div>
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
                            Ready for Enterprise Automation?
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6, marginBottom: '48px' }}>
                            Schedule a technical consultation to discuss your requirements and see Broker Agentx in your environment.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Button size="xl" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF4D6D 100%)', color: 'white', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: 'none' }}>
                                <Calendar size={20} style={{ marginRight: '8px' }} /> Schedule Consultation
                            </Button>
                            <Button size="xl" style={{ background: 'white', color: '#FF6B35', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: 'none' }}>
                                <Download size={20} style={{ marginRight: '8px' }} /> Download Enterprise Overview
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </Section>

        </div>
    );
}
