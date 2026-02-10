import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
    Search, Users, Mail, TrendingUp, ArrowRight, Play, CheckCircle,
    MessageSquare, Zap, Shield, FileCheck, Calculator, FileText,
    Globe, Cpu, Database, BarChart3, Lock, Sparkles, Award
} from 'lucide-react';

import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import FloatingCard from '../components/ui/FloatingCard';
import ParticleBackground from '../components/ui/ParticleBackground';
import Floating3DShape, { ScrollReveal3D, Parallax3DElement, Rotating3DCard } from '../components/ui/3DAnimations';
import AnimatedBlob, { PulsingOrb } from '../components/ui/AnimatedBlob';
import Marquee from '../components/ui/Marquee';
import AgentUserChat from '../components/ui/AgentUserChat';
import styles from '../styles/responsive.module.css';

export default function Home() {
    return (
        <div style={{ background: '#FFFFFF', color: '#111827', overflowX: 'hidden' }}>

            {/* 1. HERO SECTION */}
            <Section padding="none" style={{ position: 'relative', paddingTop: '120px', paddingBottom: '100px', overflow: 'hidden' }}>
                <Floating3DShape shape="circle" size={400} top="-10%" right="-5%" color="rgba(255, 107, 53, 0.05)" blur={60} />
                <Floating3DShape shape="rounded" size={300} bottom="10%" left="-5%" color="rgba(79, 70, 229, 0.05)" blur={60} />
                <AnimatedBlob size={500} top="20%" left="50%" opacity={0.03} />
                <PulsingOrb size={150} top="15%" left="15%" opacity={0.2} />

                <div className="container">
                    <div className={styles.heroGrid}>
                        <ScrollReveal3D direction="left">
                            <div style={{ paddingTop: '40px' }}>
                                <Badge style={{ marginBottom: '24px' }}>Introducing Broker Agentx</Badge>
                                <h1 style={{
                                    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                                    fontWeight: 800,
                                    lineHeight: 1.1,
                                    marginBottom: '24px',
                                    letterSpacing: '-0.02em'
                                }}>
                                    The AI-native <br />
                                    <span style={{
                                        background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                                    }}>brokerage platform</span>
                                </h1>
                                <p style={{
                                    fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                                    color: '#4B5563',
                                    marginBottom: '40px',
                                    maxWidth: '540px',
                                    lineHeight: 1.5
                                }}>
                                    Transform your brokerage into a connected knowledge system—one that learns, optimizes, and improves itself intelligently.
                                </p>
                                <div className={styles.buttonGroup}>
                                    <Button size="xl" style={{ background: '#111827', border: 'none' }}>Start for free</Button>
                                    <Button size="xl" variant="outline">Talk to us</Button>
                                </div>
                            </div>
                        </ScrollReveal3D>

                        <ScrollReveal3D direction="right" delay={0.2}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                                <Parallax3DElement speed={-0.2}>
                                    <AgentUserChat />
                                </Parallax3DElement>

                                {/* Background accents for hero visual */}
                                <div style={{
                                    position: 'absolute',
                                    width: '120%',
                                    height: '120%',
                                    background: 'radial-gradient(circle, rgba(255,107,53,0.1) 0%, rgba(255,255,255,0) 70%)',
                                    zIndex: -1
                                }} />
                            </div>
                        </ScrollReveal3D>
                    </div>
                </div>
            </Section>

            {/* 2. LOGO MARQUEE */}
            <Section padding="xs" style={{ borderTop: '1px solid #F3F4F6', borderBottom: '1px solid #F3F4F6', background: '#FAFAFA' }}>
                <div className="container" style={{ overflow: 'hidden' }}>
                    <Marquee speed={30} pauseOnHover={true}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '80px', opacity: 0.5, filter: 'grayscale(100%)', padding: '10px 0' }}>
                            <span style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '2px' }}>TRANSURE</span>
                            <span style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '2px' }}>FEDEX</span>
                            <span style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '2px' }}>AMAZON</span>
                            <span style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '2px' }}>ZOOM</span>
                            <span style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '2px' }}>NVIDIA</span>
                            <span style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '2px' }}>SHOPIFY</span>
                            <span style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '2px' }}>GITHUB</span>
                            <span style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '2px' }}>STRIPE</span>
                        </div>
                    </Marquee>
                </div>
            </Section>

            {/* 3. CORE FEATURE SHOWCASE */}
            <Section style={{ position: 'relative' }}>
                <Floating3DShape shape="square" size={100} top="20%" right="10%" color="rgba(255,107,53,0.1)" />
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <ScrollReveal3D direction="up">
                            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '20px' }}>
                                Intelligence that scales <br /> with your business
                            </h2>
                            <p style={{ color: '#4B5563', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                                Build a brokerage that intelligently syncs with your workflow, and is automatically optimized for growth.
                            </p>
                        </ScrollReveal3D>
                    </div>

                    <div className={styles.cardGrid2} style={{ gap: '40px' }}>
                        <ScrollReveal3D direction="left">
                            <Rotating3DCard>
                                <div style={{ background: '#F9FAFB', borderRadius: '32px', padding: '48px', height: '100%', border: '1px solid #F3F4F6' }}>
                                    <Badge style={{ background: '#FF6B35', border: 'none', marginBottom: '24px', opacity: 0.8 }}>BROKER AGENTX</Badge>
                                    <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '16px' }}>Your clients and data, <br /> in sync (finally)</h3>
                                    <p style={{ color: '#4B5563', marginBottom: '32px' }}>
                                        Broker Agentx monitors your clients, proactively suggesting improvements to ensure your clients find answers, up-to-date data every time.
                                    </p>
                                    <Button variant="outline" style={{ borderRadius: '100px' }}>Explore Intelligence</Button>
                                </div>
                            </Rotating3DCard>
                        </ScrollReveal3D>

                        <ScrollReveal3D direction="right">
                            <Rotating3DCard>
                                <div style={{ background: '#F9FAFB', borderRadius: '32px', padding: '48px', height: '100%', border: '1px solid #F3F4F6' }}>
                                    <Badge style={{ background: '#111827', border: 'none', marginBottom: '24px', opacity: 0.8 }}>AUTOMATION</Badge>
                                    <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '16px' }}>Built for humans, <br /> optimized for AI</h3>
                                    <p style={{ color: '#4B5563', marginBottom: '32px' }}>
                                        Make sure your business gets monitored by AI agents like ChatGPT, Claude, and Gemini with built-in MCP support.
                                    </p>
                                    <Button variant="outline" style={{ borderRadius: '100px' }}>Learn More</Button>
                                </div>
                            </Rotating3DCard>
                        </ScrollReveal3D>
                    </div>
                </div>
            </Section>

            {/* 4. PLATFORM DISCOVERY (DARK SECTION) */}
            <Section style={{ background: '#0F172A', color: 'white', position: 'relative', overflow: 'hidden', padding: '120px 0' }}>
                <ParticleBackground count={20} />
                <Floating3DShape shape="rounded" size={400} top="-10%" right="-10%" color="rgba(79, 70, 229, 0.1)" blur={80} />
                <AnimatedBlob size={600} bottom="-20%" left="-10%" opacity={0.05} color="#FF6B35" />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <ScrollReveal3D direction="up">
                            <Badge style={{ background: 'rgba(255,107,53,0.2)', color: '#FF6B35', border: 'none', marginBottom: '16px' }}>Platform</Badge>
                            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '24px' }}>Discover the Agentx platform</h2>
                        </ScrollReveal3D>
                    </div>

                    <ScrollReveal3D direction="up" delay={0.2}>
                        <div style={{
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '24px',
                            padding: '8px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bbbda546697a?auto=format&fit=crop&q=80&w=2000"
                                alt="Platform Preview"
                                style={{ width: '100%', borderRadius: '16px', display: 'block' }}
                            />
                            {/* Decorative overlays */}
                            <div style={{ position: 'absolute', top: '20px', left: '20px', padding: '12px 20px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem', fontWeight: 600 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#EF4444' }}></span> Live Monitoring
                                </div>
                            </div>
                        </div>
                    </ScrollReveal3D>
                </div>
            </Section>

            {/* 5. AUTOMATION SECTION */}
            <Section style={{ position: 'relative' }}>
                <Floating3DShape shape="triangle" size={120} top="15%" left="5%" opacity={0.15} />
                <div className="container">
                    <ScrollReveal3D direction="up">
                        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                            <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '16px' }}>What Broker Agentx Automates</h2>
                            <div style={{ width: '60px', height: '4px', background: '#FF6B35', margin: '0 auto' }}></div>
                        </div>
                    </ScrollReveal3D>

                    <div className={styles.cardGrid2} style={{ gap: '60px', alignItems: 'center' }}>
                        <ScrollReveal3D direction="left">
                            <div style={{ position: 'relative' }}>
                                <Rotating3DCard>
                                    <div style={{
                                        background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                                        borderRadius: '24px',
                                        height: '400px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        padding: '40px'
                                    }}>
                                        <TrendingUp size={120} strokeWidth={1} />
                                        <h3 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '20px' }}>92%</h3>
                                        <p style={{ fontWeight: 600 }}>Automation Accuracy</p>
                                    </div>
                                </Rotating3DCard>
                                <Floating3DShape shape="circle" size={80} bottom="-20px" right="-20px" opacity={1} zIndex={5} color="#111827" />
                            </div>
                        </ScrollReveal3D>

                        <div className={styles.cardGrid2} style={{ gap: '24px' }}>
                            {[
                                { title: 'Growth & Prospecting', icon: Search, desc: 'Research companies, identify contacts, generate outreach, post to LinkedIn.' },
                                { title: 'Policy & Risk Analysis', icon: Shield, desc: 'Extract coverage details, identify gaps, compare programs, review contracts.' },
                                { title: 'Submissions & Placement', icon: FileCheck, desc: 'Pre-fill applications, write narratives, match carrier appetite.' },
                                { title: 'Compliance & Admin', icon: Calculator, desc: 'Produce certificates, draft loss run letters, calculate business income.' }
                            ].map((item, idx) => (
                                <ScrollReveal3D key={idx} direction="up" delay={idx * 0.1}>
                                    <div style={{
                                        background: 'white',
                                        padding: '24px',
                                        borderRadius: '20px',
                                        border: '1px solid #F3F4F6',
                                        transition: 'all 0.3s ease',
                                        cursor: 'default'
                                    }} onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = '#FF6B35';
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                                    }} onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = '#F3F4F6';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}>
                                        <div style={{ width: 48, height: 48, borderRadius: '12px', background: '#FFF7ED', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                                            <item.icon size={24} color="#FF6B35" />
                                        </div>
                                        <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>{item.title}</h4>
                                        <p style={{ fontSize: '0.95rem', color: '#4B5563', lineHeight: 1.4 }}>{item.desc}</p>
                                    </div>
                                </ScrollReveal3D>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* 6. AI AGENTS SECTION */}
            <Section style={{ background: '#F9FAFB', position: 'relative' }}>
                <PulsingOrb size={200} top="10%" right="-5%" opacity={0.1} />
                <div className="container">
                    <ScrollReveal3D direction="up">
                        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                            <Badge variant="outline" style={{ marginBottom: '16px' }}>Advantages</Badge>
                            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800 }}>Unlock the power of <br /> AI-driven Agents</h2>
                        </div>
                    </ScrollReveal3D>

                    <div className={styles.cardGrid3}>
                        {[
                            { title: 'Works across channels', color: '#8B5CF6', icon: Globe, desc: 'Integrate your Agent with various platforms like Slack, WhatsApp, and more.' },
                            { title: 'Secure by default', color: '#F43F5E', icon: Lock, desc: 'Your Agent ensures the utmost safety by not revealing sensitive data.' },
                            { title: 'Enterprise quality', color: '#0EA5E9', icon: Award, desc: 'AI-powered guardrails prevent misinformation and ensure professionalism.' }
                        ].map((item, idx) => (
                            <ScrollReveal3D key={idx} direction="up" delay={idx * 0.2}>
                                <Rotating3DCard>
                                    <div style={{
                                        background: 'white',
                                        padding: '40px',
                                        borderRadius: '24px',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        boxShadow: '0 10px 25px rgba(0,0,0,0.02)',
                                        border: '1px solid #F3F4F6'
                                    }}>
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '20px',
                                            background: `${item.color}15`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: '32px'
                                        }}>
                                            <item.icon size={40} color={item.color} />
                                        </div>
                                        <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>{item.title}</h4>
                                        <p style={{ color: '#4B5563', marginBottom: '24px' }}>{item.desc}</p>
                                        <Button variant="link" style={{ color: item.color, fontWeight: 700, display: 'flex', alignItems: 'center' }}>
                                            Learn more <ArrowRight size={16} style={{ marginLeft: '4px' }} />
                                        </Button>
                                    </div>
                                </Rotating3DCard>
                            </ScrollReveal3D>
                        ))}
                    </div>
                </div>
            </Section >

            {/* 7. CTA SECTION */}
            < Section style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }
            }>
                <AnimatedBlob size={400} top="-10%" left="-10%" opacity={0.05} color="#FF6B35" />
                <Floating3DShape shape="triangle" size={150} bottom="10%" right="10%" opacity={0.1} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <ScrollReveal3D direction="up">
                        <div style={{
                            background: '#111827',
                            color: 'white',
                            borderRadius: '40px',
                            padding: '80px 40px',
                            textAlign: 'center',
                            overflow: 'hidden',
                            position: 'relative',
                            boxShadow: '0 40px 100px -15px rgba(0,0,0,0.3)'
                        }}>
                            <ParticleBackground count={15} />
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '32px' }}>
                                    Ready to automate your <br /> brokerage?
                                </h2>
                                <p style={{ fontSize: '1.25rem', opacity: 0.7, marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
                                    Join the next generation of AI-native brokerages today and start your 14-day free trial.
                                </p>
                                <div className={styles.buttonGroup} style={{ justifyContent: 'center' }}>
                                    <Button size="xl" style={{ background: '#FF6B35', border: 'none' }}>Get Started Now</Button>
                                    <Button size="xl" style={{ border: '1px solid white', background: 'transparent', color: 'white' }}>Schedule a Demo</Button>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal3D>
                </div>
            </Section >

            {/* FOOTER */}
            < footer style={{ padding: '80px 0 40px', borderTop: '1px solid #F3F4F6', background: '#FFFFFF' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '64px' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                                <div style={{ width: 32, height: 32, background: '#FF6B35', borderRadius: '8px' }}></div>
                                <span style={{ fontWeight: 800, fontSize: '1.25rem' }}>Broker Agentx</span>
                            </div>
                            <p style={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                Redefining brokerage with AI-native systems. Automate your workflow, delight your clients.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 700, marginBottom: '24px' }}>Product</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', color: '#6B7280', fontSize: '0.95rem' }}>
                                <li>Features</li>
                                <li>Integrations</li>
                                <li>Pricing</li>
                                <li>Changelog</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 700, marginBottom: '24px' }}>Company</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', color: '#6B7280', fontSize: '0.95rem' }}>
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Blog</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 700, marginBottom: '24px' }}>Legal</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', color: '#6B7280', fontSize: '0.95rem' }}>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                <li>Cookie Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ borderTop: '1px solid #F3F4F6', paddingTop: '40px', textAlign: 'center', fontSize: '0.9rem', color: '#9CA3AF' }}>
                        <p>&copy; 2026 Broker Agentx. All rights reserved.</p>
                    </div>
                </div>
            </footer >
        </div >
    );
}
