import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle } from 'lucide-react';
import Section from '../components/ui/Section';
import Badge from '../components/ui/Badge';
import PricingCard from '../components/ui/PricingCard';
import FAQ from '../components/ui/FAQ';

export default function Pricing() {
    const [billing, setBilling] = useState('monthly'); // 'monthly' | 'yearly'

    const plans = [
        {
            name: "Professional",
            price: billing === 'monthly' ? "149" : "124", // 1490 / 12 = ~124
            yearlyTotal: "1,490",
            description: "Perfect for independent brokers and small teams focused on maximum efficiency.",
            features: [
                "1 User Seat",
                "Up to 50 Reports / mo",
                "Prospect Tools Access",
                "Review Tools Access",
                "Prepare Tools Access",
                "Standard Email Support"
            ],
            isPopular: false
        },
        {
            name: "Agency",
            price: billing === 'monthly' ? "599" : "499", // 5990 / 12 = ~499
            yearlyTotal: "5,990",
            description: "Ideal for growing agencies focused on collaboration and scaling their client base.",
            features: [
                "Up to 5 User Seats",
                "Up to 250 Reports / mo",
                "Team Collaboration",
                "Centralized Admin Controls",
                "Priority Email & Chat Support",
                "API Access & Integrations"
            ],
            isPopular: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "For large brokerages and enterprises requiring maximum security and control.",
            features: [
                "Unlimited User Seats",
                "Unlimited Reports",
                "Advanced Team & Admin Features",
                "On-Premise Deployment Option",
                "Dedicated Account Manager",
                "Custom Integrations"
            ],
            isPopular: false,
            ctaText: "Contact Sales",
            ctaLink: "/contact"
        }
    ];

    const faqs = [
        {
            question: "Is there a free trial?",
            answer: "Yes! All of our plans start with a 14-day, no-obligation free trial. You get full access to the features of the plan you select to see the value for yourself."
        },
        {
            question: "Can I change my plan later?",
            answer: "Absolutely. You can upgrade or downgrade your plan at any time directly from your account settings."
        },
        {
            question: "What happens if I need more than my plan's report limit?",
            answer: "We've designed our tiers to provide plenty of room for growth. If you approach your limit, we'll notify you with options to upgrade to a higher tier to ensure your workflow is never interrupted."
        },
        {
            question: "Is my data secure?",
            answer: "Security is our highest priority. All data is encrypted in transit and at rest. For businesses requiring the ultimate level of control, our Enterprise plan offers a fully on-premise deployment option."
        }
    ];

    return (
        <div className="pricing-page">
            {/* Hero */}
            <Section padding="xl" style={{ paddingTop: '80px', paddingBottom: '120px', textAlign: 'center' }}>
                <div className="container">
                    <Badge color="green" style={{ marginBottom: '60px' }}>Transparent Pricing</Badge>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
                        Choose the plan that matches <br /><span className="text-primary">your ambition.</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-body)', maxWidth: '700px', margin: '0 auto 40px' }}>
                        No hidden fees, no complex formulas. Just the power to command your growth.
                    </p>

                    {/* Toggle */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '60px' }}>
                        <span style={{ fontWeight: 600, marginBottom:50 , color: billing === 'monthly' ? 'var(--color-text-heading)' : '#9CA3AF' }}>Monthly</span>
                        <button
                            onClick={() => setBilling(billing === 'monthly' ? 'yearly' : 'monthly')}
                            style={{
                                width: '64px',
                                height: '32px',
                                background: 'var(--color-primary)',
                                borderRadius: '100px',
                                position: 'relative',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            <motion.div
                                animate={{ x: billing === 'monthly' ? 4 : 36 }}
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    background: 'white',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    top: '4px',
                                    left: '0',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                                }}
                            />
                        </button>
                        <span style={{ fontWeight: 600, color: billing === 'yearly' ? 'var(--color-text-heading)' : '#9CA3AF' }}>
                            Yearly <span style={{ color: 'var(--color-primary)', fontSize: '0.85rem' }}>(Save 20%)</span>
                        </span>
                    </div>

                    {/* Cards Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'flex-start' }}>
                        {plans.map((plan, i) => (
                            <PricingCard
                                key={i}
                                {...plan}
                                interval="mo"
                                description={billing === 'yearly' && plan.price !== 'Custom' ? `${plan.description} Billed $${plan.yearlyTotal}/yr` : plan.description}
                            />
                        ))}
                    </div>
                </div>
            </Section>

            {/* FAQ */}
            <Section padding="xl" background="gray" style={{ paddingTop: '160px', paddingBottom: '160px' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Frequently Asked Questions</h2>
                        <p style={{ color: 'var(--color-text-body)', fontSize: '1.125rem' }}>Everything you need to know about our billing and plans.</p>
                    </div>

                    <div>
                        {faqs.map((faq, i) => (
                            <FAQ key={i} {...faq} />
                        ))}
                    </div>
                </div>
            </Section>

            {/* Final CTA */}
            <Section padding="xl" background="dark" style={{ textAlign: 'center', paddingTop: '160px', paddingBottom: '160px' }}>
                <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '24px' }}>Ready to Invest in Your Growth?</h2>
                <p style={{ color: '#9CA3AF', fontSize: '1.25rem', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
                    Stop losing time to manual work and start investing in strategic automation.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                    <button style={{ padding: '16px 32px', borderRadius: '100px', background: 'var(--color-primary)', color: 'white', fontWeight: 600, border: 'none', fontSize: '1.1rem', cursor: 'pointer' }}>Start 14-Day Free Trial</button>
                </div>
            </Section>
        </div>
    );
}
