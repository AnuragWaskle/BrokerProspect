import { motion } from 'framer-motion';
import { Cpu, Building, Heart, Factory, Briefcase, Leaf, Target, Search, Network, FileText, Database, ArrowRight, Play } from 'lucide-react';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import FloatingCard from '../../components/ui/FloatingCard';
import AnimatedCounter from '../../components/ui/AnimatedCounter';
import OrangeFeatureCard from '../../components/ui/OrangeFeatureCard';
import ParticleBackground from '../../components/ui/ParticleBackground';
import styles from '../../styles/responsive.module.css';

export default function SpecialtyBrokers() {
    return (
        <div style={{ background: '#FFFFFF', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>

            {/* HERO SECTION */}
            <Section padding="lg" style={{ position: 'relative', overflow: 'hidden', paddingTop: '140px', background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 50%, #FF4D6D 100%)' }}>
                <ParticleBackground count={15} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className={styles.cardGrid2} style={{ alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, color: 'white', marginBottom: '24px' }}>
                                Handle Complex Risks with Precision. <br />
                                <span style={{ opacity: 0.9 }}>Automate Specialized Workflows.</span>
                            </h1>
                            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: 1.6, marginBottom: '40px', maxWidth: '540px' }}>
                                From construction to cyber to healthcare—Broker Agentx understands your niche and accelerates your placement process.
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

                        <div className={styles.cardGrid2}>
                            {[
                                { icon: <Cpu size={24} />, label: 'Tech E&O', color: '#FF6B35' },
                                { icon: <Building size={24} />, label: 'Construction', color: '#FF8C42' },
                                { icon: <Heart size={24} />, label: 'Healthcare', color: '#FF4D6D' },
                                { icon: <Factory size={24} />, label: 'Manufacturing', color: '#FF6B35' }
                            ].map((item, i) => (
                                <FloatingCard key={i} delay={0.2 + i * 0.1}>
                                    <div style={{
                                        background: 'white',
                                        borderRadius: '16px',
                                        padding: '24px',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                                        textAlign: 'center'
                                    }}>
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '12px',
                                            background: `linear-gradient(135deg, ${item.color} 0%, #FF8C42 100%)`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 12px',
                                            color: 'white'
                                        }}>
                                            {item.icon}
                                        </div>
                                        <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1A1A1A' }}>{item.label}</div>
                                    </div>
                                </FloatingCard>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* SPECIALTY EXPERTISE */}
            <Section padding="lg">
                <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
                            Built to Handle Complexity
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: '#6B7280', lineHeight: 1.6, marginBottom: '60px' }}>
                            Specialty lines require deep knowledge. Broker Agentx handles the complexity while you focus on the relationship.
                        </p>
                    </motion.div>

                    <div className={styles.cardGridAuto}>
                        {[
                            'Understanding niche exposures',
                            'Specialized policy forms',
                            'Limited carrier markets',
                            'Technical underwriter communication'
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

            {/* SPECIALTY LINES GRID */}
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
                            Specialized Knowledge Across Lines
                        </h2>
                    </motion.div>

                    <div className={styles.cardGridAuto}>
                        <OrangeFeatureCard
                            icon={<Cpu size={32} />}
                            title="Technology E&O & Cyber"
                            description="Understand SaaS, managed services, and software development risks. Extract cyber coverage details and identify gaps."
                            delay={0}
                        />
                        <OrangeFeatureCard
                            icon={<Building size={32} />}
                            title="Construction & Contractors"
                            description="Process complex project-based exposures, subcontractor risks, and wrap-up programs. Generate COPE data."
                            delay={0.1}
                        />
                        <OrangeFeatureCard
                            icon={<Heart size={32} />}
                            title="Healthcare & Life Sciences"
                            description="Navigate professional liability, HIPAA compliance, and specialized medical malpractice requirements."
                            delay={0.2}
                        />
                        <OrangeFeatureCard
                            icon={<Factory size={32} />}
                            title="Manufacturing & Products"
                            description="Analyze supply chain exposures, product liability, and quality control requirements across distribution."
                            delay={0.3}
                        />
                        <OrangeFeatureCard
                            icon={<Briefcase size={32} />}
                            title="Professional Services"
                            description="Handle E&O exposures for consultants, engineers, and advisory firms across complex client engagements."
                            delay={0.4}
                        />
                        <OrangeFeatureCard
                            icon={<Leaf size={32} />}
                            title="Environmental & Pollution"
                            description="Process contamination risks, remediation exposures, and regulatory compliance requirements."
                            delay={0.5}
                        />
                    </div>
                </div>
            </Section>

            {/* SPECIALTY WORKFLOWS */}
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
                            Purpose-Built for Your Niche
                        </h2>
                    </motion.div>

                    <div className={styles.cardGridAuto}>
                        {[
                            { icon: <Target size={28} />, title: 'Custom Risk Profiling', desc: 'Agents understand industry-specific exposures and coverage requirements' },
                            { icon: <Search size={28} />, title: 'Specialized Gap Analysis', desc: 'Identify coverage gaps specific to your niche—not generic recommendations' },
                            { icon: <Network size={28} />, title: 'Niche Carrier Matching', desc: 'Match complex risks to your specialized carrier relationships and appetite guides' },
                            { icon: <FileText size={28} />, title: 'Technical Narratives', desc: 'Generate underwriter-ready narratives that demonstrate risk understanding' }
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

            {/* KNOWLEDGE BASE */}
            <Section padding="lg" background="gray">
                <div className="container">
                    <div className={styles.cardGrid2} style={{ alignItems: 'center' }}>
                        <FloatingCard delay={0.2}>
                            <div style={{
                                background: 'white',
                                borderRadius: '20px',
                                padding: '40px',
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
                            }}>
                                <div style={{ fontSize: '1rem', fontWeight: 600, color: '#FF6B35', marginBottom: '20px' }}>Knowledge Base</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {['Appetite Guides', 'Coverage Forms', 'Underwriting Guidelines', 'Internal Playbooks'].map((doc, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                                            style={{
                                                background: '#F9FAFB',
                                                borderRadius: '8px',
                                                padding: '12px 16px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px'
                                            }}
                                        >
                                            <Database size={20} style={{ color: '#FF6B35' }} />
                                            <span style={{ fontSize: '0.95rem', color: '#1A1A1A' }}>{doc}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </FloatingCard>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
                                Train Agents on Your Expertise
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {[
                                    { title: 'Upload Your Documentation', desc: 'Import carrier appetite guides, underwriting guidelines, coverage forms, and internal playbooks' },
                                    { title: 'Industry-Specific Context', desc: 'Agents pull from your knowledge base to deliver accurate, niche-specific recommendations' },
                                    { title: 'Continuous Learning', desc: 'As you add documentation, agents automatically access updated information' },
                                    { title: 'Preserve Institutional Knowledge', desc: 'Capture and standardize your team\'s expertise across all producers' }
                                ].map((item, i) => (
                                    <div key={i} style={{ paddingLeft: '20px', borderLeft: '3px solid #FF6B35' }}>
                                        <div style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>{item.title}</div>
                                        <div style={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.6 }}>{item.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* BEFORE/AFTER SECTION */}
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
                            What Changes for Specialty Brokers
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
                                    'Hours researching complex exposures and coverage forms',
                                    'Manually cross-referencing policy language against client operations',
                                    'Building technical narratives from scratch for every submission',
                                    'Tracking carrier appetite across limited specialty markets'
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
                                    'Automated risk profiling based on industry-specific exposures',
                                    'Instant policy analysis with niche-aware gap identification',
                                    'Technical narratives generated with proper terminology and context',
                                    'Carrier matching based on your specialty market relationships'
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
                            Result: Handle complex risks faster without sacrificing quality.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* PRICING SECTION */}
            <Section padding="lg" background="gray">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', marginBottom: '60px' }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
                            Specialty Broker Pricing
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
                            <div style={{ fontSize: '1rem', fontWeight: 600, color: '#FF6B35', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Specialty Broker</div>
                            <div style={{ fontSize: '4rem', fontWeight: 800, color: '#1A1A1A', marginBottom: '8px' }}>
                                $<AnimatedCounter value={99} />
                            </div>
                            <div style={{ fontSize: '1.125rem', color: '#6B7280', marginBottom: '32px' }}>per user/month or $999/year (save $189)</div>

                            <div style={{ textAlign: 'left', marginBottom: '40px' }}>
                                <div style={{ fontSize: '1.125rem', fontWeight: 600, color: '#1A1A1A', marginBottom: '20px' }}>Full platform access plus:</div>
                                {[
                                    'Custom knowledge base for your specialty documentation',
                                    'Industry-specific risk profiling',
                                    'Specialized gap analysis methodology',
                                    'Technical narrative generation for your niche'
                                ].map((feature, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF6B35, #FF8C42)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'white' }} />
                                        </div>
                                        <span style={{ color: '#4B5563' }}>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: '12px' }}>
                                <Button size="xl" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF4D6D 100%)', color: 'white', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: 'none', flex: 1 }}>
                                    Get Started <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                                </Button>
                                <Button size="xl" style={{ background: 'white', color: '#FF6B35', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: '2px solid #FF6B35', flex: 1 }}>
                                    Request Demo
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
                            See Specialty Automation in Action
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: 1.6, marginBottom: '48px' }}>
                            Watch Broker Agentx handle a complex specialty risk—from exposure analysis to carrier-ready submission.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Button size="xl" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF4D6D 100%)', color: 'white', borderRadius: '12px', padding: '18px 36px', fontSize: '1.125rem', fontWeight: 600, border: 'none' }}>
                                Request Demo
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
