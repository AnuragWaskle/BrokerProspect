import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Send, Globe, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Tilt from '../components/ui/Tilt';

export default function Contact() {
    return (
        <div style={{ background: '#FFFFFF', color: '#111827', minHeight: '100vh', paddingTop: '100px' }}>
            {/* 1. HERO SECTION */}
            <Section padding="lg" style={{ background: '#F8FAFC', paddingTop: '160px' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge color="purple" style={{ marginBottom: '24px' }}>Contact Us</Badge>
                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 900, marginBottom: '24px', letterSpacing: '-0.02em' }}>
                            Let's Build the <span style={{ color: '#4F46E5' }}>Future of Brokerage.</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#4B5563', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
                            Whether you're a solo powerhouse or a global enterprise, we're here to help you automate the admin and win more business.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* 2. CONTACT GRID */}
            <Section padding="lg" style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.5fr) 1fr', gap: '80px' }}>

                        {/* LEFT: FORM */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{
                                background: '#FFFFFF',
                                padding: '60px',
                                borderRadius: '32px',
                                border: '1px solid #E5E7EB',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.02)'
                            }}
                        >
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '40px' }}>Send us a message</h2>
                            <form style={{ display: 'grid', gap: '32px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#374151' }}>Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="Ishan Patel"
                                            style={{ padding: '16px 20px', borderRadius: '12px', border: '1px solid #E5E7EB', outline: 'none', background: '#F9FAFB', fontSize: '1rem' }}
                                        />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                        <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#374151' }}>Work Email</label>
                                        <input
                                            type="email"
                                            placeholder="ishan@brokerprospect.com"
                                            style={{ padding: '16px 20px', borderRadius: '12px', border: '1px solid #E5E7EB', outline: 'none', background: '#F9FAFB', fontSize: '1rem' }}
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#374151' }}>Company / Agency Name</label>
                                    <input
                                        type="text"
                                        placeholder="Global Risk Partners"
                                        style={{ padding: '16px 20px', borderRadius: '12px', border: '1px solid #E5E7EB', outline: 'none', background: '#F9FAFB', fontSize: '1rem' }}
                                    />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#374151' }}>How can we help?</label>
                                    <select style={{ padding: '16px 20px', borderRadius: '12px', border: '1px solid #E5E7EB', outline: 'none', background: '#F9FAFB', fontSize: '1rem', appearance: 'none', cursor: 'pointer' }}>
                                        <option>Request a Demo</option>
                                        <option>Partnership Inquiry</option>
                                        <option>Technical Support</option>
                                        <option>General Question</option>
                                    </select>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <label style={{ fontWeight: 700, fontSize: '0.9rem', color: '#374151' }}>Message</label>
                                    <textarea
                                        rows="5"
                                        placeholder="Tell us about your brokerage and goals..."
                                        style={{ padding: '20px', borderRadius: '12px', border: '1px solid #E5E7EB', outline: 'none', background: '#F9FAFB', fontSize: '1rem', resize: 'none' }}
                                    ></textarea>
                                </div>

                                <Button size="xl" style={{ background: '#111827', color: 'white', border: 'none', borderRadius: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                                    Send Message <Send size={20} />
                                </Button>
                            </form>
                        </motion.div>

                        {/* RIGHT: INFO CARDS */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            <ContactCard
                                icon={<MessageSquare size={24} color="#4F46E5" />}
                                title="Chat with Sales"
                                desc="Interested in a custom enterprise solution? Let's talk scale."
                                link="sales@brokerprospect.com"
                            />
                            <ContactCard
                                icon={<Mail size={24} color="#10B981" />}
                                title="Support Hub"
                                desc="Existing user? Our team is live 24/7 to help you optimize."
                                link="support@brokerprospect.com"
                            />
                            <ContactCard
                                icon={<Globe size={24} color="#F59E0B" />}
                                title="Partnerships"
                                desc="Looking to integrate with Wilson? Become a strategic partner."
                                link="partners@brokerprospect.com"
                            />

                            <div style={{ marginTop: '20px', padding: '40px', background: '#F8FAFC', borderRadius: '32px', border: '1px solid #E5E7EB' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '16px' }}>Network with us</h3>
                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <SocialIcon icon={<Linkedin size={20} />} href="https://linkedin.com" />
                                    <SocialIcon icon={<Twitter size={20} />} href="https://twitter.com" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Background Decor */}
                <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '40%', height: '40%', background: '#4F46E508', borderRadius: '50%', filter: 'blur(80px)', zIndex: 0 }} />
                <div style={{ position: 'absolute', bottom: '10%', left: '-10%', width: '30%', height: '30%', background: '#10B98108', borderRadius: '50%', filter: 'blur(60px)', zIndex: 0 }} />
            </Section>

            {/* 3. OFFICES SECTION */}
            <Section padding="lg" style={{ background: '#F9FAFB' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Global Presence</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
                        <OfficeCard city="Toronto" address="123 Front St W, Suite 400" />
                        <OfficeCard city="London" address="30 St Mary Axe (The Gherkin)" />
                        <OfficeCard city="San Francisco" address="Market St, Financial District" />
                    </div>
                </div>
            </Section>
        </div>
    );
}

function ContactCard({ icon, title, desc, link }) {
    return (
        <Tilt style={{ display: 'block' }}>
            <div style={{ background: 'white', padding: '32px', borderRadius: '24px', border: '1px solid #E5E7EB', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                <div style={{ marginBottom: '20px' }}>{icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px' }}>{title}</h3>
                <p style={{ color: '#6B7280', fontSize: '0.95rem', marginBottom: '20px', lineHeight: 1.5 }}>{desc}</p>
                <div style={{ color: '#4F46E5', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {link} <ArrowRight size={16} />
                </div>
            </div>
        </Tilt>
    );
}

function SocialIcon({ icon, href }) {
    return (
        <motion.a
            href={href}
            whileHover={{ scale: 1.1, backgroundColor: '#111827', color: 'white' }}
            style={{
                width: 44, height: 44, borderRadius: '50%', background: 'white', border: '1px solid #E5E7EB',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#111827', transition: 'all 0.2s'
            }}
        >
            {icon}
        </motion.a>
    );
}

function OfficeCard({ city, address }) {
    return (
        <div style={{ padding: '32px', background: 'white', borderRadius: '24px', border: '1px solid #E5E7EB', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '12px' }}>{city}</h3>
            <p style={{ color: '#6B7280', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <MapPin size={18} /> {address}
            </p>
        </div>
    );
}
