import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Sparkles, Send } from 'lucide-react';

const CONVERSATION = [
    { type: 'user', text: "Find manufacturing companies in Ohio with revenue > $10M." },
    { type: 'agent', text: "I found 42 companies matching your criteria. Here are the top 5 with contact details for their CFOs." },
    { type: 'user', text: "Draft an email to the CFO of Acme Corp highlighting our cargo insurance." },
    { type: 'agent', text: "Drafting email to Jane Doe (CFO, Acme Corp)... Done. Ready to review and send." },
];

export default function AgentUserChat() {
    const [messages, setMessages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < CONVERSATION.length) {
            const timeout = setTimeout(() => {
                setMessages((prev) => [...prev, CONVERSATION[currentIndex]]);
                setCurrentIndex((prev) => prev + 1);
            }, currentIndex === 0 ? 500 : 2500); // Initial delay vs details delay

            return () => clearTimeout(timeout);
        } else {
            // Reset loop after a delay
            const resetTimeout = setTimeout(() => {
                setMessages([]);
                setCurrentIndex(0);
            }, 5000);
            return () => clearTimeout(resetTimeout);
        }
    }, [currentIndex]);

    return (
        <div style={{ perspective: '1500px', display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
            <motion.div
                initial={{ rotateX: 20, rotateY: -10, rotateZ: 5 }}
                animate={{ rotateX: 10, rotateY: 5, rotateZ: 2 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    boxShadow: '0 50px 100px -20px rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.5)',
                    padding: '32px',
                    transformStyle: 'preserve-3d',
                    border: '1px solid rgba(255, 255, 255, 0.5)'
                }}
            >
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', borderBottom: '1px solid #E5E7EB', paddingBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: 40, height: 40, borderRadius: '12px', background: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Sparkles size={20} color="white" />
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, color: '#111827' }}>Wilson AI</div>
                            <div style={{ fontSize: '0.8rem', color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981' }}></span> Online
                            </div>
                        </div>
                    </div>
                </div>

                {/* Messages Area */}
                <div style={{ height: '320px', display: 'flex', flexDirection: 'column', gap: '20px', overflow: 'hidden' }}>
                    <AnimatePresence mode='popLayout'>
                        {messages.map((msg, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ type: 'spring', damping: 15 }}
                                style={{
                                    alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
                                    maxWidth: '85%',
                                }}
                            >
                                <div style={{
                                    background: msg.type === 'user' ? '#111827' : '#F3F4F6',
                                    color: msg.type === 'user' ? 'white' : '#1F2937',
                                    padding: '16px 20px',
                                    borderRadius: msg.type === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                    fontSize: '1rem',
                                    lineHeight: 1.5
                                }}>
                                    {msg.text}
                                </div>
                                <div style={{
                                    fontSize: '0.75rem',
                                    color: '#9CA3AF',
                                    marginTop: '6px',
                                    textAlign: msg.type === 'user' ? 'right' : 'left',
                                    padding: '0 4px'
                                }}>
                                    {msg.type === 'user' ? 'You' : 'Wilson'}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Input Area (Visual only) */}
                <div style={{ marginTop: '24px', position: 'relative' }}>
                    <div style={{
                        background: '#F9FAFB',
                        border: '1px solid #E5E7EB',
                        borderRadius: '16px',
                        padding: '16px',
                        color: '#9CA3AF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <span>Ask Wilson anything...</span>
                        <div style={{ width: 32, height: 32, borderRadius: '8px', background: '#E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Send size={16} color="#6B7280" />
                        </div>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
