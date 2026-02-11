import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
    Search, Users, Mail, TrendingUp, ArrowRight, Play, CheckCircle,
    MessageSquare, Zap, Shield, FileCheck, Calculator, FileText,
    Globe, Cpu, Database, BarChart3, Lock, Sparkles, Award, Building2
} from 'lucide-react';

import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import FloatingCard from '../components/ui/FloatingCard';
import ParticleBackground from '../components/ui/ParticleBackground';
import Floating3DShape, { ScrollReveal3D, Parallax3DElement, Rotating3DCard, MouseParallax } from '../components/ui/3DAnimations';
import AnimatedBlob, { PulsingOrb } from '../components/ui/AnimatedBlob';
import Marquee from '../components/ui/Marquee';
import AgentUserChat from '../components/ui/AgentUserChat';
import AnimatedISVG from '../components/ui/AnimatedISVG';
import styles from '../styles/responsive.module.css';

export default function Home() {
    return (
        <div style={{ background: '#FFFFFF', color: '#111827', overflowX: 'hidden' }}>

            {/* 1. HERO SECTION */}
            <Section padding="none" className={styles.responsivePaddingXL} style={{
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: 'linear-gradient(rgba(90, 98, 117, 0.07), rgba(17, 24, 39, 0.9)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white'
            }}>
                <MouseParallax strength={0.1}>
                    <Floating3DShape shape="circle" size={400} top="-10%" right="-5%" color="rgba(255, 107, 53, 0.05)" blur={60} />
                </MouseParallax>
                <MouseParallax strength={0.15}>
                    <Floating3DShape shape="rounded" size={300} bottom="10%" left="-5%" color="rgba(79, 70, 229, 0.05)" blur={60} />
                </MouseParallax>
                <AnimatedBlob size={500} top="20%" left="50%" opacity={0.03} />
                <PulsingOrb size={150} top="15%" left="15%" opacity={0.2} />

                <div className="container">
                    <div className={styles.heroGrid}>
                        <ScrollReveal3D direction="left">
                            <div style={{ paddingTop: '40px' }}>
                                <h1 style={{
                                    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                                    fontWeight: 800,
                                    lineHeight: 1.1,
                                    marginBottom: '24px',
                                    letterSpacing: '-0.02em',
                                    color: 'white'
                                }}>
                                    The A<AnimatedISVG size={60} />-native <br />
                                    <span style={{
                                        background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                                    }}>brokerage platform</span>
                                </h1>
                                <p style={{
                                    fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                                    color: '#D1D5DB', // lighter gray for dark bg
                                    marginBottom: '40px',
                                    maxWidth: '540px',
                                    lineHeight: 1.5
                                }}>
                                    Transform your brokerage into a connected knowledge system—one that learns, optimizes, and improves itself intelligently.
                                </p>

                            </div>
                        </ScrollReveal3D>

                        <ScrollReveal3D direction="right" delay={0.2}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                                <Parallax3DElement speed={5}>
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
                            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '20px', marginTop: '60px' }}>
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
            <Section padding="lg" style={{ background: '#0F172A', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <ParticleBackground count={20} />
                <Floating3DShape shape="rounded" size={400} top="-10%" right="-10%" color="rgba(79, 70, 229, 0.1)" blur={80} />
                <AnimatedBlob size={600} bottom="-20%" left="-10%" opacity={0.05} color="#FF6B35" />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                        <ScrollReveal3D direction="up">
                            <Badge style={{ background: 'rgba(255,107,53,0.2)', color: '#FF6B35', border: 'none', marginBottom: '16px' }}>Platform</Badge>
                            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '24px', color: 'white' }}>Discover the Agentx platform</h2>
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
                            overflow: 'hidden',
                            minHeight: '300px'
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
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
                                <Floating3DShape shape="circle" size={80} bottom="-20px" right="-20px" opacity={1} zIndex={5} color="#FF6B35" />
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
            <Section padding="lg" style={{ position: 'relative', overflow: 'hidden' }}>
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
                                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '32px', color: '#FF6B35' }}>
                                    Ready to automate your <br /> brokerage?
                                </h2>
                                <p style={{ fontSize: '1.25rem', opacity: 0.7, marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
                                    Join the next generation of AI-native brokerages today and start your 14-day free trial.
                                </p>

                            </div>
                        </div>
                    </ScrollReveal3D>
                </div>
            </Section >

            {/* 8. VIDEO SECTION (See It in Action) */}
            <Section padding="lg" style={{ background: '#0F172A', color: 'white', position: 'relative', overflow: 'hidden' }}>
                <MouseParallax strength={0.05}>
                    <Floating3DShape shape="circle" size={300} top="-10%" left="-5%" color="rgba(255, 107, 53, 0.1)" blur={80} />
                </MouseParallax>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className={styles.heroGrid} style={{ alignItems: 'flex-start' }}>
                        <ScrollReveal3D direction="left">
                            <div style={{ paddingRight: '40px' }}>
                                <Badge style={{ background: 'rgba(255,107,53,0.2)', color: '#FF6B35', border: 'none', marginBottom: '16px' }}>See It in Action</Badge>
                                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '24px', lineHeight: 1.1, color: 'white' }}>
                                    Watch Broker Agentx <br /> handle a real workflow
                                </h2>
                                <p style={{ fontSize: '1.1rem', color: '#9CA3AF', marginBottom: '32px', maxWidth: '480px' }}>
                                    From prospecting to submission in under 5 minutes.
                                </p>
                                <div className={styles.buttonGroup}>
                                    <Button size="lg" style={{ background: '#FF6B35', border: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Play size={20} fill="currentColor" /> Watch Demo
                                    </Button>
                                    <Button size="lg" variant="outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
                                        Get Started <ArrowRight size={20} />
                                    </Button>
                                </div>
                            </div>
                        </ScrollReveal3D>

                        <ScrollReveal3D direction="right" delay={0.2}>
                            <Rotating3DCard>
                                <div style={{
                                    position: 'relative',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600"
                                        alt="Workflow Demo"
                                        style={{ width: '100%', display: 'block' }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '80px',
                                        height: '80px',
                                        background: 'rgba(255,255,255,0.2)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid rgba(255,255,255,0.3)',
                                        cursor: 'pointer',
                                        transition: 'transform 0.2s ease'
                                    }}>
                                        <Play size={32} fill="white" />
                                    </div>
                                </div>
                            </Rotating3DCard>
                        </ScrollReveal3D>
                    </div>
                </div>
            </Section>

            {/* 9. HOWEVER YOU WORK */}
            <Section style={{ background: '#F3F4F6', position: 'relative' }}>
                <div className="container">
                    <ScrollReveal3D direction="up">
                        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '24px' }}>However you work</h2>
                        </div>
                    </ScrollReveal3D>

                    <div className={styles.cardGrid2} style={{ gap: '32px' }}>
                        {[
                            { title: 'Solo Brokers', desc: 'Solo brokers who need to compete with larger agencies', color: '#8B5CF6', icon: Users },
                            { title: 'Growing Agencies', desc: 'Growing agencies that need consistent processes across teams', color: '#10B981', icon: TrendingUp },
                            { title: 'Enterprise Teams', desc: 'Enterprise teams that want to automate at scale with on-premises options', color: '#3B82F6', icon: Building2 }, // Building2 needs import
                            { title: 'Specialty Brokers', desc: 'Specialty brokers handling complex risks across multiple lines', color: '#F59E0B', icon: Award }
                        ].map((item, idx) => (
                            <ScrollReveal3D key={idx} direction="up" delay={idx * 0.1}>
                                <div style={{
                                    background: 'white',
                                    padding: '32px',
                                    borderRadius: '24px',
                                    border: '1px solid #E5E7EB',
                                    height: '100%',
                                    display: 'flex',
                                    gap: '24px',
                                    alignItems: 'flex-start',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer'
                                }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                    <div style={{
                                        minWidth: '56px',
                                        height: '56px',
                                        borderRadius: '16px',
                                        background: `${item.color}15`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <item.icon size={28} color={item.color} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>{item.title}</h4>
                                        <p style={{ color: '#6B7280', lineHeight: 1.5 }}>{item.desc}</p>
                                    </div>
                                </div>
                            </ScrollReveal3D>
                        ))}
                    </div>

                </div>
            </Section >

            {/* 10. TESTIMONIAL SECTION */}
            <Section padding="lg" style={{ background: '#FFFFFF' }}>
                <div className="container">
                    <ScrollReveal3D direction="up">
                        <div style={{
                            background: '#F9FAFB',
                            borderRadius: '32px',
                            border: '1px solid #F3F4F6',
                            overflow: 'hidden',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
                        }}>
                            <div style={{ position: 'relative', minHeight: '300px' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                                    alt="Testimonial"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }}
                                />
                            </div>
                            <div style={{ padding: '64px' }}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" alt="Company Logo" style={{ height: '32px', marginBottom: '32px', opacity: 0.8 }} />
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.5, marginBottom: '32px', color: '#111827' }}>
                                    "We went from spending 80% of our time on admin work to 80% on client strategy... It's not just a tool; it's a new way of doing business."
                                </h3>
                                <div>
                                    <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '4px' }}>Paul Christie</p>
                                    <p style={{ color: '#6B7280' }}>VP at Lawrie Insurance Group</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal3D >
                </div >
            </Section >

            {/* 10. CONNECTED INTELLIGENCE */}
            < Section style={{ background: '#F8F9FA' }
            }>
                <div className="container">
                    <div className={styles.heroGrid} style={{ alignItems: 'center' }}>
                        <ScrollReveal3D direction="left">
                            <Badge style={{ marginBottom: '24px' }}>Connected Intelligence</Badge>
                            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '24px' }}>
                                Works where you work
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: '#4B5563', marginBottom: '32px', lineHeight: 1.6 }}>
                                Broker Agentx integrates with your AMS, CRM, email, calendar, and marketing tools—executing workflows across your entire system.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {[
                                    'Multi-agent architecture with session-aware memory',
                                    'Every output is grounded in your documents—no hallucinations',
                                    'Enterprise-grade security. SOC 2 compliant'
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.05rem', color: '#374151' }}>
                                        <div style={{ minWidth: '24px', height: '24px', borderRadius: '50%', background: '#DEF7EC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <CheckCircle size={14} color="#03543F" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className={styles.buttonGroup}>
                                <Button variant="outline">View Integrations</Button>
                                <Button variant="ghost">Technical Documentation</Button>
                            </div>
                        </ScrollReveal3D>
                        <ScrollReveal3D direction="right" delay={0.2}>
                            <div className={styles.logoGrid} style={{ opacity: 0.6 }}>
                                {/* Placeholder icons for integrations */}
                                <Cpu size={64} />
                                <Database size={64} />
                                <MessageSquare size={64} />
                                <Mail size={64} />
                                <Globe size={64} />
                                <Lock size={64} />
                            </div>
                        </ScrollReveal3D>
                    </div>
                </div>
            </Section >

            {/* 11. PRICING SECTION */}
            < Section >
                <div className="container">
                    <ScrollReveal3D direction="up">
                        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '24px' }}>Simple, transparent pricing</h2>
                            <p style={{ fontSize: '1.1rem', color: '#4B5563' }}>Full platform access. All features included.</p>
                        </div>
                    </ScrollReveal3D>

                    <div className={styles.cardGrid2} style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <ScrollReveal3D direction="left">
                            <Rotating3DCard>
                                <div style={{
                                    padding: '48px',
                                    borderRadius: '24px',
                                    border: '1px solid #E5E7EB',
                                    background: 'white',
                                    textAlign: 'center',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Monthly</h3>
                                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '3rem', fontWeight: 800, color: '#111827' }}>$99</span>
                                        <span style={{ color: '#6B7280', fontWeight: 500 }}>/user/mo</span>
                                    </div>
                                    <p style={{ color: '#6B7280', marginBottom: '32px' }}>Billed monthly</p>
                                    <Button style={{ width: '100%', marginBottom: '24px' }}>Get Started</Button>
                                    <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><CheckCircle size={16} color="#10B981" /> Full platform access</li>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><CheckCircle size={16} color="#10B981" /> Unlimited workflows</li>
                                    </ul>
                                </div>
                            </Rotating3DCard>
                        </ScrollReveal3D>

                        <ScrollReveal3D direction="right">
                            <Rotating3DCard>
                                <div style={{
                                    padding: '48px',
                                    borderRadius: '24px',
                                    border: '2px solid #FF6B35',
                                    background: '#FFF7ED',
                                    textAlign: 'center',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative'
                                }}>
                                    <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#FF6B35', color: 'white', padding: '4px 12px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 700 }}>
                                        BEST VALUE
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Yearly</h3>
                                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '3rem', fontWeight: 800, color: '#FF6B35' }}>$999</span>
                                        <span style={{ color: '#6B7280', fontWeight: 500 }}>/year</span>
                                    </div>
                                    <p style={{ color: '#16A34A', marginBottom: '32px', fontWeight: 600 }}>Save $189 per year</p>
                                    <Button style={{ width: '100%', background: '#FF6B35', border: 'none', marginBottom: '24px' }}>Get Started</Button>
                                    <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><CheckCircle size={16} color="#10B981" /> Everything in Monthly</li>
                                        <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><CheckCircle size={16} color="#10B981" /> Priority support</li>
                                    </ul>
                                </div>
                            </Rotating3DCard>
                        </ScrollReveal3D>
                    </div>
                </div>
            </Section >


        </div >
    );
}
