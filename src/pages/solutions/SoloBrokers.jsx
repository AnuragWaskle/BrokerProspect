import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Target, TrendingUp, Shield, BarChart2, Mail, Search, FileText } from 'lucide-react';
import Section from '../../components/ui/Section';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import Tilt from '../../components/ui/Tilt';

export default function SoloBrokers() {
    return (
        <div style={{ background: '#FFFFFF', color: '#111827', minHeight: '100vh' }}>
            {/* 1. HERO SECTION */}
            <Section padding="xl" style={{ position: 'relative', overflow: 'hidden', paddingTop: '80px', paddingBottom: '160px', background: '#F8FAFC' }}>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <Badge style={{ background: 'rgba(79, 70, 229, 0.1)', color: '#4F46E5', marginBottom: '24px' }}>
                                For Independent Powerhouses
                            </Badge>
                            <h1 style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: '32px', color: '#111827' }}>
                                Command Your Scale. <br />
                                <span style={{ color: '#4F46E5' }}>Stay Solo.</span>
                            </h1>
                            <p style={{ fontSize: '1.25rem', color: '#4B5563', maxWidth: '540px', marginBottom: '48px', lineHeight: 1.6 }}>
                                Wilson handles the research, policy review, and submissions, so you can handle the relationships. One broker, ten times the output.
                            </p>
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <Button size="lg" style={{ background: '#4F46E5', color: 'white', borderRadius: '100px' }}>
                                    Hire Your Virtual AM
                                </Button>
                                <Button variant="outline" size="lg" style={{ borderRadius: '100px' }}>
                                    Watch Demo
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 1 }}
                            style={{ position: 'relative' }}
                        >
                            {/* OVERLAPPING DIVS / CARDS */}
                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <img
                                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                                    style={{ width: '100%', borderRadius: '24px', boxShadow: '0 50px 100px -20px rgba(0,0,0,0.12)' }}
                                    alt="Platform Dashboard"
                                />
                            </div>

                            {/* Overlapping Glass Card 1 */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    position: 'absolute', top: '-40px', right: '-40px', zIndex: 3,
                                    background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)',
                                    padding: '24px', borderRadius: '16px', border: '1px solid #E5E7EB',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)', width: '220px'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                    <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#10B981' }} />
                                    <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>Processing Complete</span>
                                </div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 900 }}>92% Recall Rate</div>
                            </motion.div>

                            {/* Overlapping Glass Card 2 */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                style={{
                                    position: 'absolute', bottom: '40px', left: '-60px', zIndex: 3,
                                    background: '#111827', color: 'white',
                                    padding: '24px', borderRadius: '16px',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.2)', width: '260px'
                                }}
                            >
                                <div style={{ marginBottom: '16px', opacity: 0.6, fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Submission Ready</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Zap size={20} color="#6366F1" fill="#6366F1" />
                                    <span style={{ fontWeight: 700 }}>Bindable Quote Found</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* 2. THE MULTIPLIER (BOXED LIGHT) */}
            <Section padding="xl" style={{ paddingTop: '160px', paddingBottom: '160px' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 100px' }}>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '24px' }}>The One-Broker Revolution.</h2>
                        <p style={{ fontSize: '1.25rem', opacity: 0.6 }}>Wilson flips the script on traditional agency overhead. No office, no admin staff—just pure production power.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
                        <ValueCard icon={<Search />} title="Deep Prospecting" desc="Generate prospect risk profiles from a single URL." color="#4F46E5" />
                        <ValueCard icon={<FileText />} title="Instant Comparisons" desc="Side-by-side gap analysis in under 60 seconds." color="#10B981" />
                        <ValueCard icon={<BarChart2 />} title="Growth Analytics" desc="See exactly where your submissions are in the funnel." color="#F59E0B" />
                    </div>
                </div>
            </Section>

            {/* 3. ROI SECTION (OVERLAPPING ELEMENTS) */}
            <Section padding="xl" style={{ background: '#F8FAFC', paddingTop: '160px', paddingBottom: '160px' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '10%', left: '10%', width: '80%', height: '80%', background: '#4F46E511', borderRadius: '50%', filter: 'blur(50px)' }} />
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', position: 'relative', zIndex: 2 }}>
                                <motion.div whileHover={{ y: -5 }} style={{ background: 'white', padding: '40px', borderRadius: '24px', border: '1px solid #E5E7EB', boxShadow: '0 10px 20px rgba(0,0,0,0.02)', marginTop: '40px' }}>
                                    <div style={{ fontSize: '3rem', fontWeight: 900, color: '#4F46E5', marginBottom: '8px' }}>15h</div>
                                    <div style={{ fontWeight: 700, color: '#111827' }}>Time Saved / Wk</div>
                                </motion.div>
                                <motion.div whileHover={{ y: -5 }} style={{ background: 'white', padding: '40px', borderRadius: '24px', border: '1px solid #E5E7EB', boxShadow: '0 10px 20px rgba(0,0,0,0.02)' }}>
                                    <div style={{ fontSize: '3rem', fontWeight: 900, color: '#10B981', marginBottom: '8px' }}>10x</div>
                                    <div style={{ fontWeight: 700, color: '#111827' }}>Output Factor</div>
                                </motion.div>
                                <motion.div whileHover={{ y: -5 }} style={{ background: 'white', padding: '40px', borderRadius: '24px', border: '1px solid #E5E7EB', boxShadow: '0 10px 20px rgba(0,0,0,0.02)', marginTop: '40px' }}>
                                    <div style={{ fontSize: '3rem', fontWeight: 900, color: '#F59E0B', marginBottom: '8px' }}>24h</div>
                                    <div style={{ fontWeight: 700, color: '#111827' }}>Always On Ops</div>
                                </motion.div>
                                <motion.div whileHover={{ y: -5 }} style={{ background: 'white', padding: '40px', borderRadius: '24px', border: '1px solid #E5E7EB', boxShadow: '0 10px 20px rgba(0,0,0,0.02)' }}>
                                    <div style={{ fontSize: '3rem', fontWeight: 900, color: '#4F46E5', marginBottom: '8px' }}>99%</div>
                                    <div style={{ fontWeight: 700, color: '#111827' }}>Cost Removal</div>
                                </motion.div>
                            </div>
                        </div>

                        <div>
                            <Badge color="blue" style={{ marginBottom: '24px' }}>The Value Prop</Badge>
                            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '32px' }}>Personal freedom, <br />Enterprise earnings.</h2>
                            <p style={{ fontSize: '1.25rem', color: '#4B5563', marginBottom: '40px', lineHeight: 1.6 }}>
                                Why hire a team when you can command an assistant that never sleeps, never forgets, and processes documentation with total accuracy?
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                                    <Check color="#10B981" /> <span style={{ fontWeight: 600 }}>Zero staff overhead.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                                    <Check color="#10B981" /> <span style={{ fontWeight: 600 }}>Total data ownership.</span>
                                </li>
                                <li style={{ display: 'flex', gap: '16px' }}>
                                    <Check color="#10B981" /> <span style={{ fontWeight: 600 }}>Infinite scalability.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 4. FINAL CTA */}
            <Section padding="xl" style={{ textAlign: 'center', paddingTop: '160px', paddingBottom: '160px' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '32px' }}>Your empire of one starts here.</h2>
                    <Button size="xl" style={{ background: '#111827', color: 'white', borderRadius: '100px', padding: '20px 60px' }}>
                        Get Started for $149/mo
                    </Button>
                </div>
            </Section>
        </div>
    );
}

function ValueCard({ icon, title, desc, color }) {
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
