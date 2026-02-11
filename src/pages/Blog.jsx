import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Filter, ChevronRight, Mail } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import MasonryGrid from '../components/ui/MasonryGrid';
import ArticleCard from '../components/ui/ArticleCard';
import Card from '../components/ui/Card';

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const articles = [
        {
            title: "The 3-Front War: Why Brokers Are Drowning in Admin",
            excerpt: "You have the insight to be a great partner. But your time is spent fighting scattered data, manual reviews, and the pace of business.",
            category: "Industry Insights",
            author: "Ishan Patel",
            readTime: "5 min",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Case Study: How Lawrie Insurance Group Saved 10h/Week",
            excerpt: "\"It's not just a tool; it's a new way of doing business.\" – Paul Christie, VP at Lawrie Insurance Group.",
            category: "Case Studies",
            author: "Broker Team",
            readTime: "4 min",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Prospecting in 2026: Stop Chasing Cold Leads",
            excerpt: "Command your assistant to build profiles of ideal prospects. Pinpoint CEOs and craft the perfect outreach automatically.",
            category: "Guides",
            author: "Sarah Jenkins",
            readTime: "6 min",
            image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Uncovering Hidden Risk in Policy Reviews",
            excerpt: "Stop manual reviews. Learn how AI parses every line to identify subtle gaps that lead to high-value conversations.",
            category: "Product",
            author: "Tech Team",
            readTime: "3 min",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Building the Winning Submission",
            excerpt: "Turn your analysis into a winning placement. Create policy comparisons that prove your value to underwriters.",
            category: "Strategy",
            author: "Ishan Patel",
            readTime: "7 min",
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Data Sovereignty: Canada vs US Hosting",
            excerpt: "Understanding the compliance landscape for insurance data. Why on-premise options matter for enterprise teams.",
            category: "Security",
            author: "Legal Team",
            readTime: "4 min",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
        }
    ];

    const filteredArticles = articles.filter(article => {
        const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const categories = ['All', 'Strategy', 'Product', 'Case Studies', 'Security', 'Industry Insights', 'Guides'];

    return (
        <div className="resources-page">
            {/* Featured Header */}
            <Section padding="lg" style={{ paddingTop: '100px', background: '#F9FAFB' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
                        <div>
                            <Badge color="purple" style={{ marginBottom: '16px' }}>Resources & Insights</Badge>
                            <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1 }}>
                                The Broker's <span className="text-primary">Playbook</span>
                            </h1>
                        </div>
                        <div style={{ display: 'none', md: 'block' }}>
                            <p style={{ maxWidth: '400px', fontSize: '1.125rem', color: 'var(--color-text-body)' }}>
                                Strategies, guides, and industry reports to help you modernize your brokerage.
                            </p>
                        </div>
                    </div>

                    {/* Featured Post */}
                    <FeaturedPost />
                </div>
            </Section>

            {/* Filter Bar */}
            <div style={{ position: 'sticky', top: '70px', zIndex: 40, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(0,0,0,0.05)', padding: '16px 0' }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', overflowX: 'auto' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        {categories.map(cat => (
                            <FilterButton
                                key={cat}
                                active={activeCategory === cat}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </FilterButton>
                        ))}
                    </div>
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <Search size={18} style={{ position: 'absolute', left: '12px', color: '#9CA3AF' }} />
                        <input
                            type="text"
                            placeholder="Search resources..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                padding: '10px 16px 10px 40px',
                                borderRadius: '100px',
                                border: '1px solid #E5E7EB',
                                outline: 'none',
                                fontSize: '0.9rem',
                                background: '#F9FAFB'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Articles Grid */}
            <Section padding="lg">
                <div className="container">
                    {filteredArticles.length > 0 ? (
                        <MasonryGrid columns={3} gap={32}>
                            {filteredArticles.map((article, i) => (
                                <ArticleCard key={i} {...article} />
                            ))}
                        </MasonryGrid>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '80px 0' }}>
                            <h3 style={{ fontSize: '1.5rem', opacity: 0.5 }}>No resources found in this category.</h3>
                        </div>
                    )}

                    <div style={{ textAlign: 'center', marginTop: '80px' }}>
                        <Button variant="outline" size="lg">Load More Articles</Button>
                    </div>
                </div>
            </Section>

            {/* Newsletter */}
            <Section padding="lg" background="dark" style={{ textAlign: 'center' }}>
                <div className="container">
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <Mail size={48} color="white" style={{ marginBottom: '24px', opacity: 0.5 }} />
                        <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '16px' }}>Join 5,000+ Brokers</h2>
                        <p style={{ color: '#9CA3AF', fontSize: '1.25rem', marginBottom: '32px' }}>
                            Get the latest strategies and templates delivered to your inbox weekly.
                        </p>
                        <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                <input
                                    type="email"
                                    placeholder="Enter your work email"
                                    style={{
                                        flex: 1,
                                        minWidth: '240px',
                                        padding: '14px 24px',
                                        borderRadius: '12px',
                                        border: 'none',
                                        fontSize: '1rem'
                                    }}
                                />
                                <Button style={{ background: 'var(--color-primary)', border: 'none' }}>Subscribe</Button>
                            </div>
                            <p style={{ fontSize: '0.8rem', color: '#6B7280' }}>No spam. Unsubscribe anytime.</p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}

function FeaturedPost() {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            style={{
                display: 'grid',
                gridTemplateColumns: '1.5fr 1fr',
                background: 'white',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid rgba(0,0,0,0.05)',
                minHeight: '400px'
            }}
            className="featured-post"
        >
            <div style={{ position: 'relative', background: '#3730A3' }}>
                {/* Placeholder Image Overlay */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.6
                }}></div>
                <div style={{ position: 'relative', zIndex: 10, padding: '40px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: 'white' }}>
                    <Badge style={{ background: 'white', color: 'black', alignSelf: 'flex-start', marginBottom: '16px' }}>Featured Report</Badge>
                    <h2 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '16px' }}>State of AI in Insurance 2026</h2>
                    <p style={{ fontSize: '1.125rem', opacity: 0.9, maxWidth: '500px' }}>
                        A comprehensive analysis of how 500+ brokerages are using artificial intelligence to reduce admin overhead and increase close rates.
                    </p>
                </div>
            </div>
            <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '24px' }}>Key Takeaways:</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                    <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <span style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '1.5rem' }}>40%</span>
                        <span style={{ color: 'var(--color-text-body)' }}>Reduction in submission time</span>
                    </li>
                    <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <span style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '1.5rem' }}>25%</span>
                        <span style={{ color: 'var(--color-text-body)' }}>Increase in upsell opportunities</span>
                    </li>
                    <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <span style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '1.5rem' }}>10h</span>
                        <span style={{ color: 'var(--color-text-body)' }}>Saved per producer / week</span>
                    </li>
                </ul>
                <Link to="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary)', fontWeight: 600 }}>
                    Read Full Report <ChevronRight size={20} />
                </Link>
            </div>
            <style>{`
         @media (max-width: 968px) {
           .featured-post { grid-template-columns: 1fr !important; }
         }
       `}</style>
        </motion.div>
    );
}

function FilterButton({ children, active = false, onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                padding: '8px 20px',
                borderRadius: '100px',
                background: active ? 'black' : 'white',
                color: active ? 'white' : 'var(--color-text-body)',
                border: active ? '1px solid black' : '1px solid #E5E7EB',
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
            }}
        >
            {children}
        </button>
    );
}
