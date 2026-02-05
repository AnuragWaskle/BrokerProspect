import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeatureTabs({ tabs }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="feature-tabs">
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        style={{
                            padding: '12px 24px',
                            borderRadius: '100px',
                            border: 'none',
                            background: activeTab === index ? 'var(--color-primary)' : 'var(--color-bg-gray)',
                            color: activeTab === index ? 'white' : 'var(--color-text-body)',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                        }}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            <div style={{ position: 'relative', minHeight: '400px' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="tab-content" style={{ background: 'white', borderRadius: '24px', padding: '40px', boxShadow: 'var(--shadow-xl)', border: '1px solid rgba(0,0,0,0.05)' }}>
                            {/* Could split this content further if needed */}
                            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '24px' }}>{tabs[activeTab].subtitle}</h3>
                                <p style={{ fontSize: '1.25rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: '32px' }}>
                                    {tabs[activeTab].content}
                                </p>
                                {tabs[activeTab].image && (
                                    <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                                        {typeof tabs[activeTab].image === 'string' ? <img src={tabs[activeTab].image} alt="" /> : tabs[activeTab].image}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
