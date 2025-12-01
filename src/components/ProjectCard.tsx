import { motion } from 'framer-motion';
import type { AppConfig } from '../types';

interface ProjectCardProps {
    project: AppConfig;
    index: number;
    onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onClick={onClick}
            className="group relative bg-panel rounded-2xl p-4 shadow-xl cursor-pointer border border-white/5 hover:border-sand/30 transition-all duration-300"
        >
            {/* Thumbnail Container */}
            <div className="relative h-48 rounded-lg overflow-hidden mb-4 bg-black">
                <div className="absolute inset-0 bg-sand/10 mix-blend-overlay z-10 pointer-events-none" />
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />

                {/* Badges */}
                <div className="absolute top-3 right-3 flex gap-2 z-20">
                    {project.tags?.slice(0, 2).map((tag, i) => (
                        <span
                            key={i}
                            className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-black/60 backdrop-blur-md text-sand border border-sand/20 rounded"
                        >
                            {tag}
                        </span>
                    ))}
                </div>


            </div>

            {/* Content */}
            <div className="relative">
                <h3 className="text-xl font-display font-bold text-text tracking-tight group-hover:text-sand transition-colors">
                    {project.title}
                </h3>

                <p className="mt-2 text-sm text-text-muted line-clamp-2 leading-relaxed">
                    {project.description}
                </p>

                {/* Hover Reveal Button */}
                <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center opacity-60 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-mono text-sand uppercase tracking-wider">
                        {project.category || 'Project'}
                    </span>
                    <button className="text-xs font-bold text-bg bg-sand px-3 py-1 rounded hover:bg-white transition-colors">
                        OPEN CASE
                    </button>
                </div>
            </div>

            {/* Grain Texture Overlay */}
            <div className="absolute inset-0 rounded-2xl bg-grain opacity-20 pointer-events-none" />
        </motion.article>
    );
}
