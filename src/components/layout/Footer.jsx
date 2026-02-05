import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ backgroundColor: '#F9FAFB', paddingTop: '80px', paddingBottom: '40px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '64px' }}>

                    {/* Brand Column */}
                    <div style={{ maxWidth: '300px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                            <div style={{ width: 24, height: 24, background: 'var(--color-primary)', borderRadius: '6px' }}></div>
                            <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>Broker Agentx</span>
                        </div>
                        <p style={{ color: 'var(--color-text-body)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                            Empowering brokers and agencies with AI-driven intelligence to win more business and streamline operations.
                        </p>
                        <div style={{ display: 'flex', gap: '16px', color: 'var(--color-text-body)' }}>
                            <Linkedin size={20} />
                            <Twitter size={20} />
                            <Facebook size={20} />
                            <Instagram size={20} />
                        </div>
                    </div>

                    {/* Links Columns */}
                    <FooterColumn title="Platform">
                        <FooterLink to="/platform/prospect">Prospect</FooterLink>
                        <FooterLink to="/platform/review">Review</FooterLink>
                        <FooterLink to="/platform/place">Place</FooterLink>
                        <FooterLink to="/platform/execute">Execute</FooterLink>
                        <FooterLink to="/platform/integrations">Integrations</FooterLink>
                    </FooterColumn>

                    <FooterColumn title="Solutions">
                        <FooterLink to="/solutions/solo-brokers">Solo Brokers</FooterLink>
                        <FooterLink to="/solutions/growing-agencies">Growing Agencies</FooterLink>
                        <FooterLink to="/solutions/enterprise-teams">Enterprise Teams</FooterLink>
                        <FooterLink to="/solutions/specialty-brokers">Specialty Brokers</FooterLink>
                    </FooterColumn>

                    <FooterColumn title="Company">
                        <FooterLink to="/about">About Us</FooterLink>
                        <FooterLink to="/careers">Careers</FooterLink>
                        <FooterLink to="/blog">Blog</FooterLink>
                        <FooterLink to="/contact">Contact</FooterLink>
                    </FooterColumn>

                </div>

                {/* Bottom Bar */}
                <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', fontSize: '0.875rem', color: '#6B7280' }}>
                    <p>&copy; {currentYear} Broker Agentx. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                        <Link to="/security">Security</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterColumn({ title, children }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#9CA3AF' }}>
                {title}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {children}
            </div>
        </div>
    );
}

function FooterLink({ to, children }) {
    return (
        <Link to={to} style={{ color: 'var(--color-text-body)', fontSize: '0.95rem', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-body)'}>
            {children}
        </Link>
    );
}
