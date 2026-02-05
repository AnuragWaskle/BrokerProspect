import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, User } from 'lucide-react';
import Badge from './Badge';

export default function ArticleCard({ title, excerpt, category, author, readTime, image }) {
    return (
        <Link to="#" style={{ display: 'block' }}>
            <motion.div
                whileHover={{ y: -8 }}
                style={{
                    background: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-md)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    height: '100%'
                }}
            >
                {/* Image */}
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: '#F3F4F6',
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></div>
                    <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                        <Badge style={{ background: 'white', color: 'black', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>{category}</Badge>
                    </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', lineHeight: 1.4, fontWeight: 700 }}>{title}</h3>
                    <p style={{ color: 'var(--color-text-body)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>{excerpt}</p>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F3F4F6', paddingTop: '20px', fontSize: '0.875rem', color: '#6B7280' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#E5E7EB' }}></div>
                            <span>{author}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Clock size={14} /> {readTime}
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link >
    );
}
