import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Play, X } from 'lucide-react';
import appsData from './data/apps.json';
import type { AppConfig } from './types';

function App() {
  const [selectedApp, setSelectedApp] = useState<AppConfig | null>(null);

  const apps: AppConfig[] = appsData as AppConfig[];

  const handleAppClick = (app: AppConfig) => {
    if (app.openIn === 'modal') {
      setSelectedApp(app);
    } else {
      window.open(app.link, '_blank');
    }
  };

  return (
    <div className="min-h-screen text-white p-8">
      {/* Hero Section */}
      <header className="max-w-6xl mx-auto mb-16 text-center pt-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Our App Universe
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          A collection of our web creations. Play games, explore tools, and visit our websites.
        </motion.p>
      </header>

      {/* App Grid */}
      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apps.map((app, index) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all cursor-pointer group"
            onClick={() => handleAppClick(app)}
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={app.imageUrl}
                alt={app.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                {app.openIn === 'modal' ? (
                  <Play className="w-12 h-12 text-white" fill="currentColor" />
                ) : (
                  <ExternalLink className="w-12 h-12 text-white" />
                )}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{app.title}</h3>
              <p className="text-gray-400">{app.description}</p>
            </div>
          </motion.div>
        ))}
      </main>

      {/* Modal for Embedded Apps */}
      <AnimatePresence>
        {selectedApp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1a1a2e] w-full max-w-6xl h-[90vh] rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl"
            >
              <div className="absolute top-0 left-0 right-0 h-12 bg-black/50 flex items-center justify-between px-4 border-b border-white/5 z-10">
                <span className="font-semibold">{selectedApp.title}</span>
                <button
                  onClick={() => setSelectedApp(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="w-full h-full pt-12">
                <iframe
                  src={selectedApp.link}
                  className="w-full h-full border-0"
                  title={selectedApp.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
