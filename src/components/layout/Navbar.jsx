import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Monitor, Users, Building, Briefcase, Shield, FileText, Zap, Search } from 'lucide-react';
import '../../styles/globals.css';
import logoFull from '../../assets/logo-full.png';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoveredNav, setHoveredNav] = useState(null);

    // Close mobile menu on route change
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        setMobileMenuOpen(false);
        setHoveredNav(null);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Text color logic: White on Home top (unless hovered), Dark otherwise
    const isDarkBg = isHomePage && !isScrolled && !hoveredNav;
    const textColor = isDarkBg ? 'white' : 'var(--color-text-heading)';
    const bodyTextColor = isDarkBg ? 'rgba(255, 255, 255, 0.9)' : 'var(--color-text-body)';

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onMouseLeave={() => setHoveredNav(null)}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    height: 'var(--header-height)',
                    backgroundColor: isScrolled ? 'rgba(237, 241, 248, 0.8)' : 'transparent',
                    backdropFilter: isScrolled ? 'blur(12px)' : 'none',
                    borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
                    transition: 'all 0.4s ease',
                    boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
                    borderBottomLeftRadius: '30px',
                    borderBottomRightRadius: '30px',
                }}
            >
                <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', zIndex: 60 }} onMouseEnter={() => setHoveredNav(null)}>
                        <div style={{ padding: '4px 0' }}>
                            <img src={logoFull} alt="Broker AgentX" style={{ height: '110px', width: 'auto', filter: isDarkBg ? 'brightness(0) invert(1)' : 'none', transition: 'filter 0.3s' }} />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <NavGroup
                            label="Platform"
                            id="platform"
                            activeId={hoveredNav}
                            onHover={setHoveredNav}
                            textColor={textColor}
                        >
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', width: '600px', padding: '24px' }}>
                                <div>
                                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#1756c4ff', marginBottom: '16px' }}>Modules</div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <NavDropdownItem to="/platform/prospect" icon={<Search size={20} />} title="Prospect" desc="Find your next client" />
                                        <NavDropdownItem to="/platform/review" icon={<FileText size={20} />} title="Review" desc="Analyze policies instantly" />
                                        <NavDropdownItem to="/platform/place" icon={<Zap size={20} />} title="Place" desc="Connect with carriers" />
                                        <NavDropdownItem to="/platform/execute" icon={<Briefcase size={20} />} title="Execute" desc="Bind and issue" />
                                    </div>
                                </div>
                                <div style={{ background: '#F9FAFB', margin: '-24px -24px -24px 0', padding: '24px' }}>
                                    <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#9CA3AF', marginBottom: '16px' }}>Resources</div>
                                    <NavDropdownItem to="/platform/integrations" icon={<Monitor size={20} />} title="Integrations" desc="Works with your tools" />
                                    <NavDropdownItem to="/platform/features" icon={<Shield size={20} />} title="Security" desc="Enterprise grade" />
                                </div>
                            </div>
                        </NavGroup>

                        <NavGroup
                            label="Solutions"
                            id="solutions"
                            activeId={hoveredNav}
                            onHover={setHoveredNav}
                            textColor={textColor}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '280px', padding: '16px' }}>
                                <NavDropdownItem to="/solutions/solo-brokers" icon={<Users size={20} />} title="Solo Brokers" desc="Maximize personal production" />
                                <NavDropdownItem to="/solutions/growing-agencies" icon={<Building size={20} />} title="Growing Agencies" desc="Scale your operations" />
                                <NavDropdownItem to="/solutions/enterprise-teams" icon={<Users size={20} />} title="Enterprise Teams" desc="unify complex workflows" />
                                <NavDropdownItem to="/solutions/specialty-brokers" icon={<Briefcase size={20} />} title="Specialty Brokers" desc="Niche market tools" />
                            </div>
                        </NavGroup>

                        <Link to="/blog" style={{ padding: '8px 16px', fontWeight: 500, color: bodyTextColor, transition: 'color 0.3s' }} onMouseEnter={() => setHoveredNav(null)}>Resources</Link>
                        <Link to="/pricing" style={{ padding: '8px 16px', fontWeight: 500, color: bodyTextColor, transition: 'color 0.3s' }} onMouseEnter={() => setHoveredNav(null)}>Pricing</Link>
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} onMouseEnter={() => setHoveredNav(null)}>
                        <Link to="/contact" className="hidden-mobile">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    backgroundColor: 'var(--color-primary)',
                                    color: 'white',
                                    padding: '10px 24px',
                                    borderRadius: '100px',
                                    fontWeight: 600,
                                    fontSize: '0.95rem',
                                    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                                }}
                            >
                                Get Started
                            </motion.button>
                        </Link>

                        <button
                            className="mobile-toggle"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', color: textColor }}
                        >
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            position: 'fixed',
                            top: '0', // Full screen
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'white',
                            zIndex: 100,
                            overflowY: 'auto',
                            paddingTop: 'var(--header-height)'
                        }}
                    >
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            <X size={32} />
                        </button>
                        <div className="container" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '32px', paddingBottom: '80px' }}>
                            <MobileSection title="Platform">
                                <MobileLink to="/platform/prospect" desc="Find your next client">Prospect</MobileLink>
                                <MobileLink to="/platform/review" desc="Analyze policies instantly">Review</MobileLink>
                                <MobileLink to="/platform/place" desc="Connect with carriers">Place</MobileLink>
                                <MobileLink to="/platform/execute" desc="Bind and issue">Execute</MobileLink>
                                <MobileLink to="/platform/integrations" desc="Works with your tools">Integrations</MobileLink>
                                <MobileLink to="/platform/features" desc="Enterprise grade">Security</MobileLink>
                            </MobileSection>
                            <MobileSection title="Solutions">
                                <MobileLink to="/solutions/solo-brokers" desc="Maximize personal production">Solo Brokers</MobileLink>
                                <MobileLink to="/solutions/growing-agencies" desc="Scale your operations">Growing Agencies</MobileLink>
                                <MobileLink to="/solutions/enterprise-teams" desc="Unify complex workflows">Enterprise Teams</MobileLink>
                                <MobileLink to="/solutions/specialty-brokers" desc="Niche market tools">Specialty Brokers</MobileLink>
                            </MobileSection>
                            <MobileSection title="Company">
                                <MobileLink to="/blog">Resources</MobileLink>
                                <MobileLink to="/pricing">Pricing</MobileLink>
                                <MobileLink to="/contact">Contact</MobileLink>
                            </MobileSection>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 968px) {
          .desktop-nav, .hidden-mobile { display: none !important; }
        }
        @media (min-width: 969px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>
        </>
    );
}

function NavGroup({ label, id, activeId, onHover, textColor, children }) {
    const isOpen = activeId === id;
    return (
        <div
            onMouseEnter={() => onHover(id)}
            style={{ position: 'relative' }}
        >
            <button style={{
                padding: '8px 16px',
                background: 'none',
                border: 'none',
                fontWeight: 500,
                color: isOpen ? (textColor === 'white' ? 'white' : 'var(--color-primary)') : textColor,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontFamily: 'inherit',
                transition: 'color 0.3s'
            }}>
                {label} <ChevronDown size={14} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            x: '-50%',
                            paddingTop: '16px', // Gap
                            zIndex: 100
                        }}
                    >
                        <div style={{
                            background: 'white',
                            borderRadius: '16px',
                            boxShadow: '0 20px 40px -4px rgba(0,0,0,0.1), 0 8px 12px -4px rgba(0,0,0,0.05)',
                            border: '1px solid rgba(0,0,0,0.05)',
                            overflow: 'hidden',
                            color: 'var(--color-text-body)' // Reset text color for dropdown
                        }}>
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function NavDropdownItem({ to, icon, title, desc }) {
    return (
        <Link to={to} style={{ display: 'flex', gap: '16px', padding: '12px', borderRadius: '12px', transition: 'background 0.2s', alignItems: 'flex-start' }} className="nav-item">
            <div style={{ color: 'var(--color-primary)', marginTop: '2px' }}>{icon}</div>
            <div>
                <div style={{ fontWeight: 600, color: 'var(--color-text-heading)', marginBottom: '4px' }}>{title}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-body)' }}>{desc}</div>
            </div>
            <style>{`.nav-item:hover { background: var(--color-bg-gray); }`}</style>
        </Link>
    );
}

function MobileSection({ title, children }) {
    return (
        <div>
            <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#9CA3AF', marginBottom: '16px' }}>{title}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>{children}</div>
        </div>
    );
}

function MobileLink({ to, children, desc }) {
    return (
        <Link to={to} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text-heading)' }}>
                {children}
            </span>
            {desc && <span style={{ fontSize: '0.875rem', color: 'var(--color-text-body)' }}>{desc}</span>}
        </Link>
    );
}
