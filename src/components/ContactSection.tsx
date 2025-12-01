import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function ContactSection() {
    return (
        <section className="relative py-24 px-8">
            <div className="max-w-xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-panel border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10">
                        <h2 className="font-display text-3xl font-bold mb-2 text-center">
                            Engage the Shadows
                        </h2>
                        <p className="text-text-muted text-center mb-8 text-sm">
                            Initiate a secure channel. We are listening.
                        </p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-xs font-mono text-sand uppercase mb-1">Codename / Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-bg border border-white/10 rounded px-4 py-3 text-text focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all"
                                    placeholder="Enter your identifier"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-sand uppercase mb-1">Secure Frequency / Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-bg border border-white/10 rounded px-4 py-3 text-text focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all"
                                    placeholder="contact@frequency.com"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-sand uppercase mb-1">Transmission</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-bg border border-white/10 rounded px-4 py-3 text-text focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-all resize-none"
                                    placeholder="Brief your objective..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(159,122,234,0.3)] group"
                            >
                                <span>TRANSMIT</span>
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
