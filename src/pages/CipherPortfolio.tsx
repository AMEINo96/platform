import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CipherPortfolio() {
    return (
        <div className="min-h-screen bg-bg text-text p-8">
            <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                Back to Archive
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="font-display text-5xl font-bold mb-4">CIPHER</h1>
                <p className="text-xl text-text-muted mb-8">Creative Director</p>

                <div className="bg-panel border border-white/10 rounded-2xl p-8">
                    <p className="text-lg leading-relaxed">
                        Portfolio content for CIPHER goes here.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
